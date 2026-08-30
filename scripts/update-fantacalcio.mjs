import { chromium } from 'playwright';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const leagues = [
  {
    id: 'improta-topanato',
    name: 'Improta Topanato',
    competition: 'Campionato',
    competitionId: 91557,
    team: 'CAZZATHE',
    teamId: 8545304,
    platform: 'Leghe Fantacalcio',
    baseUrl: 'https://leghe.fantacalcio.it',
  },
  {
    id: 'eurolega-topanata',
    name: 'Eurolega Topanata',
    competition: 'Campionato 26-27',
    competitionId: 7531,
    team: 'Lele Mosina',
    teamId: 548792,
    platform: 'EuroLeghe Fantacalcio',
    baseUrl: 'https://euroleghe.fantacalcio.it',
  },
  {
    id: 'fiorucci-league', name: 'Fiorucci League', competition: 'Mafia League',
    competitionId: 159918, team: 'AL BEJGOVIC F.C.', teamId: 10226024,
    platform: 'Leghe Fantacalcio', baseUrl: 'https://leghe.fantacalcio.it',
  },
  {
    id: 'il-superfanta', name: '- IL SUPERFANTA -', competition: 'CAMPIONATO',
    competitionId: 306136, team: 'PARMA', teamId: null,
    platform: 'Leghe Fantacalcio', baseUrl: 'https://leghe.fantacalcio.it',
  },
  {
    id: 'sbutterata', name: 'SBUTTERATA', competition: 'SANDRAROFFOFIMONCINI',
    competitionId: 350819, team: 'Real Migrazione', teamId: 19304770,
    platform: 'Leghe Fantacalcio', baseUrl: 'https://leghe.fantacalcio.it',
  },
];

const outputPath = new URL('../fantacalcio/data/current.json', import.meta.url);

function number(value) {
  const normalized = String(value ?? '').trim().replace(',', '.');
  if (!normalized || normalized === '–' || normalized === '-') return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

async function scrapeLeague(page, league) {
  const username = process.env.FANTACALCIO_USERNAME;
  const password = process.env.FANTACALCIO_PASSWORD;
  if (!username || !password) throw new Error('Missing Fantacalcio credentials.');

  await page.goto(league.baseUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  for (const label of ['Continue without accepting', 'NON ACCETTO']) {
    const consent = page.getByRole('button', { name: label, exact: true });
    if (await consent.isVisible().catch(() => false)) await consent.click();
  }
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('#buttonLogin').click();
  await page.waitForTimeout(2_000);
  if (await page.locator('input[name="password"]').isVisible()) {
    throw new Error(`Authentication failed for ${league.platform}.`);
  }

  const root = `${league.baseUrl}/${league.id}/view/competition/${league.competitionId}`;
  await page.goto(`${root}/standings`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  const frame = page.frameLocator('#legacy-viewport');
  await frame.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 60_000 });

  const standings = await frame.locator('table tbody tr').evaluateAll(rows => rows.map(row =>
    [...row.querySelectorAll('td')].map(cell => cell.textContent.trim().replace(/\s*\+$/, ''))
  ).filter(cells => cells.length >= 12));

  const table = standings.map(cells => ({
    position: Number(cells[0]),
    team: cells[2],
    played: Number(cells[3]),
    wins: Number(cells[4]),
    draws: Number(cells[5]),
    losses: Number(cells[6]),
    goalsFor: Number(cells[7]),
    goalsAgainst: Number(cells[8]),
    goalDifference: Number(cells[9]),
    points: Number(cells[10]),
    totalPoints: number(cells[11]),
  }));

  await page.goto(`${root}/fixtures`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  const fixturesFrame = page.frameLocator('#legacy-viewport');
  await fixturesFrame.locator('h4').first().waitFor({ state: 'visible', timeout: 60_000 });

  const matchdays = await fixturesFrame.locator('h4').evaluateAll((headings, team) => headings
    .filter(heading => /Giornata/i.test(heading.textContent))
    .map(heading => {
      const list = heading.nextElementSibling;
      if (!list) return null;
      const names = [...list.querySelectorAll('h5')].map(node => node.textContent.trim());
      const scores = [...list.querySelectorAll('h5')].map(node => {
        const wrapper = node.parentElement;
        return wrapper?.textContent.trim() ?? '';
      });
      const index = names.findIndex(name => name.toLowerCase() === team.toLowerCase());
      if (index < 0) return null;
      const opponentIndex = index % 2 === 0 ? index + 1 : index - 1;
      return {
        matchday: Number((heading.textContent.match(/\d+/) || [])[0]),
        home: names[index % 2 === 0 ? index : opponentIndex],
        away: names[index % 2 === 0 ? opponentIndex : index],
        rawScore: scores[index] || scores[opponentIndex] || '',
      };
    }).filter(Boolean), team);

  return {
    id: league.id,
    name: league.name,
    competition: league.competition,
    team: league.team,
    platform: league.platform,
    standings: table,
    myStanding: table.find(row => row.team.toLowerCase() === league.team.toLowerCase()) ?? null,
    matchdays,
  };
}

await mkdir(new URL('../fantacalcio/data/', import.meta.url), { recursive: true });

let previous = { seasons: [] };
try {
  previous = JSON.parse(await readFile(outputPath, 'utf8'));
} catch {}

const browser = await chromium.launch({ headless: true });
try {
  const current = [];
  for (const league of leagues) {
    const context = await browser.newContext({ locale: 'it-IT' });
    const page = await context.newPage();
    current.push(await scrapeLeague(page, league));
    await context.close();
  }

  const compact = current.map(league => ({
    id: league.id,
    myStanding: league.myStanding,
    matchdays: league.matchdays.filter(day => day.rawScore && !/^0\s*vs\s*0$/i.test(day.rawScore)),
  }));
  const history = previous.history ?? [];
  const latestSignature = JSON.stringify(history.at(-1)?.leagues ?? null);
  const currentSignature = JSON.stringify(compact);
  if (latestSignature !== currentSignature) {
    history.push({ capturedAt: new Date().toISOString(), leagues: compact });
  }

  const snapshot = {
    season: '2026/27',
    updatedAt: new Date().toISOString(),
    leagues: current,
    otherLeagues: previous.otherLeagues ?? [],
    cups: previous.cups ?? [],
    history,
    seasons: previous.seasons ?? [],
  };
  await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`);
} finally {
  await browser.close();
}
