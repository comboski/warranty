// Deploy as a web app: execute as yourself, access: Anyone.
// This endpoint never returns spreadsheet contents.
const SPREADSHEET_ID = '1zuFtAYPn2h_0jap_a6p7myolAQ2sy7kSVFk7SHItgJE';
const SHEET_NAME = 'Registrace';

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const p = JSON.parse(e.postData.contents);
    if (p.website) throw new Error('Neplatný požadavek.');
    const email = String(p.email || '').trim().toLowerCase();
    const extended = p.warrantyType === 'extended';
    const social = String(p.socialProof || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) throw new Error('Zadejte platný e-mail.');
    if (!['standard', 'extended'].includes(p.warrantyType)) throw new Error('Vyberte typ registrace.');
    if (extended && (social.length < 2 || social.length > 300 || p.marketingConsent !== true || p.warrantyTermsConsent !== true)) throw new Error('Potvrďte podmínky prodloužené záruky.');
    if (!/^[a-zA-Z0-9-]{20,80}$/.test(String(p.id || ''))) throw new Error('Neplatné ID registrace.');
    lock.waitLock(20000);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('List registrací nebyl nalezen.');
    const last = sheet.getLastRow();
    if (last >= 6 && sheet.getRange(6, 1, last - 5, 1).getValues().some(row => row[0] === p.id)) return json_({ok:true, id:p.id});
    const now = new Date().toISOString();
    const safe = value => /^[=+@\-\t\r]/.test(String(value)) ? "'" + value : String(value);
    sheet.getRange(Math.max(6, last + 1), 1, 1, 12).setValues([[
      p.id, now, safe(email), extended ? '3 roky – příspěvek + marketingový souhlas' : '2 roky – standardní',
      p.marketingConsent === true ? 'ANO' : 'NE', p.marketingConsent === true ? now : '',
      extended ? 'ANO' : 'NE', p.language === 'en' ? 'en' : 'cs',
      safe(String(p.source || 'direct').slice(0,60)), '1.2', '', extended ? safe(social) : ''
    ]]);
    SpreadsheetApp.flush();
    return json_({ok:true, id:p.id});
  } catch (error) {
    return json_({ok:false, error:'Registraci se nepodařilo uložit. Zkontrolujte údaje a zkuste to znovu.'});
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function doGet() {
  return json_({ok:true, service:'Combo Ski registration'});
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
