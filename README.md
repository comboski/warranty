# Combo Ski – garanční prohlídka

Interaktivní průvodce pro zákazníky Combo Ski. Obsahuje instruktážní kapitoly, kontrolní otázky a registraci standardní nebo tříleté obchodní záruky.

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
