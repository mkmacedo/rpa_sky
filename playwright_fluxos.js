const { chromium } = require('playwright');
async function fluxos(){
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
  // Double click input[name="Username"]
  await page.dblclick('input[name="Username"]');
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
  // Double click input[name="id"]
  await page1.dblclick('input[name="id"]');
  // Fill input[name="id"]
  await page1.fill('input[name="id"]', '1518695955');
  // Click input[alt="Busca"]
  await page1.click('input[alt="Busca"]');
  // assert.equal(page1.url(), 'http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  // Click text=Ativo
  //await page1.click('text=Ativo');
  //await page1.waitForTimeout(10000);
  console.log(await page1.url());
  //await page1.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/FirstScreen');
  await page.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  //await page1.waitForTimeout(10000);
  var tagSelector = '.td-maior';
  await page.waitForSelector(tagSelector);

  //var dict_fluxos = {'Cancelamento': fluxo_cancelamento()};

  var fluxo = '';

  //Status do cliente
  tag = await page.$(':nth-match(:light(tr td.td-maior), 7)');
  if(!tag) throw new Error('no such tag');
  let status_cliente = await tag.innerText();
  console.log('Status do cliente: '+status_cliente);

  if(status_cliente == 'Ativo' || status_cliente == 'Provisório'){
    fluxo = fluxo+'CANCELAR';
  }

  //Tipo de cliente
  tag2 = await page.$(':nth-match(:light(tr td.td-maior), 8)');
  if(!tag2) throw new Error('no such tag');
  let tipo_cliente = await tag2.innerText();
  console.log('Tipo de cliente: '+tipo_cliente);

  if ((status_cliente == 'Cancelado' || fluxo == 'CANCELAR') && tipo_cliente == 'Normal'){
    console.log(fluxo);
    await page1.click('text=Financeiro');

    await page1.click('text=Método de Pagamento');

    //Método de pagamento
    await page1.waitForTimeout(3000)
    tag = await page1.$('text=Boleto');
    if(!tag) throw new Error('no such tag');
    else {
        let mop = await tag.innerText();
        console.log('Método de pagamento: '+mop);
        if(mop != 'Boleto'){
          fluxo = fluxo+' - Alterar MOP para BOLETO'
        }
    }

    await page1.click('text=Financeiro');
    await page1.click('text=Negociação');
    await page1.waitForTimeout(3000)

    //Total da conta
    tag = await page1.$(':nth-match(:light(div.coluna div), 6)');
    if(!tag) throw new Error('no such tag');
    else {
        let total_da_conta = await tag.innerText();
        console.log('Total da conta: '+total_da_conta);
        if(eval(total_da_conta) != 0){
          if(eval(total_da_conta < 0)){
            fluxo = fluxo+' - Devolver valor em aberto';
          }
          else{
            fluxo = fluxo+'Ajustar Balance';
          }
        }
    }
  }

  
  //console.log(tag)
  //console.log(tag[1].innerHTML())
  

  //async function printText(selec){
  //    tg = await page.$$(selec);
  //    console.log(tg[0].innerText());
  //}

  //printText(tagSelector);

  // Click text=PRE PAGO
  //await page1.click('text=PRE PAGO');
  // ---------------------
  await context.close();
  await browser.close();
};

fluxos();