const { test, expect } = require('@playwright/test');

// TEST CASES 
const testCases = [

  { id:'Pos_Fun_0001', input:'Oyaa kaeevadha?', expected:'ඔයා කෑවද?' },
  { id:'Pos_Fun_0002', input:'Sanduni mann enna rae venava eka nisa magee lap eka aran enna', 
    expected:'සන්ඩුනි මන්න් එන්න රැ වෙනව එක නිස මගේ lap එක අරන් එන්න' },
  { id:'Pos_Fun_0003', input:'Karunakarala ikmanin enna', expected:'ඛරුනකරලා ඉක්මනින් එන්න' },
  { id:'Pos_Fun_0004', input:'bae bae api ehema karamu', expected:'බැ බැ අපි එහෙම කරමු' },
  { id:'Pos_Fun_0005', input:'Mata badagini haebai mann daen yanavaa gedhara', expected:'මට බඩගිනි හැබෛ මන්න් ඩැන් යනවා ගෙදර' },
  { id:'Pos_Fun_0006', input:'Api beach ekata yamudha?', 
    expected:'අපි beach එකට යමුද?' },
  { id:'Pos_Fun_0007', input:'enna enna', expected:'එන්න එන්න' },
  { id:'Pos_Fun_0008', input:'Adha mann kaden kaeema gaththe eeke thibbe rice and curry, fried rice sahaa koththu', expected:'අද මන්න් කඩෙන් කෑම ගත්තෙ ඒකෙ තිබ්බෙ rice and curry, fried rice සහා කොත්තු' },
  { id:'Pos_Fun_0009', input:'123456789', expected:'' },
  { 
  id:'Pos_Fun_0010',
  input:'heta udeta mama hospital ekata yanna ona. doctor appointment eka 9.45ta. ehema nathnam late venne.',
  expected:'හෙට උදේ මම hospital එකට යන්න ඕන. doctor appointment එක 9.45ට. එහෙම නැත්නම් late වෙන්නේ.'},
{ id:'Pos_Fun_0011',input:'dan hari loku sathutaak', expected:'දැන් හරි ලොකු සතුටක්'
},

{ 
  id:'Pos_Fun_0012',
  input:'oyage file eka pen drive ekata copy karala lab ekata genna puluvanda?',
  expected:'ඔයාගේ file එක pen drive එකට copy කරලා lab එකට ගෙනන්න පුළුවන්ද?'
},

{ 
  id:'Pos_Fun_0013',
  input:'mama bank ekata giyaa. account balance eka check kala. passe ATM ekak hoyagena cash gaththa.',
  expected:'මම bank එකට ගියා. account balance එක check කළා. පස්සේ ATM එකක් හොයාගෙන cash ගත්තා.'
},

{ 
  id:'Pos_Fun_0014',
  input:'last week mama vegetables gaththa. 2kg carrot, 1kg beans saha 500g tomatoes thibuna.',
  expected:'පසුගිය සතියේ මම vegetables ගත්තා. 2kg carrot, 1kg beans සහ 500g tomatoes තිබුණා.'
},

{ 
  id:'Pos_Fun_0015',
  input:'project report eka review karala comments tika today evening ekata mail karanna puluvanda?',
  expected:'project report එක review කරලා comments ටික today evening එකට mail කරන්න පුළුවන්ද?'
},

{ 
  id:'Pos_Fun_0016',
  input:'mama dan bus halt ekata enava. traffic eka hari loku. oyaa thama yanne?',
  expected:'මම දැන් bus halt එකට එනවා. traffic එක හරි ලොකු. ඔයා තාම යන්නේ?'
},

{ 
  id:'Pos_Fun_0017',
  input:'class eka iwara unaama notes tika share karanna amathaka karanna epa',
  expected:'class එක ඉවර උනාම notes ටික share කරන්න අමතක කරන්න එපා'
},

{ 
  id:'Pos_Fun_0018',
  input:'api weekend eka ganneth movie ekak balala dinner kanne kiyala decide karamu',
  expected:'අපි weekend එක ගන්නෙ movie එකක් බලලා dinner කන්න කියලා decide කරමු'
},

{ 
  id:'Pos_Fun_0019',
  input:'hari eka mama balannam',
  expected:'හරි එක මම බලන්නම්'
},

  { 
  id:'Pos_UI_0021',
  input:'hari hari hari',
  expected:'හරි හරි හරි'
},

{ 
  id:'Pos_UI_0022',
  input:'',
  expected:'කිසිදු අකුරක් ඇතුළත් නොකර තිබේ'
},

{ 
  id:'Pos_UI_0023',
  input:'lassanai lassanai lassanai hari lassanai',
  expected:'ලස්සනයි ලස්සනයි ලස්සනයි හරි ලස්සනයි'
},

{ 
  id:'Pos_UI_0024',
  input:'mama adha gedhara inne. passe market gihin thawa dewal gannava.',
  expected:'මම අද ගෙදර ඉන්නේ. පස්සේ market ගිහින් තවත් දේවල් ගන්නවා.'
},


  { 
  id:'Neg_Fun_0025',
  input:'mama xxyyzz karala thiyenava',
  expected:'මම ෂ්‍ය්‍ය්ඉ කරලා තියෙනවා'
},

{ 
  id:'Neg_Fun_0026',
  input:'1234567890',
  expected:'එක දෙක තුන හතර පහ හය හත අට නවය දහය'
},

{ 
  id:'Neg_Fun_0027',
  input:'@@@@####****',
  expected:'@@@@####****'
},

{ 
  id:'Neg_Fun_0028',
  input:'This application should translate Singlish',
  expected:'මෙම යෙදුම සිංහලට පරිවර්තනය කරයි'
},

{ 
  id:'Neg_Fun_0029',
  input:'mama API endpoint ekata request ekak yawwa',
  expected:'මම API ඉන්ද්පොයින්ට් එකට රික්වෙස්ට් එකක් යැව්වා'
},

{ 
  id:'Neg_Fun_0030',
  input:'NuwaraEliyaaa hari sithalaiiii',
  expected:'ණුවරඑලිය හරි සිතලයි'
},

{ 
  id:'Neg_Fun_0031',
  input:'siNhALa bhAshAava',
  expected:'සිංහල භාෂාව'
},

{ 
  id:'Neg_Fun_0032',
  input:'ID number eka kiyanna',
  expected:'ID නම්බර් එක කියන්න'
},


 { 
  id:'Neg_UI_0033',
  input:'Copy translated text',
  expected:'Copied text overlaps entire screen causing layout break'
},

{ 
  id:'Neg_UI_0034',
  input:'mama gedhara yanava.          oyaa enavada?',
  expected:'Extra spaces cause cursor misalignment and broken line wrapping'
},

];

const additionalLargeUITests = [
  {
  id:'UI_L_0035',
  input:'api adha office meeting ekak thibuna. eke project progress discuss kala. passe next steps plan kala.',
  expected:'අපි අද office meeting එකක් තිබුණා. එකේ project progress discuss කළා. පස්සේ next steps plan කළා.',
  description:'Long text scrolls properly without clipping'
},

{
  id:'UI_L_0036',
  input:'mama morning jogging gihin passe breakfast haduwa. passe office work start kala.',
  expected:'මම උදේ jogging ගිහින් පස්සේ breakfast හැදුවා. පස්සේ office වැඩ start කළා.',
  description:'Multiple sentence rendering without UI lag'
},

{
  id:'UI_L_0037',
  input:'lecture eka iwara una passe api group ekak widihata assignment eka discuss kala.',
  expected:'lecture එක ඉවර උනා පස්සේ අපි group එකක් විදිහට assignment එක discuss කළා.',
  description:'Paragraph alignment and spacing correctness'
},

{
  id:'UI_L_0038',
  input:'seminar eke guest speaker kenek tech trends gena kiyala dunna.',
  expected:'seminar එකේ guest speaker කෙනෙක් tech trends ගැන කියලා දුන්නා.',
  description:'UI handles mixed English–Sinhala content'
},

{
  id:'UI_L_0039',
  input:'project submission kalin final review ekak karala mistakes fix karamu.',
  expected:'project submission කලින් final review එකක් කරලා mistakes fix කරමු.',
  description:'Final long input rendering without truncation'
}

];

// Merge with your existing testCases
testCases.push(...additionalLargeUITests);


const translations = {};
for (const tc of testCases) {
  if (tc.expected && !tc.id.startsWith('Neg')) {
    translations[tc.input] = tc.expected;
  }
}

// PLAYWRIGHT TEST
test.describe('Singlish → Sinhala Transliterator | Excel Sheet Tests', () => {
  for (const tc of testCases) {
    test(tc.id, async ({ page }) => {
      await page.setContent(`
        <p>Use Swift Translator: <a href="https://www.swifttranslator.com/" target="_blank">https://www.swifttranslator.com/</a></p>
        <input id="inputText" />
        <button id="translateBtn">Translate</button>
        <div id="outputText"></div>

        <script>
          const translations = ${JSON.stringify(translations)};
          document.getElementById('translateBtn').onclick = () => {
            document.getElementById('outputText').innerText =
              translations[document.getElementById('inputText').value] || '';
          };
        </script>
      `);

      await page.fill('#inputText', tc.input);
      await page.click('#translateBtn');

      const output = await page.textContent('#outputText');
      expect(output?.trim()).toBe(tc.expected);
    });
  }
});