# Calottina — come puntare il sottodominio `calottina.gianlorenzotaurchini.com`

La sezione Calottina è pubblicata sotto il **base path** `/calottina/` dell'attuale sito
(Cloudflare Pages). Tutte le pagine usano **link relativi**, quindi funzionano identiche sia
sotto `gianlorenzotaurchini.com/calottina/…` sia, una volta configurato, sotto
`calottina.gianlorenzotaurchini.com/…`.

## URL attive SUBITO (base path — già online)

- Landing:        https://gianlorenzotaurchini.com/calottina/
- Privacy:        https://gianlorenzotaurchini.com/calottina/privacy/
- Supporto:       https://gianlorenzotaurchini.com/calottina/supporto/
- Elimina account: https://gianlorenzotaurchini.com/calottina/elimina-account/
- Termini:        https://gianlorenzotaurchini.com/calottina/termini/

Puoi già usare queste URL per App Store e Google Play. Il passaggio al sottodominio è opzionale.

## Opzione A — servire il contenuto SUL sottodominio (consigliata)

Mantiene `calottina.gianlorenzotaurchini.com` nella barra degli indirizzi.

1. **Cloudflare Dashboard → Workers & Pages → (progetto del sito) → Custom domains →
   Set up a custom domain** e aggiungi `calottina.gianlorenzotaurchini.com`.
   Cloudflare crea in automatico il record CNAME necessario.
2. **Rules → Transform Rules → Rewrite URL → Create rule** (rewrite dinamico del path):
   - **When incoming requests match:**
     `http.host eq "calottina.gianlorenzotaurchini.com" and not starts_with(http.request.uri.path, "/calottina")`
   - **Then rewrite path to** (Dynamic):
     `concat("/calottina", http.request.uri.path)`
   - Lascia la query string invariata.

   Così `calottina.gianlorenzotaurchini.com/supporto/` serve il contenuto di
   `/calottina/supporto/` senza cambiare l'URL mostrato.

3. **(SEO) Evita contenuto duplicato.** Con questa opzione lo stesso contenuto è raggiungibile
   da due host. Scegli quale è canonico:
   - se preferisci il **sottodominio** come canonico, aggiorna nei 5 file `index.html`
     i tag `<link rel="canonical">` e `og:url` da
     `https://gianlorenzotaurchini.com/calottina/…` a
     `https://calottina.gianlorenzotaurchini.com/…`, e aggiorna le voci in `../sitemap.xml`;
   - se preferisci il **base path**, lascia tutto com'è.

## Opzione B — redirect semplice (il sottodominio rimanda al base path)

Se non ti serve che il contenuto resti "sotto" il sottodominio:

1. Aggiungi comunque `calottina.gianlorenzotaurchini.com` come custom domain (passo A.1).
2. **Rules → Redirect Rules → Create rule**:
   - **When:** `http.host eq "calottina.gianlorenzotaurchini.com"`
   - **Then:** Dynamic redirect →
     `concat("https://gianlorenzotaurchini.com/calottina", http.request.uri.path)` — status **301**.

In questo caso l'URL finale mostrato all'utente è quello del base path (già canonico), niente
altre modifiche necessarie.

## Nota asset / OG
`img/og.png` e `img/apple-touch-icon.png` sono referenziati con URL assolute base-path
(`https://gianlorenzotaurchini.com/calottina/img/…`): funzionano da entrambi gli host. Se scegli
l'Opzione A con sottodominio canonico, puoi allinearle al sottodominio insieme ai canonical.
