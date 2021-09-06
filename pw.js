const { chromium } = require('playwright');
async function fluxos(dict_codigo_clientes){
  const browser = await chromium.launch({
    headless: false
  });
  const stdTimeOut = 3000;
  const context = await browser.newContext();
  
  const page = await context.newPage();
  
  await page.goto('http://icareclientes.sky.com.br/');
  await page.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI//Auth/LogOn?returnUrl=http%3a%2f%2ficareclientes.sky.com.br%2fICareCustomerInteractionUI%2f');
  // Double click input[name="Username"]
  await page.dblclick('input[name="Username"]');
  // Fill input[name="Username"]
  await page.fill('input[name="Username"]', 'cnt00001');
  // Press Tab
  await page.press('input[name="Username"]', 'Tab');
  // Fill input[name="Password"]
  await page.fill('input[name="Password"]', 'Ctcsky1502');
  
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.press('input[name="Password"]', 'Enter')
  ]);
  
  await page1.dblclick('input[name="id"]');
  
  for(let i = 0; i < Object.keys(dict_codigo_clientes).length; i++){

    await page1.fill('input[name="id"]', Object.keys(dict_codigo_clientes)[i]);
    
    await page1.click('input[alt="Busca"]');

    await page.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');

    if(dict_codigo_clientes[Object.keys(dict_codigo_clientes)[i]] == 'Cancelamento'){

      await page.waitForTimeout(stdTimeOut);

      var fluxo = '';

      //--------------Status do cliente-----------------
      tag = await page.$(':nth-match(:light(tr td.td-maior), 7)');
      if(!tag) throw new Error('no such tag');
      let status_cliente = await tag.innerText();
      console.log('Status do cliente: '+status_cliente);

      if(status_cliente == 'Ativo' || status_cliente == 'Provisório'){
        fluxo = fluxo+'CANCELAR';
      }

      else if(status_cliente == 'Cancelado'){
        fluxo = fluxo+'Não necessita canelar assinatura';
      }

      //----------------Tipo de cliente-------------------
      tag2 = await page.$(':nth-match(:light(tr td.td-maior), 8)');
      if(!tag2) throw new Error('no such tag');
      let tipo_cliente = await tag2.innerText();
      console.log('Tipo de cliente: '+tipo_cliente);

      if ((status_cliente == 'Cancelado' || status_cliente == 'Em cancelamento' 
      || fluxo == 'CANCELAR') && tipo_cliente == 'Normal'){
        
        //---------------Método de pagamento------------------
        await page1.click('text=Financeiro');
        await page1.click('text=Método de Pagamento');

        await page1.waitForTimeout(stdTimeOut);
        tag = await page1.$('text=Boleto');
        if(!tag) throw new Error('no such tag');
        else {
            let mop = await tag.innerText();
            console.log('Método de pagamento: '+mop);
            if(mop != 'Boleto'){
              fluxo = fluxo+' - Alterar MOP para BOLETO';
            }
            else{
              fluxo = fluxo+' - Não necessita alterar MOP';
            }
        }

        //-----------------Total da conta-----------------------
        await page1.click('text=Financeiro');
        await page1.click('text=Negociação');
        
        await page1.waitForTimeout(stdTimeOut);
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
                fluxo = fluxo+' - Ajustar Balance no valor '+total_da_conta;
              }
            }
            else{
              fluxo = fluxo+' - Não nessecita acerto de Balance'
            }
        }
      }
      
      //----------------Fatura-------------------------
      await page1.click('text=Financeiro');
      await page1.click('text=Faturas');
      
      await page1.click('input[name="typeSearch"]', {force: true});

      await page1.waitForTimeout(stdTimeOut);
      var valor_fatura_num = 0;
      var valor_pago_num = 0;
      tag = await page1.$(':light(:nth-match(tr.AltGridRow, 1) td:nth-child(6))');
      if(!tag) throw new Error('no such tag');
      else {
          let valor_fatura = await tag.innerText();
          console.log('Value: '+valor_fatura);
          let tmp_arr = valor_fatura.split(',');
          let valor_fatura_string = '';
          for(let i = 0; i < 2; i++){
              valor_fatura_string = valor_fatura_string + tmp_arr[i];
              if(i == 0){
                  valor_fatura_string = valor_fatura_string + '.';
              }
          }
          console.log(eval(valor_fatura_string));
          valor_fatura_num = eval(valor_fatura_string);
      }

      tag2 = await page1.$(':light(:nth-match(tr.AltGridRow, 1) td:nth-child(7))');
      if(!tag2) throw new Error('no such tag');
      else {
          let valor_pago = await tag2.innerText();
          console.log('Value: '+valor_pago);
          let tmp_arr = valor_pago.split(',');
          let valor_pago_string = '';
          for(let i = 0; i < 2; i++){
              valor_pago_string = valor_pago_string + tmp_arr[i];
              if(i == 0){
                  valor_pago_string = valor_pago_string + '.';
              }
          }
          console.log(eval(valor_pago_string));
          valor_pago_num = eval(valor_pago_string);
      }
      //Consultar Sky para o que fazer com os valores
      console.log(fluxo);
    }

    //----------Fluxo para ocorrências classificadas como TÉCNICO------------
    //-----------------------------------------------------------------------
    if(dict_codigo_clientes[Object.keys(dict_codigo_clientes)[i]] == 
    'Ausência de sinal ou procurando por sinal'){

      await page.waitForTimeout(stdTimeOut);

      var fluxo = '';

      //--------------Status do cliente-----------------
      tag = await page.$(':nth-match(:light(tr td.td-maior), 7)');
      if(!tag) throw new Error('no such tag');
      let status_cliente = await tag.innerText();
      console.log('Status do cliente: '+status_cliente);
      
      //----------------Tipo de cliente-------------------
      tag2 = await page.$(':nth-match(:light(tr td.td-maior), 8)');
      if(!tag2) throw new Error('no such tag');
      let tipo_cliente = await tag2.innerText();
      console.log('Tipo de cliente: '+tipo_cliente);
      
      if (status_cliente == 'Ativo'){
        if(tipo_cliente == 'Normal'){

            await page1.click('text=Ordem de Serviço');
            await page1.click('text=Confirmar');
            await page1.click(':light(:nth-match(tr, 2) td)');

          await page.waitForTimeout(stdTimeOut);
          try{
            tag = await page1.$(':light(:nth-match(tr, 2) :nth-match(td, 3))');
            data_criacao = await tag.innerText();

            dataHoje = new Date();
            dataAbertura = new Date(data_criacao);

            dias = (dataHoje.getTime() - dataAbertura.getTime())/(1000*3600*24);
            console.log('DIAS: ');
            console.log(Math.floor(dias));

            //Estabelecer fluxo de acordo com quantidade de dias
          }
          catch{
            console.log('no such tag');
          }
        }
        //if PRE PAGO
        else{
            console.log('PRE PAGO');
        }
      }
      //Se não está ativo
      else{
          console.log('Inativo');
      }
    }
  }

  await context.close();
  await browser.close();
};
dct = {'1515847044': 'Cancelamento', 
        '1515684342': 'Cancelamento', 
        '1520735530': 'Cancelamento', 
        '88277717': 'Ausência de sinal ou procurando por sinal'};
console.log(Object.keys(dct)[1]);
fluxos(dct);

//colocar os fluxos dentro de try/catch