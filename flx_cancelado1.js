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
  // Go to http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance?subscriberId=-1
  await page.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance?subscriberId=-1');
  // Click input[name="id"]
  await page1.click('input[name="id"]');
  // Double click input[name="id"]
  await page1.dblclick('input[name="id"]');
  // Click input[name="id"]
  await page1.click('input[name="id"]');
  // Click input[name="id"]
  await page1.click('input[name="id"]');
  // Fill input[name="id"]
  await page1.fill('input[name="id"]', '44308004');
  // Click input[alt="Busca"]
  await page1.click('input[alt="Busca"]');
  // assert.equal(page1.url(), 'http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  // Click text=Financeiro
  await page1.click('text=Financeiro');
  // assert.equal(page1.url(), 'http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  // Click text=Método de Pagamento
  await page1.click('text=Método de Pagamento');
  // Click text=Boleto

  await page1.waitForTimeout(3000)
  tag = await page.$('text=Boleto');
  if(!tag) throw new Error('no such tag');
  else {
      let mop = await tag.innerText();
      console.log(mop);
  }
  // ---------------------
  await context.close();
  await browser.close();
})();