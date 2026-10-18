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
    const retailers = {'combo-ski':'E-shop Combo Ski',decathlon:'Decathlon',amazon:'Amazon',kaufland:'Kaufland'};
    const otherRetailer = String(p.otherRetailer || '').trim();
    if (p.retailer && !Object.prototype.hasOwnProperty.call(retailers,p.retailer) && p.retailer !== 'other') throw new Error('Neplatný prodejce.');
    if (p.retailer === 'other' && (!otherRetailer || otherRetailer.length > 150)) throw new Error('Vyplňte název prodejce.');
    const retailer = p.retailer === 'other' ? 'Jiný prodejce: ' + otherRetailer : (retailers[p.retailer] || '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) throw new Error('Zadejte platný e-mail.');
    if (!['standard', 'extended'].includes(p.warrantyType)) throw new Error('Vyberte typ registrace.');
    if (extended && (social.length < 2 || social.length > 300 || p.marketingConsent !== true || p.warrantyTermsConsent !== true)) throw new Error('Potvrďte podmínky prodloužené záruky.');
    if (!/^[a-zA-Z0-9-]{20,80}$/.test(String(p.id || ''))) throw new Error('Neplatné ID registrace.');
    lock.waitLock(20000);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('List registrací nebyl nalezen.');
    const last = sheet.getLastRow();
    if (last >= 6 && sheet.getRange(6, 1, last - 5, 1).getValues().some(row => row[0] === p.id)) return json_({ok:true, id:p.id});
    const cache = CacheService.getScriptCache();
    const cacheKey = 'email:' + Utilities.base64EncodeWebSafe(email);
    if (cache.get(cacheKey)) throw new Error('Please wait');
    const now = new Date().toISOString();
    const safe = value => /^[=+@\-\t\r]/.test(String(value)) ? "'" + value : String(value);
    if (!sheet.getRange(5,13).getValue()) {
      sheet.getRange(5,12).copyTo(sheet.getRange(5,13), {formatOnly:true});
      sheet.getRange(5,13).setValue('Místo nákupu');
      sheet.setColumnWidth(13,240);
    }
    sheet.getRange(Math.max(6, last + 1), 1, 1, 13).setValues([[
      p.id, now, safe(email), extended ? '3 roky – příspěvek + marketingový souhlas' : '2 roky – standardní',
      p.marketingConsent === true ? 'ANO' : 'NE', p.marketingConsent === true ? now : '',
      extended ? 'ANO' : 'NE', p.language === 'en' ? 'en' : 'cs',
      safe(String(p.source || 'direct').slice(0,60)), '1.2', '', extended ? safe(social) : '', safe(retailer)
    ]]);
    SpreadsheetApp.flush();
    cache.put(cacheKey, '1', 60);
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
