const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to http://icareclientes.sky.com.br/
  await page.goto('http://icareclientes.sky.com.br/');
  // Go to http://icareclientes.sky.com.br/ICareCustomerInteractionUI//Auth/LogOn?returnUrl=http%3a%2f%2ficareclientes.sky.com.br%2fICareCustomerInteractionUI%2f
  await page.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI//Auth/LogOn?returnUrl=http%3a%2f%2ficareclientes.sky.com.br%2fICareCustomerInteractionUI%2f');
  // Click input[name="Username"]
  await page.click('input[name="Username"]');
  // Fill input[name="Username"]
  await page.fill('input[name="Username"]', 'cnt00001');
  // Press Tab
  await page.press('input[name="Username"]', 'Tab');
  // Fill input[name="Password"]
  await page.fill('input[name="Password"]', 'Ctcsky1502');
  // Press Enter
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.press('input[name="Password"]', 'Enter')
  ]);
  // Fill input[name="id"]
  await page1.fill('input[name="id"]', '1515847044');
  // Press Enter
  await page1.press('input[name="id"]', 'Enter');
  // Click text=Financeiro
  await page1.click('text=Financeiro');
  // assert.equal(page1.url(), 'http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  // Click text=Faturas
  await page1.click('text=Faturas');
  // Fill input[name="typeSearch"]
  await page1.click('input[name="typeSearch"]', {force: true});
  // Click text=29/07/2021
  await page1.click('text=29/07/2021');
  // Click text=Reimpr. 401227636018 18/07/2021 29/07/2021 71,36 71,36 11/08/2021 Criado 0,00 Bo >> input[type="image"]
  await page1.click('text=Reimpr. 401227636018 18/07/2021 29/07/2021 71,36 71,36 11/08/2021 Criado 0,00 Bo >> input[type="image"]');
  // Click text=331613063222431505
  await page1.click('text=331613063222431505');
  // assert.equal(page1.url(), 'http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  // Click tr:nth-child(4) td:nth-child(2) input
  await page1.click('tr:nth-child(4) td:nth-child(2) input');
  // Click tr:nth-child(5) td:nth-child(2) input
  await page1.click('tr:nth-child(5) td:nth-child(2) input');
  // Click text=close Transação Financeira Nr. Transação Account Produto Desc. Trans. Desc. Fatu >> button[role="button"]
  await page1.click('text=close Transação Financeira Nr. Transação Account Produto Desc. Trans. Desc. Fatu >> button[role="button"]');
  // ---------------------
  await context.close();
  await browser.close();
})();