# Selenite Premium Release Design

## Obiettivo

Pubblicare una sezione statica, pubblica e bilingue per Selenite alle URL `/selenite/`, `/selenite/privacy/`, `/selenite/support/` e `/selenite/terms/`, pronta per l'inserimento in App Store Connect e Google Play Console senza alterare le pagine esistenti.

## Architettura

Il repository è un sito statico composto da documenti HTML organizzati per cartella. Selenite seguirà la stessa convenzione: quattro file `index.html` e un foglio di stile condiviso in `selenite/styles.css`. Un piccolo script inline, progressivamente migliorativo, gestirà la preferenza IT/EN; senza JavaScript entrambi i contenuti resteranno disponibili e leggibili.

Non saranno introdotti framework, dipendenze, servizi esterni, cookie, analytics, form o asset raster. Le forme traslucide del brand saranno realizzate con CSS e SVG inline, quindi non è necessaria alcuna generazione grafica.

## Identità visiva

La direzione sarà editoriale, calma e tattile. La palette userà avorio caldo `#F5F0E7`, viola ardesia `#514D5A`, lavanda tenue `#D9CCDF`, salvia chiarissima `#D8E0D9` e lavanda media `#B5A1D4`. Superfici sovrapposte, bordi sottili, ombre diffuse e ampie forme arrotondate evocheranno fogli traslucidi piegati.

I titoli useranno Quicksand e il testo Poppins solo se tali font possono essere inclusi localmente senza nuove richieste di rete; in caso contrario saranno usati fallback sans-serif di sistema rispettando la privacy. La versione avorio resterà il tema principale. Non verrà aggiunta una dark mode artificiale.

## Landing page

La landing presenterà:

- hero con titolo, payoff e descrizioni IT/EN;
- selettore lingua accessibile IT/EN;
- pulsanti App Store e Google Play senza `href`, disabilitati semanticamente e marcati “Prossimamente / Coming soon”;
- spiegazione della meccanica di piega;
- panoramica dei quattro capitoli First Light, Reflection, Layers e Shadow;
- elenco completo delle caratteristiche premium e offline;
- messaggio sull'acquisto singolo senza prezzo fisso;
- footer con collegamenti a Privacy, Supporto e Termini.

Le decorazioni dell'hero rappresenteranno una griglia e fogli traslucidi sovrapposti, con un percorso visivo semplice tra punto iniziale e traguardo. Saranno decorative, nascoste alle tecnologie assistive e non indispensabili alla comprensione.

## Pagine legali e supporto

Privacy e Termini riporteranno integralmente i testi IT/EN forniti e la data dell'11 agosto 2026. La pagina Supporto conterrà le istruzioni e tutte le FAQ richieste in entrambe le lingue. Ogni indirizzo email sarà un collegamento `mailto:`.

Le tre pagine interne condivideranno intestazione, selettore lingua, navigazione di ritorno e footer con la landing. Il contenuto legale resterà semanticamente strutturato in sezioni e titoli, senza parafrasi che ne cambino il significato.

## Accessibilità e comportamento

Tutte le pagine useranno landmark HTML, gerarchia corretta dei titoli, focus visibile, controllo lingua utilizzabile da tastiera e contrasto almeno WCAG AA. Il layout funzionerà da 320 px in su. Le transizioni saranno decorative e disattivate con `prefers-reduced-motion`.

La preferenza della lingua sarà determinata dalla scelta dell'utente durante la pagina corrente oppure, al primo caricamento, dalla lingua del browser. Non verrà usato storage persistente, evitando qualunque necessità di cookie banner. La pagina resterà comprensibile anche se lo script non viene eseguito.

## SEO e distribuzione

Ogni pagina avrà title, description, canonical HTTPS e `robots=index,follow`. La landing includerà Open Graph con un'immagine social SVG locale o, se la compatibilità dei crawler rende inappropriato l'SVG, metadata OG completi senza dichiarare un'immagine inesistente. Non saranno inventati URL store.

`sitemap.xml` verrà estesa con le quattro URL e data `2026-08-11`. Le impostazioni di sicurezza esistenti in `_headers`, `robots.txt`, la 404 e la navigazione globale non saranno modificate salvo necessità verificata.

Il deployment seguirà il meccanismo già configurato nel repository GitHub. Prima di dichiararlo completato saranno verificati commit/push e risposte HTTPS 200 delle quattro URL pubbliche senza autenticazione.

## Integrazione nel portfolio

Selenite comparirà nella griglia portfolio della home seguendo lo stesso modello dati e lo stesso rendering delle altre app. La card sarà inserita subito dopo SETTE, con categoria, icona, descrizione breve e dettagli bilingue coerenti con la landing.

Il progetto avrà il comando terminale `selenite`; il parser esistente continuerà a supportare anche la forma `/selenite`, rimuovendo lo slash iniziale come già avviene per gli altri comandi progetto. Card e comando apriranno la stessa scheda progetto con collegamento pubblico a `/selenite/`. Non saranno introdotti percorsi di navigazione o componenti speciali per Selenite.

## Verifica

La consegna richiede:

- validazione strutturale dei quattro documenti HTML;
- controllo automatico dei link e dell'assenza di `href` fittizi;
- verifica dei metadati, canonical, sitemap e contenuti bilingue;
- controllo responsive a 320 px e desktop tramite browser;
- verifica di tastiera, focus e `prefers-reduced-motion`;
- controllo console;
- richieste HTTP HTTPS alle quattro URL dopo il deployment.

Non essendoci package manager o suite di test nel progetto, saranno usati gli strumenti di validazione disponibili localmente e controlli mirati equivalenti. Eventuali problemi saranno corretti prima della pubblicazione.
