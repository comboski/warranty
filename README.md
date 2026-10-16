# Combo Ski – garanční prohlídka

Interaktivní průvodce pro zákazníky Combo Ski. Obsahuje instruktážní kapitoly, kontrolní otázky a registraci standardní nebo tříleté obchodní záruky.

## GitHub Pages

Veřejný web: https://comboski.github.io/warranty/

GitHub Actions workflow `pages.yml` publikuje obsah `public/guide` při ručním spuštění. Formulář posílá data jako JSON s typem `text/plain` na Google Apps Script nastavený v `public/guide/registration-config.js`. Úspěch se zobrazí pouze po odpovědi `ok: true`. Opakovaný pokus používá stejné ID, aby nevznikaly duplicity.

Google skript běží pod účtem `ondrej@severgear.com`, zapisuje do neveřejného listu `Registrace` a neposkytuje čtecí rozhraní. Zdroj je v `google-apps-script/Code.gs`. Původní nasazení Sites používá samostatnou databázi; jeho registrace se nadále synchronizují původní automatizací. Při změnách skriptu je nutné publikovat novou verzi jeho implementace v Apps Script.

## Funkce

- česká a anglická verze
- videa a obrázkové návody pro jednotlivé kapitoly
- kontrolní otázky před dokončením
- registrace bez čísla objednávky
- oddělená evidence marketingového souhlasu
- ukládání registrací do databáze D1
- rozlišení návštěv z QR kódu a e-shopu parametrem `source`

## Lokální spuštění

Požadován je Node.js 22.13 nebo novější.

```bash
pnpm install
pnpm run db:generate
pnpm run dev
```

Databázové schéma je v `db/schema.ts`, API pro registrace v `app/api/register/route.ts` a obsah průvodce v `public/guide/`.

## Soukromí

Repozitář neobsahuje zákaznické registrace, přístupové tokeny ani hesla. Produkční data jsou uložena odděleně od zdrojového kódu. Před ostrým spuštěním je nutné doplnit finální zásady ochrany osobních údajů a podmínky tříleté obchodní záruky.
