// Entirely local mocks: never sends a registration or touches Google Sheets.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=fs.readFileSync('google-apps-script/Code.gs','utf8');
const codes=['cs','en','de','fr','it','es','pl','nl','ro','hu','sk','sl'];
for(const language of codes)for(const warrantyType of ['standard','extended']){
  let saved;
  const context=vm.createContext({
    LockService:{getScriptLock:()=>({waitLock(){},hasLock:()=>true,releaseLock(){}})},
    SpreadsheetApp:{openById:()=>({getSheetByName:()=>({getLastRow:()=>5,getRange:()=>({getValue:()=>true,setValues(rows){saved=rows[0];}})})}),flush(){}},
    CacheService:{getScriptCache:()=>({get:()=>null,put(){}})},
    Utilities:{base64EncodeWebSafe:text=>Buffer.from(text).toString('base64url')},
    ContentService:{MimeType:{JSON:'application/json'},createTextOutput:text=>({text,setMimeType(){return this;}})}
  });
  vm.runInContext(source,context);
  const payload={id:'local-test-registration-000000-'+language,email:'test@example.com',warrantyType,retailer:'decathlon',language,source:'local-test',marketingConsent:warrantyType==='extended',warrantyTermsConsent:warrantyType==='extended',socialProof:'test_account'};
  const result=JSON.parse(context.doPost({postData:{contents:JSON.stringify(payload)}}).text);
  assert.equal(result.ok,true);
  assert.equal(saved[7],language);
  assert.equal(saved[4],warrantyType==='extended'?'ANO':'NE');
  assert.equal(saved[12],'Decathlon');
  if(warrantyType==='extended'){
    saved=undefined;payload.marketingConsent=false;
    assert.equal(JSON.parse(context.doPost({postData:{contents:JSON.stringify(payload)}}).text).ok,false);
    assert.equal(saved,undefined);
  }
}
console.log('Local registration tests passed: 12 languages × both warranty types; optional standard newsletter and required extended consent. No live data written.');
