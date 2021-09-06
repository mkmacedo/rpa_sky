const { chromium } = require('playwright');
async function getMessage(p){
        tag = await p.$(':light(:nth-match(tr, 2) :nth-match(td, 3))');
        let data_criacao = await tag.innerText();
        return(data_criacao);
};
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
  // Click input[name="id"]
  await page1.click('input[name="id"]');
  // Fill input[name="id"]
  await page1.fill('input[name="id"]', '88277717');
  //await page1.fill('input[name="id"]', '1518695955');
  //1518695955
  // Click input[alt="Busca"]
  await page1.click('input[alt="Busca"]');
  // assert.equal(page1.url(), 'http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');
  // Click text=Ordem de Serviço
  await page1.click('text=Ordem de Serviço');
  await page1.click('text=Confirmar');
  //await page1.click(':light(:nth-match(tr, 2) td)');//+4
  // Click text=196190531
  // Click text=30/01/2021

  await page.waitForTimeout(3000);

  /* try{
    tag = await page1.$(':light(:nth-match(tr, 2) :nth-match(td, 3))');
    let data_criacao = await tag.innerText();
    console.log(data_criacao);
  }
  catch{
      console.log('no such tag');
  }

  try{
    console.log('STATUS')
    tag = await page1.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
    let data_criacao = await tag.innerText();
    console.log(data_criacao);
  }
  catch{
      console.log('no such tag');
  }
  var razao_selector = ':light(:nth-match(tr, 5) td:nth-child(4))';
  var tag = await page1.$(razao_selector);
  var razao_ordem = await tag.innerText();
  var i = 5;
while(tag){
    try{
        console.log("RAZAO")
        console.log(razao_ordem);
        //var selectorr = ':light(:nth-match(tr, ${i}) td:nth-child(4))';
        i += 4;
        razao_selector = ':light(:nth-match(tr, '+i+') td:nth-child(4))';
        tag = await page1.$(razao_selector);
        razao_ordem = await tag.innerText();
        console.log(i);
        
    }
    catch{
        console.log('no such tag');
        tag = null;
    }
}





  try{
    console.log("RAZAO2")
    tag = await page1.$(':light(:nth-match(tr, 9) td:nth-child(4))');
    let razao_ordem2 = await tag.innerText();
    console.log(razao_ordem2);
  }
  catch{
      console.log('no such tag');
  } */


  try{
    tag2 = await page1.$$('tr');
    let idx = tag2.length - 21;
    while(idx >= 1){
      let data_criacao = await tag2[idx].innerText();
      let arr = data_criacao.split('\t');
      console.log(arr);
      arr_data = arr[2];
        console.log(arr_data);
      idx -= 4
    }
  }
  catch{
      console.log('no such tag');
  }

  try{
    tag2 = await page1.$$('tr');
    console.log(tag2.length);
    let idx = tag2.length - 18;
    let data_criacao = await tag2[idx - 4].innerHTML();
    let arr = data_criacao.split('</td><td>');
    console.log(arr);
    arr_data = arr[3];
      console.log(arr_data); 
  }
  catch{
      console.log('no such tag');
  }

  //text = await getMessage(page1);

  console.log('TEXT')
  //console.log(text);
  // Click text=02/02/2021 - Tarde
  await page1.click('text=02/02/2021 - Tarde');
  // Click tbody tr >> :nth-match(:text("1"), 4)
  await page1.click('tbody tr >> :nth-match(:text("1"), 4)');
  // Click text=C A PARAB E REPR - D411001
  await page1.click('text=C A PARAB E REPR - D411001');
  // Click text=Finalizada
  await page1.click('text=Finalizada');
  // Click text=DIRECTV\jacycsil
  await page1.click('text=DIRECTV\jacycsil');
  // Click text=Assistência Técnica
  await page1.click('text=Assistência Técnica');
  // Click text=Preventiva
  await page1.click('text=Preventiva');
  // Click text=Entrega emergencial Controle Remoto
  await page1.click('text=Entrega emergencial Controle Remoto');
  // Click text=Finalizado
  await page1.click('text=Finalizado');
  // Click text=000804202950
  await page1.click('text=000804202950');
  // Click text=670A2634121112507
  await page1.click('text=670A2634121112507');
  // Click #trItensOS196190531 >> text=30/01/2021
  await page1.click('#trItensOS196190531 >> text=30/01/2021');
  // ---------------------
  await context.close();
  await browser.close();
})();