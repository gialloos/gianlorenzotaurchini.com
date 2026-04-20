/* ============================================================
   terminal.js  —  Personal Portfolio Terminal
   ============================================================ */

'use strict';

/* ─── I18N ──────────────────────────────────────────────────── */

const TRANSLATIONS = {
  it: {
    // Boot
    boot_skip: 'premi un tasto per saltare →',
    boot_msgs: [
      { text: '[  OK  ] Avvio sistema portfolio v2.0…',              cls: 'log-ok',   delay: 0    },
      { text: '[  OK  ] Caricamento kernel caffè…                ☕', cls: 'log-ok',   delay: 260  },
      { text: '[  OK  ] Montaggio file system progetti…',            cls: 'log-ok',   delay: 490  },
      { text: '[ WARN ] Troppi side-project in esecuzione',          cls: 'log-warn', delay: 710  },
      { text: '[  OK  ] Inizializzazione motore Swift…',             cls: 'log-ok',   delay: 900  },
      { text: '[  OK  ] Firebase: connesso',                         cls: 'log-ok',   delay: 1060 },
      { text: '[  OK  ] Particelle cosmiche: online',                cls: 'log-ok',   delay: 1210 },
      { text: '[ INFO ] Caricamento personalità del developer…',     cls: 'log-info', delay: 1420 },
      { text: '[  OK  ] Everything is ready. Welcome!',              cls: 'log-ok',   delay: 1680 },
    ],

    // Welcome
    welcome_name:     'gianlorenzo.taurchini',
    welcome_subtitle: 'Software Engineer · Italy 🇮🇹',
    welcome_hint:     "Digita <strong>help</strong> per vedere tutti i comandi, oppure prova <strong>about</strong> o <strong>portfolio</strong>.",
    welcome_ready:    'Sistema pronto. Welcome back.',

    // Help
    help_title: 'comandi disponibili',
    help_hint:  '💡 Usa Tab per l\'autocompletamento, ↑↓ per la history',
    help_rows: [
      ['help',      'mostra questo menu'],
      ['about',     'chi sono'],
      ['portfolio', 'lista di tutti i progetti'],
      ['skills',    'stack tecnico e skill level'],
      ['contact',   'come contattarmi'],
      ['games',     'mini-giochi 🎮'],
      ['lang it',   'passa all\'italiano'],
      ['lang en',   'switch to English'],
      ['clear',     'pulisce il terminale'],
      ['exit',      'easter egg 😄'],
    ],

    // About
    about_bio: `Demenziale, irriverente e simpatico, e sebbene io abbia una repulsione nei confronti della mia categoria professionale, sono un ingegnere informatico.
Amo i progetti che risolvono problemi reali, ma la cosa che più amo è over-ingegnerizzare cose semplici, così de botto, senza senso.`,
    about_hint_portfolio: 'per vedere i miei progetti',
    about_hint_contact:   'per metterti in contatto',

    // Portfolio
    portfolio_title: '📦 projects',
    portfolio_hint:  'Clicca su un progetto o digita il comando per saperne di più.',

    // Skills
    skills_title:  '⚡ tech stack & skills',
    skills_footer: '🎓 Sempre in aggiornamento — l\'unica costante è imparare.',

    // Contact
    contact_title:  '📬 contact',
    contact_footer: '💭 Rispondo sempre. Parliamo di idee, collaborazioni o anche solo di codice.',

    // Uptime
    uptime_title:  '📊 quick stats',

    // Games
    games_title:   '🎮 mini-games',
    game_snake_desc:  'Il classico senza tempo. Usa le frecce o WASD.',
    game_ovfl_desc:   'Potenze di 2 — accumula tile finché il sistema va in overflow.',
    game_mines_desc:  'Trova le mine prima che esplodano.',

    // Misc
    cmd_not_found: (raw) => `comando non trovato: ${raw}. Digita 'help' per i comandi disponibili.`,
    opening: (name) => `Apertura pagina ${name}…`,
    launching_snake:  '🐍 Avvio Snake…',
    launching_ovfl:   '⚡ Avvio OVERFLOW…',
    launching_mines:  '💣 Avvio MINEFIELD…',

    // OVERFLOW
    g2048_new:       'Nuova partita',
    g2048_restart:   '🔄 Rigioca',
    g2048_over:      'Game Over',
    g2048_win:       '⚡ OVERFLOW raggiunto!',
    g2048_continue:  'Continua',
    g2048_instr:     '<strong>Frecce</strong> / WASD per muovere · <strong>Swipe</strong> su mobile',

    // MINEFIELD
    mines_new:      'Nuova partita',
    mines_restart:  '🔄 Rigioca',
    mines_over:     'Boom! 💥 Game Over',
    mines_win:      '🏆 Campo liberato!',
    mines_flag:     'Flag',
    mines_time:     (s) => `Tempo: ${s}s`,
    mines_instr:    '<strong>Click</strong> per rivelare · <strong>Tasto dx / Flag</strong> per segnalare · Prima mossa sicura',
    exit_msg1: '😄 Nice try — questo terminale non si chiude!',
    exit_msg2: 'D\'altra parte, perché vorresti andartene?',

    // Lang command
    lang_changed: (l) => `[locale → ${l === 'en' ? 'en_US.UTF-8' : 'it_IT.UTF-8'}]`,
    already_lang: (l) => `Stai già usando ${l === 'it' ? 'l\'italiano' : 'English'}.`,
    lang_unknown: 'Lingue disponibili: it · en',

    // Modal
    modal_features: 'Features principali',
    modal_stack:    'Stack tecnologico',
    modal_appstore: '🍎 App Store',
    modal_github:   '🐙 GitHub',
    modal_website:  '🌐 Visita il sito',

    // Game strings
    snake_score_label: 'Score:',
    snake_best_label:  'Best:',
    snake_pause_text:  'PAUSA',
    snake_instr:       '<strong>WASD</strong> / frecce per muoverti · <strong>P</strong> per pausa · tocca per cambiare direzione (mobile)',
    snake_over_title:  '💀 Game Over',
    snake_over_sub:    (s,b) => `Score: ${s} · Best: ${b}`,
    snake_restart:     '🔄 Rigioca',
  },

  en: {
    // Boot
    boot_skip: 'press any key to skip →',
    boot_msgs: [
      { text: '[  OK  ] Booting portfolio system v2.0…',            cls: 'log-ok',   delay: 0    },
      { text: '[  OK  ] Loading coffee kernel…                   ☕', cls: 'log-ok',   delay: 260  },
      { text: '[  OK  ] Mounting project filesystem…',              cls: 'log-ok',   delay: 490  },
      { text: '[ WARN ] Too many side-projects running',            cls: 'log-warn', delay: 710  },
      { text: '[  OK  ] Initialising Swift engine…',               cls: 'log-ok',   delay: 900  },
      { text: '[  OK  ] Firebase: connected',                      cls: 'log-ok',   delay: 1060 },
      { text: '[  OK  ] Cosmic particles: online',                  cls: 'log-ok',   delay: 1210 },
      { text: '[ INFO ] Loading developer personality…',           cls: 'log-info', delay: 1420 },
      { text: '[  OK  ] Everything is ready. Welcome!',            cls: 'log-ok',   delay: 1680 },
    ],

    // Welcome
    welcome_name:     'gianlorenzo.taurchini',
    welcome_subtitle: 'Software Engineer · Italy 🇮🇹',
    welcome_hint:     "Type <strong>help</strong> to see all commands, or try <strong>about</strong> or <strong>portfolio</strong>.",
    welcome_ready:    'System ready. Welcome back.',

    // Help
    help_title: 'available commands',
    help_hint:  '💡 Use Tab for autocomplete, ↑↓ for history',
    help_rows: [
      ['help',      'show this menu'],
      ['about',     'who I am'],
      ['portfolio', 'list all projects'],
      ['skills',    'tech stack & skill levels'],
      ['contact',   'how to reach me'],
      ['games',     'mini-games 🎮'],
      ['lang en',   'switch to English'],
      ['lang it',   'passa all\'italiano'],
      ['clear',     'clear the terminal'],
      ['exit',      'easter egg 😄'],
    ],

    // About
    about_bio: `Zany, irreverent, and friendly, and although I have a repulsion for my professional category, I am a software engineer.
I love projects that solve real problems, but what I love most is over-engineering simple things... out of the blue, for absolutely no reason.`,
    about_hint_portfolio: 'to see my projects',
    about_hint_contact:   'to get in touch',

    // Portfolio
    portfolio_title: '📦 projects',
    portfolio_hint:  'Click a project card or type its command to learn more.',

    // Skills
    skills_title:  '⚡ tech stack & skills',
    skills_footer: '🎓 Always learning — the only constant.',

    // Contact
    contact_title:  '📬 contact',
    contact_footer: '💭 I always reply. Let\'s talk ideas, collaborations, or just code.',

    // Uptime
    uptime_title:  '📊 quick stats',

    // Games
    games_title:   '🎮 mini-games',
    game_snake_desc:  'The timeless classic. Use arrow keys or WASD.',
    game_ovfl_desc:   'Powers of 2 — stack tiles until the system overflows.',
    game_mines_desc:  'Find the mines before they blow up.',

    // Misc
    cmd_not_found: (raw) => `command not found: ${raw}. Type 'help' for available commands.`,
    opening: (name) => `Opening ${name} page…`,
    launching_snake:  '🐍 Launching Snake…',
    launching_ovfl:   '⚡ Launching OVERFLOW…',
    launching_mines:  '💣 Launching MINEFIELD…',

    // OVERFLOW
    g2048_new:       'New game',
    g2048_restart:   '🔄 Play again',
    g2048_over:      'Game Over',
    g2048_win:       '⚡ OVERFLOW reached!',
    g2048_continue:  'Continue',
    g2048_instr:     '<strong>Arrows</strong> / WASD to move · <strong>Swipe</strong> on mobile',

    // MINEFIELD
    mines_new:      'New game',
    mines_restart:  '🔄 Play again',
    mines_over:     'Boom! 💥 Game Over',
    mines_win:      '🏆 Field cleared!',
    mines_flag:     'Flag',
    mines_time:     (s) => `Time: ${s}s`,
    mines_instr:    '<strong>Click</strong> to reveal · <strong>Right-click / Flag</strong> to mark · First move is always safe',
    exit_msg1: '😄 Nice try — this terminal doesn\'t close!',
    exit_msg2: 'Why would you even want to leave?',

    // Lang command
    lang_changed: (l) => `[locale → ${l === 'en' ? 'en_US.UTF-8' : 'it_IT.UTF-8'}]`,
    already_lang: (l) => `You're already using ${l === 'en' ? 'English' : 'Italian'}.`,
    lang_unknown: 'Available languages: it · en',

    // Modal
    modal_features: 'Key features',
    modal_stack:    'Tech stack',
    modal_appstore: '🍎 App Store',
    modal_github:   '🐙 GitHub',
    modal_website:  '🌐 Visit website',

    // Game strings
    snake_score_label: 'Score:',
    snake_best_label:  'Best:',
    snake_pause_text:  'PAUSE',
    snake_instr:       '<strong>WASD</strong> / arrows to move · <strong>P</strong> to pause · swipe to steer (mobile)',
    snake_over_title:  '💀 Game Over',
    snake_over_sub:    (s,b) => `Score: ${s} · Best: ${b}`,
    snake_restart:     '🔄 Play again',
  },
};

/* ─── DATA ─────────────────────────────────────────────────── */

const ME = {
  name:     'Gianlorenzo Taurchini',
  alias:    'glt',
  role:     'Software Engineer',
  location: 'Italy 🇮🇹',
  contact: {
    email:    'gianlorenzotaurchini@gmail.com',
    github:   'https://github.com/gialloos',
    linkedin: 'https://it.linkedin.com/in/gian-lorenzo-taurchini',
  },
};

const PROJECTS = [
  {
    id: 'risikino',
    name: 'Risikino',
    tag_it: 'iOS App · Brand Identity',  tag_en: 'iOS App · Brand Identity',
    shortDesc_it: 'Il Risiko tascabile — app, sito web e brand identity.',
    shortDesc_en: 'Pocket Risiko — app, website and brand identity.',
    icon: '🎲',
    tech: ['Swift', 'SwiftUI', 'Game Center', 'CloudKit', 'HTML', 'CSS', 'JavaScript'],
    description_it: `Risikino è un progetto completo di cui ho curato ogni aspetto: dall'identità visiva del brand — logo, palette colori, tipografia — al sito web di presentazione, fino all'app iOS vera e propria.
L'app porta la classica esperienza del gioco da tavolo su iPhone con una UI moderna, partite multigiocatore in tempo reale e un sistema di classifiche online.
Ogni armata, ogni attacco, ogni alleanza — tutto nella tua tasca.`,
    description_en: `Risikino is a complete project where I handled every aspect: from the brand visual identity — logo, colour palette, typography — to the presentation website, all the way to the iOS app itself.
The app brings the classic board-game experience to iPhone with a modern UI, real-time multiplayer matches, and an online ranking system.
Every army, every attack, every alliance — in the palm of your hand.`,
    features_it: [
      'Brand identity completa: logo, palette, tipografia',
      'Sito web di presentazione del prodotto',
      'Multiplayer online in tempo reale',
      'Modalità locale pass-and-play',
      'Classifiche globali con Game Center',
    ],
    features_en: [
      'Full brand identity: logo, palette, typography',
      'Product presentation website',
      'Real-time online multiplayer',
      'Local pass-and-play mode',
      'Global leaderboards with Game Center',
    ],
    website: 'https://risikino.app',
    appStore: null,
    github: null,
  },
  {
    id: 'drew',
    name: 'Drew Clothing',
    tag_it: 'Web · E-commerce Shopify',  tag_en: 'Web · Shopify E-commerce',
    shortDesc_it: 'E-commerce streetwear realizzato con Shopify.',
    shortDesc_en: 'Streetwear e-commerce built with Shopify.',
    icon: '👕',
    tech: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
    description_it: `Sito e-commerce realizzato per un amico che produce e vende streetwear con il brand Drew Clothing Official.
Ho scelto Shopify per dargli la massima autonomia nella gestione quotidiana del negozio — prodotti, ordini, sconti — senza dipendere da uno sviluppatore per le operazioni di routine.
Il risultato è uno shop pulito, veloce e completamente gestibile in autonomia.`,
    description_en: `E-commerce website built for a friend who produces and sells streetwear under the Drew Clothing Official brand.
I chose Shopify to give him full autonomy in the day-to-day management of the store — products, orders, discounts — without depending on a developer for routine operations.
The result is a clean, fast shop that he can manage entirely on his own.`,
    features_it: [
      'Store Shopify personalizzato',
      'Design coerente con il brand streetwear',
      'Gestione prodotti e ordini in autonomia',
      'Ottimizzato per mobile',
      'Integrazione pagamenti e spedizioni',
    ],
    features_en: [
      'Custom Shopify store',
      'Design consistent with the streetwear brand',
      'Autonomous product and order management',
      'Mobile optimised',
      'Payments and shipping integration',
    ],
    website: 'https://www.drewclothingofficial.it',
    appStore: null,
    github: null,
  },
  {
    id: 'caelus',
    name: 'Caelus Nuclear',
    tag_it: 'Web · Startup · CTO',  tag_en: 'Web · Startup · CTO',
    shortDesc_it: 'Sono il CTO di Caelus Nuclear, startup nel settore nucleare.',
    shortDesc_en: 'I am CTO of Caelus Nuclear, a nuclear energy startup.',
    icon: '⚛️',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
    description_it: `Caelus Nuclear è una startup italiana che opera nel settore dell'energia nucleare pulita, con l'obiettivo di rendere il nucleare una fonte energetica sicura, scalabile e sostenibile per il futuro.
In questo progetto ricopro il ruolo di CTO: mi occupo dell'architettura tecnologica dell'azienda, della presenza digitale — dal sito istituzionale ai sistemi interni — e guido le scelte tecniche in linea con la visione del team.`,
    description_en: `Caelus Nuclear is an Italian startup operating in the clean nuclear energy sector, with the goal of making nuclear power a safe, scalable, and sustainable energy source for the future.
In this project I hold the role of CTO: I handle the company's technology architecture, digital presence — from the institutional website to internal systems — and drive technical decisions aligned with the team's vision.`,
    features_it: [
      'Ruolo di CTO e responsabile tecnologico',
      'Architettura dei sistemi digitali aziendali',
      'Sito istituzionale multilingua',
      'Gestione dell\'infrastruttura tech',
      'Energia nucleare pulita e sostenibile',
    ],
    features_en: [
      'CTO and technology lead role',
      'Company digital systems architecture',
      'Multilingual institutional website',
      'Tech infrastructure management',
      'Clean and sustainable nuclear energy',
    ],
    website: 'https://caelus-nuclear.com/en',
    appStore: null,
    github: null,
  },
  {
    id: 'pirrons',
    name: 'I Love Pirrons',
    tag_it: 'Web · Artista Musicale',  tag_en: 'Web · Music Artist',
    shortDesc_it: 'Sito per una delle artiste più interessanti del panorama italiano.',
    shortDesc_en: 'Website for one of Italy\'s most interesting music artists.',
    icon: '🎵',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description_it: `Sito web ideato e sviluppato interamente da me per Pirrons, una delle artiste musicali più interessanti e originali del panorama italiano.
Un progetto completo dalla concept alla messa online: ho curato l'identità visiva, il design, lo sviluppo e l'esperienza utente, costruendo un sito che rispecchia l'unicità artistica di Pirrons.`,
    description_en: `Website entirely conceived and developed by me for Pirrons, one of the most interesting and original music artists in the Italian scene.
A complete project from concept to launch: I handled the visual identity, design, development and user experience, building a site that reflects the artistic uniqueness of Pirrons.`,
    features_it: [
      'Concept e design ideati interamente da me',
      'Identità visiva coerente con l\'artista',
      'Esperienza utente curata nei dettagli',
      'Fully responsive',
      'Performance ottimizzate',
    ],
    features_en: [
      'Concept and design entirely by me',
      'Visual identity consistent with the artist',
      'Detail-focused user experience',
      'Fully responsive',
      'Optimised performance',
    ],
    website: 'https://ilovepirrons.com',
    appStore: null,
    github: null,
  },
];

const SKILLS = [
  { label: 'Swift / SwiftUI',  pct: 92, color: 'gold' },
  { label: 'iOS / Xcode',      pct: 90, color: 'gold' },
  { label: 'JavaScript / TS',  pct: 78, color: 'amber' },
  { label: 'React / Next.js',  pct: 72, color: 'amber' },
  { label: 'Node.js',          pct: 68, color: 'amber' },
  { label: 'Python',           pct: 65, color: 'dim' },
  { label: 'Firebase',         pct: 82, color: 'gold' },
  { label: 'UI/UX Design',     pct: 75, color: 'cream' },
  { label: 'Git / CI/CD',      pct: 80, color: 'gold' },
];


/* ─── PARTICLE BACKGROUND ───────────────────────────────────── */


class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
    this.animate();
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(70, Math.floor(window.innerWidth / 18));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.newParticle());
    }
  }

  newParticle() {
    return {
      x:    Math.random() * this.canvas.width,
      y:    Math.random() * this.canvas.height,
      r:    Math.random() * 1.2 + 0.3,
      vx:   (Math.random() - 0.5) * 0.25,
      vy:   (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.08,
    };
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212,175,55,${0.04 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.stroke();
        }
      }
    }

    this.particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${p.alpha * 0.6})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > this.canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height)  p.vy *= -1;
    });

    requestAnimationFrame(() => this.animate());
  }
}

/* ─── BOOT SEQUENCE ─────────────────────────────────────────── */

const ASCII_ART = `
 ██████╗ ██╗  ████████╗
██╔════╝ ██║  ╚══██╔══╝
██║  ███╗██║     ██║   
██║   ██║██║     ██║   
╚██████╔╝███████╗██║   
 ╚═════╝ ╚══════╝╚═╝   
`.trim();

async function runBoot(lang) {
  return new Promise(resolve => {
    const t      = TRANSLATIONS[lang];
    const logo   = document.getElementById('ascii-logo');
    const log    = document.getElementById('boot-log');
    const bar    = document.getElementById('boot-bar');
    const skip   = document.getElementById('boot-skip');

    logo.textContent  = ASCII_ART;
    skip.textContent  = t.boot_skip;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const screen = document.getElementById('boot-screen');
      screen.style.opacity = '0';
      setTimeout(() => { screen.style.display = 'none'; resolve(); }, 600);
    };

    document.addEventListener('keydown', finish, { once: true });
    skip.addEventListener('click', finish, { once: true });

    t.boot_msgs.forEach((msg, i) => {
      setTimeout(() => {
        if (done) return;
        const el = document.createElement('div');
        el.className = msg.cls;
        el.textContent = msg.text;
        log.appendChild(el);
        log.scrollTop = log.scrollHeight;
        bar.style.width = `${((i + 1) / t.boot_msgs.length) * 100}%`;
      }, msg.delay);
    });

    const totalTime = t.boot_msgs[t.boot_msgs.length - 1].delay + 900;
    setTimeout(finish, totalTime);
  });
}

/* ─── TERMINAL ENGINE ───────────────────────────────────────── */

class Terminal {
  constructor(initialLang = 'it') {
    this.lang     = initialLang;
    this.output   = document.getElementById('terminal-output');
    this.input    = document.getElementById('terminal-input');
    this.history  = [];
    this.histIdx  = -1;
    this.commands = this._buildCommands();

    this._bindEvents();
    this._updateLangToggle();
  }

  // ── i18n helper ─────────────────────────────────────────────
  t(key, ...args) {
    const val = TRANSLATIONS[this.lang][key];
    return typeof val === 'function' ? val(...args) : val;
  }

  // ── Lang switch ──────────────────────────────────────────────
  _setLang(lang) {
    if (lang === this.lang) {
      this._blank();
      this._line(this.t('already_lang', lang), 'out-dim');
      this._blank();
      return;
    }
    this.lang = lang;
    document.documentElement.lang = lang;
    this._updateLangToggle();
    this._updateStaticText();
    this._blank();
    this._line(`<span class="out-gold">${this.t('lang_changed', lang)}</span>`, 'out-dim');
    this.input.placeholder = lang === 'en' ? "type a command or 'help'…" : "digita un comando o 'help'…";
    this._blank();
    this._scrollBottom();
  }

  // Updates already-rendered elements tagged with data-i18n=“key”
  _updateStaticText() {
    this.output.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = TRANSLATIONS[this.lang][key];
      if (val !== undefined) el.innerHTML = typeof val === 'function' ? val() : val;
    });
  }

  _updateLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.lang);
    });
  }

  // ── Events ──────────────────────────────────────────────────
  _bindEvents() {
    this.input.addEventListener('keydown', e => this._onKey(e));

    document.querySelectorAll('[data-cmd]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.input.value = btn.dataset.cmd;
        this._submit();
      });
    });

    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      document.getElementById('mobile-quicknav')?.classList.toggle('hidden');
      this._scrollBottom();
    });

    // Language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this._setLang(btn.dataset.lang);
      });
    });
  }

  _onKey(e) {
    if (e.key === 'Enter') {
      this._submit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.histIdx < this.history.length - 1) {
        this.histIdx++;
        this.input.value = this.history[this.history.length - 1 - this.histIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.histIdx > 0) {
        this.histIdx--;
        this.input.value = this.history[this.history.length - 1 - this.histIdx];
      } else {
        this.histIdx = -1;
        this.input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this._autocomplete();
    }
  }

  _autocomplete() {
    const val = this.input.value.trim().toLowerCase();
    if (!val) return;
    const allCmds = Object.keys(this.commands);
    const matches = allCmds.filter(c => c.startsWith(val));
    if (matches.length === 1) {
      this.input.value = matches[0];
    } else if (matches.length > 1) {
      this._echoCmd(val);
      this._line(matches.join('  '), 'out-gold');
    }
  }

  _submit() {
    const raw = this.input.value.trim();
    if (!raw) return;
    this.input.value = '';
    this.histIdx = -1;
    this.history.push(raw);
    this._echoCmd(raw);
    const lower = raw.toLowerCase();

    // Handle "lang XX" as special two-word command
    if (lower.startsWith('lang')) {
      const parts = lower.split(/\s+/);
      this.commands['lang'](parts.slice(1));
    } else {
      const [cmd, ...args] = lower.split(/\s+/);
      const handler = this.commands[cmd];
      if (handler) {
        handler(args);
      } else {
        this._line(this.t('cmd_not_found', raw), 'out-red');
      }
    }

    this._scrollBottom();
    setTimeout(() => { this.input.focus(); }, 50);
  }

  // ── Output helpers ──────────────────────────────────────────

  _echoCmd(text) {
    const el = document.createElement('div');
    el.className = 'out-line out-cmd';
    el.innerHTML = `<span class="cmd-prompt">❯</span><span class="cmd-text">${this._esc(text)}</span>`;
    this.output.appendChild(el);
  }

  _line(text = '', cls = '') {
    const el = document.createElement('div');
    el.className = `out-line ${cls}`;
    el.innerHTML = text;
    this.output.appendChild(el);
    return el;
  }

  _blank() { this._line('', 'out-blank'); }
  _section(title) { this._line(title, 'out-section-title'); }

  _scrollBottom() {
    const body = document.getElementById('terminal-body');
    setTimeout(() => { body.scrollTop = body.scrollHeight; }, 50);
  }

  _esc(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ── Commands ────────────────────────────────────────────────

  _buildCommands() {
    const cmds = {};

    // LANG
    cmds['lang'] = (args) => {
      const target = (args[0] || '').toLowerCase();
      if (target === 'it' || target === 'en') {
        this._setLang(target);
      } else {
        this._blank();
        this._line(this.t('lang_unknown'), 'out-dim');
        this._blank();
      }
    };

    // HELP
    cmds['help'] = () => {
      this._blank();
      this._section(this.t('help_title'));

      const table = document.createElement('table');
      table.className = 'help-table';
      this.t('help_rows').forEach(([cmd, desc]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="cmd-name">${cmd}</td><td class="cmd-desc">${desc}</td>`;
        table.appendChild(tr);
      });

      const wrapper = document.createElement('div');
      wrapper.className = 'out-line';
      wrapper.appendChild(table);
      this.output.appendChild(wrapper);

      this._blank();
      this._line(`<span class="out-dim">${this.t('help_hint')}</span>`);
      this._blank();
    };

    // ABOUT
    cmds['about'] = () => {
      this._blank();
      const banner = document.createElement('div');
      banner.className = 'out-line welcome-banner fade-in';
      banner.innerHTML = `
        <h1>👋 ${this.lang === 'en' ? 'Hi, I\'m' : 'Ciao, sono'} ${ME.name}</h1>
        <div class="subtitle">${ME.role} · ${ME.location}</div>
        <p style="font-family:var(--font-ui);font-size:0.88rem;color:var(--text);line-height:1.8;margin:0">
          ${this.t('about_bio').replace(/\n/g,'<br>')}
        </p>
      `;
      this.output.appendChild(banner);
      this._blank();
      this._line(`📂 <span class="out-gold">portfolio</span> <span class="out-dim">— ${this.t('about_hint_portfolio')}</span>`);
      this._line(`📬 <span class="out-gold">contact</span>   <span class="out-dim">— ${this.t('about_hint_contact')}</span>`);
      this._blank();
    };

    // PORTFOLIO
    cmds['portfolio'] = () => {
      this._blank();
      this._section(this.t('portfolio_title'));
      this._line(this.t('portfolio_hint'), 'out-dim');
      this._blank();

      const grid = document.createElement('div');
      grid.className = 'out-line projects-grid';

      PROJECTS.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <div class="pc-tag">${p[`tag_${this.lang}`]}</div>
          <div class="pc-name">${p.icon} ${p.name}</div>
          <div class="pc-desc">${p[`shortDesc_${this.lang}`]}</div>
          <div class="pc-cmd">$ ${p.id}</div>
        `;
        card.addEventListener('click', () => { this.commands[p.id]?.(); });
        grid.appendChild(card);
      });

      this.output.appendChild(grid);
      this._blank();
    };

    // Individual project pages
    PROJECTS.forEach(p => {
      cmds[p.id] = () => {
        this._blank();
        this._line(this.t('opening', p.name), 'out-dim');
        this._blank();
        setTimeout(() => this._showProjectModal(p), 200);
      };
    });

    // SKILLS
    cmds['skills'] = () => {
      this._blank();
      this._section(this.t('skills_title'));
      this._blank();
      this._line('<span class="out-dim">🚀 Lavori in corso... Torna presto! / Work in progress... Check back soon!</span>');
      this._blank();
      return; // TODO: Remove this block when skills are ready


      const container = document.createElement('div');
      container.className = 'out-line skills-section';

      SKILLS.forEach(s => {
        const row = document.createElement('div');
        row.className = 'skill-row';
        row.innerHTML = `
          <span class="skill-label">${s.label}</span>
          <div class="skill-bar-track">
            <div class="skill-bar-fill ${s.color}" data-pct="${s.pct}"></div>
          </div>
          <span class="skill-pct">${s.pct}%</span>
        `;
        container.appendChild(row);
      });

      this.output.appendChild(container);
      setTimeout(() => {
        container.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
      }, 100);

      this._blank();
      this._line(`<span class="out-dim">${this.t('skills_footer')}</span>`);
      this._blank();
    };

    // CONTACT
    cmds['contact'] = () => {
      this._blank();
      this._section(this.t('contact_title'));
      this._blank();

      const links = [
        { icon: '✉️', label: 'Email',    value: ME.contact.email,        href: `mailto:${ME.contact.email}` },
        { icon: '🐙', label: 'GitHub',   value: 'gialloos',              href: ME.contact.github },
        { icon: '💼', label: 'LinkedIn', value: 'gian-lorenzo-taurchini',href: ME.contact.linkedin },
      ];

      const container = document.createElement('div');
      container.className = 'out-line contact-links';

      links.forEach(l => {
        const a = document.createElement('a');
        a.className = 'contact-link';
        a.href = l.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `
          <span class="cl-icon">${l.icon}</span>
          <span class="cl-label">${l.label}</span>
          <span class="cl-value">${l.value}</span>
        `;
        container.appendChild(a);
      });

      this.output.appendChild(container);
      this._blank();
      this._line(`<span class="out-dim">${this.t('contact_footer')}</span>`);
      this._blank();
    };


    // GAMES menu

    cmds['games'] = () => {
      this._blank();
      this._section(this.t('games_title'));
      this._blank();

      const list = document.createElement('div');
      list.className = 'out-line games-list';

      const games = [
        { id: 'snake',    icon: '🐍', name: 'Snake',    descKey: 'game_snake_desc', cmd: 'snake'    },
        { id: 'overflow', icon: '⚡', name: 'OVERFLOW', descKey: 'game_ovfl_desc',  cmd: 'overflow' },
        { id: 'mines',    icon: '💣', name: 'MINEFIELD',descKey: 'game_mines_desc', cmd: 'mines'    },
      ];

      games.forEach(g => {
        const item = document.createElement('div');
        item.className = 'game-item';
        item.innerHTML = `
          <span class="gi-icon">${g.icon}</span>
          <div class="gi-info">
            <div class="gi-name">${g.name}</div>
            <div class="gi-desc">${this.t(g.descKey)}</div>
          </div>
          <span class="gi-cmd">$ ${g.cmd}</span>
        `;
        item.addEventListener('click', () => {
          if (g.id === 'snake')    this._launchSnake();
          if (g.id === 'overflow') this._launchOverflow();
          if (g.id === 'mines')    this._launchMines();
        });
        list.appendChild(item);
      });

      this.output.appendChild(list);
      this._blank();
    };

    cmds['snake']    = () => { this._blank(); this._line(this.t('launching_snake'), 'out-dim'); this._blank(); setTimeout(() => this._launchSnake(),    100); };
    cmds['overflow'] = () => { this._blank(); this._line(this.t('launching_ovfl'),  'out-dim'); this._blank(); setTimeout(() => this._launchOverflow(), 100); };
    cmds['mines']    = () => { this._blank(); this._line(this.t('launching_mines'), 'out-dim'); this._blank(); setTimeout(() => this._launchMines(),    100); };

    cmds['clear'] = () => { this.output.innerHTML = ''; this._showWelcome(); };

    cmds['exit'] = () => {
      this._blank();
      this._line(`😄 <span class="out-amber">${this.t('exit_msg1')}</span>`);
      this._line(`<span class="out-dim">${this.t('exit_msg2')}</span>`);
      this._blank();
    };

    return cmds;
  }

  // ── Project Modal ────────────────────────────────────────────

  _showProjectModal(p) {
    const overlay = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    const L = this.lang;
    const t = TRANSLATIONS[L];

    const featuresHtml = (p[`features_${L}`] || p.features_it)
      .map(f => `<li style="color:var(--text);font-family:var(--font-ui);font-size:0.84rem;margin-bottom:4px;line-height:1.65">${f}</li>`)
      .join('');
    const techHtml = p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');

    let linksHtml = '';
    if (p.website)  linksHtml += `<a class="store-link" href="${p.website}" target="_blank" rel="noopener">${t.modal_website}</a>`;
    if (p.appStore) linksHtml += `<a class="store-link" href="${p.appStore}" target="_blank" rel="noopener">${t.modal_appstore}</a>`;
    if (p.github)   linksHtml += `<a class="store-link secondary" href="${p.github}" target="_blank" rel="noopener">${t.modal_github}</a>`;

    content.innerHTML = `
      <div class="m-tag">${p[`tag_${L}`]}</div>
      <h2>${p.icon} ${p.name}</h2>
      <p>${(p[`description_${L}`] || p.description_it).replace(/\n/g,'<br>')}</p>
      <div class="m-section-label">${t.modal_features}</div>
      <ul style="padding-left:1.2rem;margin-bottom:0.5rem">${featuresHtml}</ul>
      <div class="m-section-label">${t.modal_stack}</div>
      <div class="tech-chips">${techHtml}</div>
      ${linksHtml ? `<div class="store-links">${linksHtml}</div>` : ''}
    `;

    overlay.classList.remove('hidden');
    this._scrollBottom();
  }

  // ── Snake Game ───────────────────────────────────────────────

  _launchSnake() {
    const CELL = 20, COLS = 20, ROWS = 20;
    const W = CELL * COLS, H = CELL * ROWS;
    const overlay   = document.getElementById('game-modal');
    const container = document.getElementById('game-container');

    container.innerHTML = `
      <h2>🐍 Snake</h2>
      <div class="game-score">${this.t('snake_score_label')} <span id="snake-score">0</span> &nbsp;|&nbsp; ${this.t('snake_best_label')} <span id="snake-best">0</span></div>
      <canvas id="snake-canvas" width="${W}" height="${H}" style="max-width:min(${W}px,80vw);height:auto"></canvas>
      <div class="game-instructions">${this.t('snake_instr')}</div>
    `;

    overlay.classList.remove('hidden');

    const canvas = document.getElementById('snake-canvas');
    const ctx    = canvas.getContext('2d');
    let score = 0, best = 0, paused = false, running = true;
    const rand = n => Math.floor(Math.random() * n);
    let snake = [{ x: 10, y: 10 }];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let food = { x: rand(COLS), y: rand(ROWS) };
    let interval;

    // capture t ref for closures
    const tSnake = () => TRANSLATIONS[this.lang];

    const placeFood = () => {
      do { food = { x: rand(COLS), y: rand(ROWS) }; }
      while (snake.some(s => s.x === food.x && s.y === food.y));
    };

    const draw = () => {
      ctx.fillStyle = '#0c0b09';
      ctx.fillRect(0, 0, W, H);

      for (let x = 0; x < COLS; x++) {
        for (let y = 0; y < ROWS; y++) {
          ctx.fillStyle = (x+y) % 2 === 0 ? 'rgba(255,255,255,0.008)' : 'rgba(0,0,0,0)';
          ctx.fillRect(x*CELL, y*CELL, CELL, CELL);
        }
      }

      // Food
      ctx.fillStyle = '#C0392B';
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(192,57,43,0.4)';
      ctx.beginPath();
      ctx.arc(food.x * CELL + CELL/2, food.y * CELL + CELL/2, CELL/2 - 3, 0, Math.PI*2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Snake
      snake.forEach((seg, i) => {
        const t2 = 1 - i / snake.length;
        ctx.fillStyle = i === 0 ? '#D4AF37' : `rgba(${Math.floor(180*t2+40)},${Math.floor(120*t2+30)},${Math.floor(10*t2)},${0.6+0.4*t2})`;
        ctx.shadowBlur = i === 0 ? 8 : 0;
        ctx.shadowColor = 'rgba(212,175,55,0.5)';
        const pad = i === 0 ? 1 : 2;
        ctx.beginPath();
        ctx.roundRect(seg.x*CELL+pad, seg.y*CELL+pad, CELL-pad*2, CELL-pad*2, 4);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (paused) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0,0,W,H);
        ctx.fillStyle = '#D4AF37';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText(tSnake().snake_pause_text, W/2, H/2);
        ctx.textAlign = 'left';
      }
    };

    const gameOver = () => {
      running = false;
      clearInterval(interval);
      if (score > best) best = score;

      container.querySelector('.game-instructions')?.remove();
      const msg = document.createElement('div');
      msg.className = 'game-over-msg';
      msg.innerHTML = `
        <h3>${tSnake().snake_over_title}</h3>
        <p>${tSnake().snake_over_sub(score, best)}</p>
        <button class="btn-restart" id="restart-btn">${tSnake().snake_restart}</button>
      `;
      container.appendChild(msg);
      document.getElementById('restart-btn')?.addEventListener('click', () => {
        msg.remove();
        score = 0; snake = [{x:10,y:10}]; dir = nextDir = {x:1,y:0}; placeFood();
        running = true; paused = false;
        container.insertAdjacentHTML('beforeend', `<div class="game-instructions">${tSnake().snake_instr}</div>`);
        startLoop();
      });
    };

    const step = () => {
      if (paused || !running) return;
      dir = { ...nextDir };
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS || snake.some(s => s.x === head.x && s.y === head.y)) {
        gameOver(); return;
      }
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('snake-score').textContent = score;
        document.getElementById('snake-best').textContent  = Math.max(score, best);
        placeFood();
      } else { snake.pop(); }
      draw();
    };

    const startLoop = () => { clearInterval(interval); interval = setInterval(step, 130); draw(); };

    const onKey = e => {
      const map = { ArrowUp:{x:0,y:-1}, ArrowDown:{x:0,y:1}, ArrowLeft:{x:-1,y:0}, ArrowRight:{x:1,y:0}, w:{x:0,y:-1}, s:{x:0,y:1}, a:{x:-1,y:0}, d:{x:1,y:0}, W:{x:0,y:-1}, S:{x:0,y:1}, A:{x:-1,y:0}, D:{x:1,y:0} };
      if (e.key === 'p' || e.key === 'P') { paused = !paused; draw(); return; }
      const nd = map[e.key];
      if (nd && !(nd.x === -dir.x && nd.y === -dir.y)) nextDir = nd;
    };
    document.addEventListener('keydown', onKey);

    let touchStart = null;
    canvas.addEventListener('touchstart', e => { touchStart = e.touches[0]; }, { passive: true });
    canvas.addEventListener('touchend', e => {
      if (!touchStart) return;
      const dx = e.changedTouches[0].clientX - touchStart.clientX;
      const dy = e.changedTouches[0].clientY - touchStart.clientY;
      if (Math.abs(dx) > Math.abs(dy)) nextDir = dx > 0 ? {x:1,y:0} : {x:-1,y:0};
      else nextDir = dy > 0 ? {x:0,y:1} : {x:0,y:-1};
      touchStart = null;
    }, { passive: true });

    document.getElementById('game-close').onclick = () => {
      clearInterval(interval); running = false;
      document.removeEventListener('keydown', onKey);
      overlay.classList.add('hidden');
    };

    startLoop();
  }

  // ── OVERFLOW Game ────────────────────────────────────────────

  _launchOverflow() {
    const overlay   = document.getElementById('game-modal');
    const container = document.getElementById('game-container');
    const tL = () => TRANSLATIONS[this.lang];

    const SIZE = 4;
    let board, score, bestScore = 0, isOver = false, hasWon = false;

    const newBoard   = () => Array.from({length: SIZE}, () => Array(SIZE).fill(0));
    const transpose  = b => b[0].map((_, c) => b.map(r => r[c]));
    const revRows    = b => b.map(row => [...row].reverse());

    const addRandom = b => {
      const empty = [];
      for (let r = 0; r < SIZE; r++)
        for (let c = 0; c < SIZE; c++)
          if (b[r][c] === 0) empty.push([r, c]);
      if (!empty.length) return false;
      const [r, c] = empty[Math.floor(Math.random() * empty.length)];
      b[r][c] = Math.random() < 0.9 ? 2 : 4;
      return true;
    };

    const slideRow = row => {
      const f = row.filter(v => v !== 0);
      let gained = 0;
      const m = [];
      let i = 0;
      while (i < f.length) {
        if (i + 1 < f.length && f[i] === f[i + 1]) {
          const v = f[i] * 2; m.push(v); gained += v; i += 2;
        } else { m.push(f[i]); i++; }
      }
      while (m.length < SIZE) m.push(0);
      return { row: m, gained };
    };

    const moveLeft = b => {
      let gained = 0, changed = false;
      const nb = b.map(row => {
        const orig = [...row];
        const res = slideRow(row);
        gained += res.gained;
        if (res.row.some((v, i) => v !== orig[i])) changed = true;
        return res.row;
      });
      return { board: nb, gained, changed };
    };

    const move = dir => {
      if (isOver) return;
      let b = board.map(r => [...r]);
      let gained = 0, changed = false;
      if (dir === 'left')  { const r = moveLeft(b);                changed = r.changed; gained = r.gained; b = r.board; }
      if (dir === 'right') { const r = moveLeft(revRows(b));       changed = r.changed; gained = r.gained; b = revRows(r.board); }
      if (dir === 'up')    { const r = moveLeft(transpose(b));     changed = r.changed; gained = r.gained; b = transpose(r.board); }
      if (dir === 'down')  { const r = moveLeft(revRows(transpose(b))); changed = r.changed; gained = r.gained; b = transpose(revRows(r.board)); }

      if (!changed) return;
      board = b;
      score += gained;
      if (score > bestScore) bestScore = score;
      addRandom(board);
      render();
      checkState();
    };

    // -- tile colour ramp (gold palette)
    const tileStyle = val => ({
      0:    { bg: 'transparent',              fg: 'transparent',        border: 'rgba(212,175,55,0.06)' },
      2:    { bg: 'rgba(212,175,55,0.06)',    fg: '#6B6458',            border: 'rgba(212,175,55,0.1)'  },
      4:    { bg: 'rgba(212,175,55,0.12)',    fg: '#9A8B60',            border: 'rgba(212,175,55,0.18)' },
      8:    { bg: 'rgba(201,145,42,0.25)',    fg: '#C9912A',            border: 'rgba(201,145,42,0.3)'  },
      16:   { bg: 'rgba(212,175,55,0.35)',    fg: '#D4AF37',            border: 'rgba(212,175,55,0.4)'  },
      32:   { bg: 'rgba(212,175,55,0.50)',    fg: '#D4AF37',            border: 'rgba(212,175,55,0.55)' },
      64:   { bg: 'rgba(212,175,55,0.68)',    fg: '#0c0b09',            border: 'rgba(212,175,55,0.7)'  },
      128:  { bg: 'rgba(212,175,55,0.82)',    fg: '#0c0b09',            border: 'rgba(212,175,55,0.85)' },
      256:  { bg: '#D4AF37',                  fg: '#0c0b09',            border: '#D4AF37'               },
      512:  { bg: '#C9912A',                  fg: '#0c0b09',            border: '#C9912A'               },
      1024: { bg: '#B8860B',                  fg: '#E8E0C8',            border: '#B8860B'               },
      2048: { bg: '#E8C84A',                  fg: '#0c0b09',            border: '#E8C84A'               },
    })[val] || { bg: '#E8C84A', fg: '#0c0b09', border: '#E8C84A' };

    const render = () => {
      const grid = container.querySelector('.g2048-grid');
      if (!grid) return;
      grid.innerHTML = '';
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          const val = board[r][c];
          const s   = tileStyle(val);
          const tile = document.createElement('div');
          tile.className = 'g2048-tile';
          tile.style.cssText = `background:${s.bg};color:${s.fg};border-color:${s.border};`;
          if (val >= 1024) tile.style.fontSize = '0.85rem';
          else if (val >= 100) tile.style.fontSize = '0.95rem';
          if (val === 2048) tile.style.boxShadow = '0 0 14px rgba(232,200,74,0.45)';
          tile.textContent = val || '';
          grid.appendChild(tile);
        }
      }
      const sc = container.querySelector('#g2048-score');
      const bc = container.querySelector('#g2048-best');
      if (sc) sc.textContent = score;
      if (bc) bc.textContent = bestScore;
    };

    const checkState = () => {
      if (!hasWon && board.some(row => row.includes(2048))) {
        hasWon = true;
        showBanner(tL().g2048_win, true);
      }
      const full = board.every(row => row.every(v => v !== 0));
      if (full) {
        let canMove = false;
        for (let r = 0; r < SIZE && !canMove; r++)
          for (let c = 0; c < SIZE && !canMove; c++) {
            if (c + 1 < SIZE && board[r][c] === board[r][c+1]) canMove = true;
            if (r + 1 < SIZE && board[r][c] === board[r+1][c]) canMove = true;
          }
        if (!canMove) { isOver = true; showBanner(tL().g2048_over, false); }
      }
    };

    const showBanner = (msg, canContinue) => {
      const old = container.querySelector('.g2048-banner');
      if (old) old.remove();
      const wrap = container.querySelector('.g2048-wrapper');
      const banner = document.createElement('div');
      banner.className = 'g2048-banner';
      banner.innerHTML = `
        <div style="text-align:center">
          <div style="font-size:1rem;font-weight:700;color:var(--warm-white);margin-bottom:0.4rem">${msg}</div>
          <div style="font-size:0.75rem;color:var(--text-dim);margin-bottom:1rem">Score: ${score}</div>
          <div style="display:flex;gap:0.6rem;justify-content:center">
            ${canContinue ? `<button class="btn-restart" id="g2048-cont" style="background:transparent;color:var(--gold);border:1px solid var(--border);box-shadow:none">${tL().g2048_continue}</button>` : ''}
            <button class="btn-restart" id="g2048-restart">${tL().g2048_restart}</button>
          </div>
        </div>
      `;
      wrap.appendChild(banner);
      document.getElementById('g2048-cont')?.addEventListener('click', () => { banner.remove(); });
      document.getElementById('g2048-restart')?.addEventListener('click', () => { banner.remove(); startGame(); });
    };

    const startGame = () => {
      board = newBoard(); score = 0; isOver = false; hasWon = false;
      addRandom(board); addRandom(board);
      render();
    };

    // Build UI
    container.innerHTML = `
      <h2>⚡ OVERFLOW</h2>
      <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.8rem">
        <div class="game-score">Score: <span id="g2048-score">0</span> &nbsp;|&nbsp; Best: <span id="g2048-best">0</span></div>
        <button class="btn-restart" id="g2048-new" style="margin-left:auto;padding:5px 12px;font-size:0.62rem">${tL().g2048_new}</button>
      </div>
      <div class="g2048-wrapper">
        <div class="g2048-grid"></div>
      </div>
      <div class="game-instructions" style="margin-top:0.7rem">${tL().g2048_instr}</div>
    `;

    overlay.classList.remove('hidden');

    const onKey = e => {
      const map = { ArrowLeft:'left', ArrowRight:'right', ArrowUp:'up', ArrowDown:'down', a:'left', d:'right', w:'up', s:'down', A:'left', D:'right', W:'up', S:'down' };
      const dir = map[e.key];
      if (dir) { e.preventDefault(); move(dir); }
    };
    document.addEventListener('keydown', onKey);

    let ts = null;
    const wrapper = container.querySelector('.g2048-wrapper');
    wrapper.addEventListener('touchstart', e => { ts = e.touches[0]; }, { passive: true });
    wrapper.addEventListener('touchend', e => {
      if (!ts) return;
      const dx = e.changedTouches[0].clientX - ts.clientX;
      const dy = e.changedTouches[0].clientY - ts.clientY;
      if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 'right' : 'left');
      else move(dy > 0 ? 'down' : 'up');
      ts = null;
    }, { passive: true });

    document.getElementById('game-close').onclick = () => {
      document.removeEventListener('keydown', onKey);
      overlay.classList.add('hidden');
    };
    document.getElementById('g2048-new')?.addEventListener('click', startGame);

    startGame();
  }

  // ── MINEFIELD Game ───────────────────────────────────────────

  _launchMines() {
    const overlay   = document.getElementById('game-modal');
    const container = document.getElementById('game-container');
    const tL = () => TRANSLATIONS[this.lang];

    const ROWS = 8;
    const COLS = 8;
    const MINES = 10;
    
    let board = [];
    let gameOver = false;
    let firstClick = true;
    let revealedCount = 0;
    let timer = 0;
    let timerInterval = null;

    const startTimer = () => {
      clearInterval(timerInterval);
      timer = 0;
      updateTimer();
      timerInterval = setInterval(() => {
        timer++;
        updateTimer();
      }, 1000);
    };

    const stopTimer = () => clearInterval(timerInterval);
    const updateTimer = () => {
      const el = document.getElementById('mines-timer');
      if (el) el.innerHTML = tL().mines_time(timer);
    };

    const buildBoard = () => {
      board = Array.from({length: ROWS}, () => 
        Array.from({length: COLS}, () => ({ mine: false, revealed: false, flag: false, count: 0 }))
      );
    };

    const placeMines = (firstR, firstC) => {
      let placed = 0;
      while (placed < MINES) {
        const r = Math.floor(Math.random() * ROWS);
        const c = Math.floor(Math.random() * COLS);
        // Avoid first click area (3x3 area around it)
        const isSafeZone = Math.abs(r - firstR) <= 1 && Math.abs(c - firstC) <= 1;
        if (!board[r][c].mine && !isSafeZone) {
          board[r][c].mine = true;
          placed++;
        }
      }
      
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (!board[r][c].mine) {
            let count = 0;
            for (let i = -1; i <= 1; i++) {
              for (let j = -1; j <= 1; j++) {
                if (r+i >= 0 && r+i < ROWS && c+j >= 0 && c+j < COLS && board[r+i][c+j].mine) count++;
              }
            }
            board[r][c].count = count;
          }
        }
      }
    };

    const reveal = (r, c) => {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
      const cell = board[r][c];
      if (cell.revealed || cell.flag) return;

      cell.revealed = true;
      revealedCount++;

      const el = document.getElementById(`mine-${r}-${c}`);
      if (el) {
        el.classList.add('revealed');
        if (cell.mine) {
          el.innerHTML = '💣';
          el.classList.add('mine-hit');
        } else if (cell.count > 0) {
          el.innerHTML = cell.count;
          el.setAttribute('data-num', cell.count);
        } else {
          el.innerHTML = '';
        }
      }

      if (cell.count === 0 && !cell.mine) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            reveal(r+i, c+j);
          }
        }
      }
    };

    const revealAll = () => {
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (board[r][c].mine) reveal(r, c);
        }
      }
    };

    const checkWin = () => {
      if (revealedCount === (ROWS * COLS) - MINES) {
        gameOver = true;
        stopTimer();
        const banner = document.createElement('div');
        banner.className = 'g2048-banner'; // reuse banner style
        banner.innerHTML = `<div style="text-align:center">
          <div style="font-size:1.4rem;color:var(--gold);margin-bottom:0.5rem">🏆</div>
          <div style="font-size:0.9rem;color:var(--warm-white);font-weight:700">${tL().mines_win}</div>
          <div style="font-size:0.7rem;color:var(--text-dim);margin:0.5rem 0">${tL().mines_time(timer)}</div>
          <button id="mines-restart-win" class="btn-restart" style="margin-top:0.4rem;padding:6px 14px;font-size:0.65rem">${tL().mines_restart}</button>
        </div>`;
        document.getElementById('mines-board-wrap').appendChild(banner);
        document.getElementById('mines-restart-win').onclick = startGame;
      }
    };

    const handleCellClick = (r, c, isRightClick = false) => {
      if (gameOver) return;
      const cell = board[r][c];

      if (isRightClick) {
        if (!cell.revealed) {
          cell.flag = !cell.flag;
          const el = document.getElementById(`mine-${r}-${c}`);
          el.innerHTML = cell.flag ? '🚩' : '';
        }
        return;
      }

      if (cell.flag) return;

      if (firstClick) {
        firstClick = false;
        placeMines(r, c);
        startTimer();
      }

      if (cell.mine) {
        gameOver = true;
        stopTimer();
        revealAll();
        
        const banner = document.createElement('div');
        banner.className = 'g2048-banner';
        banner.innerHTML = `<div style="text-align:center">
          <div style="font-size:1.4rem;margin-bottom:0.5rem">💥</div>
          <div style="font-size:0.9rem;color:#C0392B;font-weight:700">${tL().mines_over}</div>
          <button id="mines-restart-lose" class="btn-restart" style="margin-top:1rem;padding:6px 14px;font-size:0.65rem">${tL().mines_restart}</button>
        </div>`;
        setTimeout(() => {
          document.getElementById('mines-board-wrap').appendChild(banner);
          document.getElementById('mines-restart-lose').onclick = startGame;
        }, 800);
      } else {
        reveal(r, c);
        checkWin();
      }
    };

    const render = () => {
      container.innerHTML = `
        <h2>💣 MINEFIELD</h2>
        <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.8rem">
          <div class="game-score" id="mines-timer">${tL().mines_time(0)}</div>
          <button class="btn-restart" id="mines-new" style="margin-left:auto;padding:5px 12px;font-size:0.62rem">${tL().mines_new}</button>
        </div>
        <div id="mines-board-wrap" class="mines-wrapper">
          <div class="mines-grid" id="mines-grid"></div>
        </div>
        <div class="game-instructions" style="margin-top:1rem">${tL().mines_instr}</div>
      `;

      const gridEl = document.getElementById('mines-grid');
      
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const div = document.createElement('div');
          div.className = 'mines-cell';
          div.id = `mine-${r}-${c}`;
          
          div.addEventListener('click', () => handleCellClick(r, c));
          div.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            handleCellClick(r, c, true);
          });
          
          gridEl.appendChild(div);
        }
      }

      document.getElementById('mines-new').onclick = startGame;
    };

    const startGame = () => {
      gameOver = false;
      firstClick = true;
      revealedCount = 0;
      stopTimer();
      timer = 0;
      buildBoard();
      render();
    };

    overlay.classList.remove('hidden');
    document.getElementById('game-close').onclick = () => {
      stopTimer();
      overlay.classList.add('hidden');
    };

    startGame();
  }

  // ── Welcome screen ───────────────────────────────────────────

  _showWelcome() {
    const banner = document.createElement('div');
    banner.className = 'out-line welcome-banner fade-in';
    banner.innerHTML = `
      <h1>${this.t('welcome_name')}<span class="cursor"></span></h1>
      <div class="subtitle">${this.t('welcome_subtitle')}</div>
      <p class="hint" data-i18n="welcome_hint">${this.t('welcome_hint')}</p>
    `;
    this.output.appendChild(banner);
    this._blank();
    const readyLine = this._line(this.t('welcome_ready'), 'out-dim');
    readyLine.dataset.i18n = 'welcome_ready';
    this._blank();
  }
}

/* ─── MODALS CLOSE ───────────────────────────────────────────── */

document.getElementById('modal-close')?.addEventListener('click', () => {
  document.getElementById('project-modal').classList.add('hidden');
});
document.getElementById('project-modal')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden');
});

/* ─── INIT ───────────────────────────────────────────────────── */

(async () => {
  new ParticleSystem(document.getElementById('particles-canvas'));

  // Detect browser language
  const browserLang = navigator.language?.startsWith('en') ? 'en' : 'it';

  await runBoot(browserLang);

  const termEl = document.getElementById('main-terminal');
  termEl.classList.remove('hidden');
  termEl.style.opacity = '0';
  termEl.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => { termEl.style.opacity = '1'; });

  const terminal = new Terminal(browserLang);
  terminal._showWelcome();

  // Set initial input placeholder
  document.getElementById('terminal-input').placeholder =
    browserLang === 'en' ? "type a command or 'help'…" : "digita un comando o 'help'…";

  setTimeout(() => { document.getElementById('terminal-input').focus(); }, 600);
})();
