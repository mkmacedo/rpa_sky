const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://mecsas-saude.appspot.com/login
  await page.goto('https://mecsas-saude.appspot.com/login');
  // Click text=usuario@email.com.br
  await page.click('text=usuario@email.com.br');
  // Fill input[name="email"]
  await page.fill('input[name="email"]', 'rh@connectcom.com.br');
  // Press Tab
  await page.press('input[name="email"]', 'Tab');
  // Fill input[name="senhaLogin"]
  await page.fill('input[name="senhaLogin"]', 'conne@2021');
  // Go to https://mecsas-saude.appspot.com/home
  await page.goto('https://mecsas-saude.appspot.com/home');
  // Click #sinc
  await page.click('#sinc');
  // assert.equal(page.url(), 'https://mecsas-saude.appspot.com/beneficiarios/consultar');

  await page.click('#btnOk')
  // ---------------------
  await context.close();
  await browser.close();
})();