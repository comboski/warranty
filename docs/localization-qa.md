# Language rollout — 18 October 2026

Published locales: Czech, English, German, French, Italian, Spanish, Polish, Dutch, Romanian, Hungarian, Slovak and Slovenian. Portuguese is intentionally excluded.

## Meaning review

Reference: current Czech guide, supplied English SRT and owner-confirmed meanings in `translation-glossary.md`. Translation-service output was a build-time draft only. Manual corrections are recorded in `scripts/review-locales.mjs`, `scripts/review-subtitles.mjs` and `scripts/polish-locales.mjs`. This is not a native-speaker certification or a legal review.

Reviewed mounting slots/pins, front vs rear relative to the boot, unused front pin in snowshoe mode, boot sizing heel strap vs ratchet straps, fastening order, Velcro strap location, balanced stance, hockey stop vs snowplough, ice/rocks and packing without damage to the sliding surfaces. Corrected literal mistranslations including boot/car trunk, snowplough/snow removal and trainers/coaches.

English is kept simple. All five videos have selectable translated subtitles; video speech remains Czech. The original subtitle timing is retained as the source; short fragments are merged and existing gaps used for reading time without overlap. No translation service runs in the public website.

## Checks

- `scripts/build-locales.mjs`: all visible UI keys, balanced markup, social handles, legal links, mounting question repeated identically, unchanged answer indices, image CSS classes, subtitle timing and reading speed.
- Browser walkthrough: all 12 locales, all six chapters to registration, all 19 questions per locale.
- Browser negative checks: wrong first answer gives only a retry message; two correct blocks green, incorrect block red, in all 12 locales.
- Mobile-width review: German extended-warranty form at 390px, no horizontal overflow, example image 305px wide.
- `scripts/test-registration-locales.mjs`: local-only backend mocks, all 12 locale codes with both registration types, correct retailer storage, standard newsletter optional, extended consent required. No fake registrations inserted into the live sheet.
- Google Apps Script updated to deployment version 3, same endpoint, owner and access settings; only accepted language codes changed.

## Build maintenance

The JSON files in `public/guide/locales` are the editable translation sources. After editing them, run `node scripts/build-locales.mjs` and `node scripts/test-registration-locales.mjs`. Commit the resulting `locales.js` and VTT files with the sources.

`prepare-locales.mjs` is an optional draft-preparation tool, not part of deployment. Running it with language arguments overwrites those drafts; re-apply all review scripts and inspect differences before publishing. Do not regenerate reviewed translations automatically in CI.
