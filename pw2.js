const fluxo_ativo = require('./status_ativo2.js');

async function getStatus(page, stdTimeOut){
  try{
    tag = await page.$(':nth-match(:light(tr td.td-maior), 7)');
    if(!tag) throw new Error('no such tag');
    let status_cliente = await tag.innerText();
    return status_cliente;
  }
  catch{
    return 'NA';
  }

}
async function getTipo(page, stdTimeOut){
  try{
    tag = await page.$(':nth-match(:light(tr td.td-maior), 8)');
    if(!tag) throw new Error('no such tag');
    let tipo_cliente = await tag.innerText();
    return tipo_cliente;
  }
  catch{
    return 'NA';
  }
}

async function getFluxo_Ativo(page, page1=null, stdTimeOut, tipo){

}

async function getFluxo_Cancelado(page, page1=null, stdTimeOut, tipo){

}

async function getFluxo_Suspenso_Cobranca_Negativado(page, page1= null, stdTimeOut, tipo){

}

async function getFluxo_Restricao_interna(page, page1=null, stdTimeOut, tipo){

}

async function getFluxo_Sky_empresas(page, page1=null, stdTimeOut, tipo){

}

async function getFluxo_VIP(page, page1=null, stdTimeOut, tipo){

}

async function getFluxo_Nao_habilitado(page, page1=null, stdTimeOut, tipo){

}

async function getFluxo_Ativo(page, page1=null, stdTimeOut, tipo, Banda_Larga=false, reclamacao){
  if(tipo == 'Normal'){
    if(Banda_Larga == false){
      if(reclamacao == 'Ausência de sinal ou procurando por sinal'){
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

          if(Math.floor(dias) <= 10){
            try{
              tag = await page1.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
              let status_ordem = await tag.innerText();
              console.log(status_ordem);
              if(staus_ordem == 'Criada' || status_ordem == 'A planejar'
                || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                  fluxo = fluxo+'Ordem de serviço pendente';
                }
                else if(staus_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                  fluxo = fluxo+'GPT/TV por Assinatura/ Ausência de sinal ou Procurando por sinal';
                }
                else{
                  fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
                }
            }
            catch{
                console.log('no such tag');
            }
          }
          else{
            fluxo = fluxo+'GPT/TV por Assinatura/ Ausência de sinal ou Procurando por sinal';
          }
        }
        catch{
          console.log('no such tag');
        }
      }

    //  else if(reclamacao == )
    }
    else{
      console.log('Fluxo banda larga');
    }
  
  }

}










async function getFlow_8_25_Visita_tecnica_nao_realizada(page, page1, stdTimeOut, status, tipo){
  if(tipo == 'PRE PAGO' || tipo == 'SKY Livre'){

  }
}

async function getFlow_2_1_Cancelado(page, page1, stdTimeOut, status, tipo, reclamacao=null){
  if(status == 'Cancelado' || status == 'Em cancelamento'){
    //if(reclamacao == 'Retirada de equipamento'){}
    await page1.click('text=Ordem de Serviço');
    await page1.click('text=Confirmar');
    await page1.click(':light(:nth-match(tr, 2) td)');

    await page.waitForTimeout(stdTimeOut);

    try{
      tag = await page1.$(':light(:nth-match(tr, 5) td:nth-child(4))');
      let razao_ordem = await tag.innerText();
      console.log(razao_ordem);

      if(razao_ordem == 'Retirada de Equipamento'){
        if(tipo == '');
      }
      else{
        let fluxo = 'Nenhuma ação tomada - Cliente cancelado'
        return fluxo;
      }
    }
    catch{
        console.log('no such tag');
    }

  }
}

async function getFlow(page, page1, stdTimeOut, status, tipo, reclamacao){
  await page.waitForTimeout(stdTimeOut);
  //reclamacao = 'Entrega emergencial Controle Remoto';
  //reclamacao = rec;
    var fluxo = '123';
    
    if (status == 'Ativo'){
      if(tipo == 'Normal'){
        fluxo = await fluxo_ativo.fluxos_Normal(page, stdTimeOut, reclamacao, false, page1);
        return fluxo;
      }
      else if(tipo == 'PRE PAGO' || tipo == 'SKY Livre'){
        fluxo = await fluxo_ativo.fluxos_Pre_Pago_Sky_Livre(reclamacao);
        return fluxo;
      }
    //Se não está ativo
    
    }
    else if(status == 'Cancelado' || status == 'Em cancelamento'){
      return 'Nenhuma ação tomada – Cliente Cancelado';
    }

    else if(status == 'Suspenso em Régua de Cobrança' ||
              status == 'Enviado para Cobrança' ||
              status == 'Negativado'){
          return "Nenhuma ação tomada – Cliente em Série de Cobrança";
      }

    else if(status == 'Restrição Interna'){
        return "Nenhuma ação tomada – “Cliente com Restrição interna";
    }
    
    else if(status == 'SKY Empresas'){
        return "Nenhuma ação tomada - “Tratativa exclusiva do SKY Empresas";
    }
    
    else if(status == 'Não Habilitado'){
        return fluxo_ativo.fluxos_Nao_habilitado(page, stdTimeOut, reclamacao, page1)
    }
}


const { chromium } = require('playwright');
async function fluxos(dict_codigo_clientes){

  var dict_motivos_classe = {'Ausência de sinal ou procurando por sinal': 'TÉCNICO',
                        'Tela cinza ou preta ou branca': 'TÉCNICO',
                        'Procurando por sinal no sintonizador terrestre': 'TÉCNICO',
                        'Canal não disponível': 'TÉCNICO',
                        'Mensagem de erro: Procurando por sinal em SAT 1 e 2': 'TÉCNICO',
                        'Sinal fraco ou inexistente': 'TÉCNICO',
                        'Barra de 0 e 100%': 'TÉCNICO',
                        'Evento não disponível': 'TÉCNICO',
                        'Imagem preto e branco': 'TÉCNICO',
                        'Problema no seu cartão de acesso': 'TÉCNICO',
                        'Canal não aparece na grade': 'TÉCNICO',
                        'Imagem congelando digitalizando': 'TÉCNICO',
                        'Tela azul': 'TÉCNICO',
                        'Não sai do canal 400 – Não sai do canal do cliente': 'TÉCNICO',
                        'Tela com chuvisco': 'TÉCNICO',
                        'Equipamento com ruído': 'TÉCNICO',
                        'Equipamento desliga sozinho': 'TÉCNICO',
                        'Equipamento não liga ou queimado': 'TÉCNICO',
                        'Equipamento roubado ou  Extraviado': 'TÉCNICO',
                        'Equipamento travado': 'TÉCNICO',
                        'Problemas de gravação': 'TÉCNICO',
                        'Áudio e legenda': 'TÉCNICO',
                        'Controle remoto': 'TÉCNICO',
                        'Visita técnica não realizada': 'TÉCNICO',
                        'Reinstalação em novo endereço': 'TÉCNICO',
                        'Reinstalação mesmo endereço': 'TÉCNICO',
                        'Mudança de Ponto Comodo': 'TÉCNICO',
                        'Danos durante a visita': 'TÉCNICO',
                        'Entrega emergencial Controle Remoto': 'TÉCNICO',
                        'Internet ou modem sem sinal': 'TÉCNICO',
                        'IRD entregue no Dealer': 'TÉCNICO',//deleter depois
                        'Cancelamento': 'CANCELAMENTO'
                      };

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

    let classe = dict_motivos_classe[dict_codigo_clientes[Object.keys(dict_codigo_clientes)[i]]];
    console.log('CLASSE: '+classe);

    await page1.fill('input[name="id"]', Object.keys(dict_codigo_clientes)[i]);
    
    await page1.click('input[alt="Busca"]');

    await page.goto('http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/PopupIndex?subscriberId=-1#');

    if(dict_codigo_clientes[Object.keys(dict_codigo_clientes)[i]] == 'Cancelamento'){

      //ADD TRY CATCH HERE________________________

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
        fluxo = fluxo+'Não necessita cancelar assinatura';
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
    if(classe == 'TÉCNICO'){
      console.log('FLUXO TECNICO');
      console.log('Código Cliente: '+Object.keys(dict_codigo_clientes)[i]);

      rec = dict_codigo_clientes[Object.keys(dict_codigo_clientes)[i]];
      status = await getStatus(page, stdTimeOut);
      tipo = await getTipo(page, stdTimeOut);

      console.log('Status Cliente: '+status);
      console.log('Tipo Cliente: '+tipo);

      fluxo = await getFlow(page, page1, stdTimeOut, status, tipo, rec);
      console.log('Ação tomada: '+fluxo);
      console.log('\n\n');
      
    }


  }

  await context.close();
  await browser.close();
};

dct = {'1515847044': 'Cancelamento', 
        '1515684342': 'Cancelamento', 
        '1520735530': 'Cancelamento',
        '1502054649': 'Entrega emergencial Controle Remoto',
        '88277717': 'Ausência de sinal ou procurando por sinal',
        '19648047': 'IRD entregue no Dealer',
        '164365630': 'Tela cinza ou preta ou branca'};
//console.log(Object.keys(dct)[1]);

var XLSX = require('xlsx')
var workbook = XLSX.readFile('Planilha_Sky_TESTE.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
//console.log(xlData);

var fluxo_dict = {};
var lista_submotivos_tecnico_TV = ['Sem imagem ou sem sinal', 'Sem conexão de dados', 'Saída de canais', 'Reparo não realizado', 
'Defeito no equipamento/Troca de equipamento não efetuada', 'Lentidão ou velocidade reduzida de conexão', 'Não cumprimento de agendamento de reparo',
'Problemas com reativação', 'Problema técnico', 'Problemas com o controle remoto', 'Instalação inadequada do serviço',
'Falta de canais abertos', 'Instalação de ponto adicional não efetuada', 'Persistência do problema após reparo',
'Qualidade ruim de imagem ou má qualidade do sinal', 'Instalação ou habilitação não realizada'];

var de_para_turbina_EF = {'Sem imagem ou sem sinal': 'Ausência de sinal ou procurando por sinal',
                          'Sem conexão de dados': 'Internet ou modem sem sinal',
                          'Saída de canais': 'Canal não aparece na grade',
                          'Reparo não realizado': 'Visita técnica não realizada',
                          'Defeito no equipamento/Troca de equipamento não efetuada': 'Situação não mapeada',
                          'Lentidão ou velocidade reduzida de conexão': 'Internet lenta, lentidão, baixa velocidade',
                          'Não cumprimento de agendamento de reparo': 'Visita técnica não realizada',
                          'Problemas com reativação': 'Problema no seu cartão de acesso',
                          'Problemas com o controle remoto': 'Entrega emergencial Controle Remoto',
                          'Falta de canais abertos': 'Canal não disponível',
                          'Instalação de ponto adicional não efetuada': 'Reinstalação mesmo endereço',
                          'Persistência do problema após reparo': 'Situação não mapeada',
                          'Qualidade ruim de imagem ou má qualidade do sinal': 'Sinal fraco ou inexistente',
                          'Instalação ou habilitação não realizada': 'Visita técnica não realizada'
                          };


for(let row_index = 0; row_index < xlData.length; row_index++){
    var a = xlData[row_index].Cod_assinante;
    var resumo_motivos = eval(xlData[row_index].Resumo);

    for(let i = 0; i < resumo_motivos.length; i++ ){
        for(j = 0; j < lista_submotivos_tecnico_TV.length; j++ ){
            var codigo_valido = false;
            try{
                codigo_valido = eval(a) > 0;
            } 
            catch{
                console.log('Codigo do assinante invalido');
            }
            if(resumo_motivos[i] == lista_submotivos_tecnico_TV[j] && codigo_valido == true){
                fluxo_dict[a] = de_para_turbina_EF[resumo_motivos[i]];
            }
        }
    }
}

dtc2 = {'1523017160': 'Retirada Devolucao HD Zapper',
        '1525427592': 'Tela cinza ou preta ou branca',
        '1503436351': 'Controle remoto'
        }

//fluxos(fluxo_dict);
fluxos(dct);



