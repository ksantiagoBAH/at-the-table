# English and Spanish text

At the Table uses English (`en`) and Spanish (`es`). The selection is saved under
`at-the-table-language`. Stable lesson IDs share the existing completion record.
Spanish is text-only; English recordings remain available in English. Changing
language unmounts the lesson player and releases any playing audio.

Original educational content is translated in `src/spanish.ts`; interface strings
are in `src/es-ui.json`; Spanish prayers and explanatory speaker notes are in
`src/spanishSpoken.ts`. The educational translation has not yet been reviewed by
a Spanish-speaking parish catechist. Verified Spanish Scripture chapters and Mass instructions are linked where available. Source links that remain English are labeled.
Catechism citations link to the corresponding Spanish Vatican sections.

## Spanish liturgical sources

Use the U.S. **Misal Romano, tercera edición**, rather than translating the English
Missal wording freely. Spain and other territories may use different wording.
Checked October 9, 2026 against the USCCB's official chant/text resources:

- https://www.usccb.org/es/prayer-and-worship/the-mass/musica-para-el-misal-romano
- `saludo.pdf`, `acto-penitencial.pdf`, `gloria.pdf`, `liturgia-de-la-palabra.pdf`,
  `credo-i.pdf`, `orate-fratres.pdf`, `dialogo-del-prefacio.pdf`, `sanctus.pdf`,
  `aclamacion-memorial.pdf`, `doxologia.pdf`, `oracion-del-senor.pdf`,
  `signo-de-paz.pdf`, `agnus-dei.pdf`, `invitacion-a-la-comunion.pdf`,
  `bendicion.pdf`, `despedida.pdf` under https://www.usccb.org/resources/.

The PDFs contain music notation; the website displays only prayer text. The
memorial acclamations retain the Spanish invitation for each corresponding option.
The dismissal presents selected approved options, not an exhaustive list.

Spanish copyright acknowledgment:

> Texto del Misal Romano, tercera edición © 2014 United States Conference of
> Catholic Bishops – Conferencia Episcopal Mexicana. Se reservan todos los derechos.

The owner confirmed in this conversation on October 9, 2026 that they have Spanish
website permission. The permission document and any additional license conditions
have not been supplied or independently reviewed. The public PDF download policy
by itself covers printed reproduction; do not treat it or the English ICEL policy
as blanket permission for Spanish website publication. Preserve any additional
conditions in the owner's license when provided.

## Verification

`npm run test:language` checks both languages, all 28 Spanish lessons, the quizzes,
shared progress, language persistence, text-only Spanish, and accessibility and
layout on four viewport sizes in both themes. Existing English tests continue to
check the English prayer content and audio recordings. Native speaker review is
still needed before describing the educational translation as parish-approved.
