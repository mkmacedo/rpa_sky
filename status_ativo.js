
//module.exports.myTest = function test (){
//    console.log("Passou teste");
//}



//Todos os fluxos presumem status Ativo


exports.test = function myTest(){
    console.log('Passou teste');
}


//Ausência de sinal ou procurando por sinal
exports.fluxo_8_1_Normal = async function (page, stdTimeOut, Banda_Larga=false, page1=null){

    fluxo = '';

    if(Banda_Larga == false){
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
                if(status_ordem == 'Criada' || status_ordem == 'A planejar'
                  || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                    fluxo = fluxo+'Ordem de serviço pendente';
                  }
                  else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
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
    else {
        console.log('Fluxo Banda larga');
    }

    return fluxo;
}



//Codigos de erro
exports.fluxo_8_2_Normal = async function (){
    console.log('not ready');
}



//Tela cinza ou preta ou branca
exports.fluxo_8_3_Normal = async function(page, stdTimeOut, page1=null){

    fluxo = '';

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
            if(status_ordem == 'Criada' || status_ordem == 'A planejar'
              || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                fluxo = fluxo+'Ordem de serviço pendente';
              }
              else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                fluxo = fluxo+'GPT/TV por Assinatura/ Tela cinza ou preta ou branca';
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
          fluxo = fluxo+'GPT/TV por Assinatura/ Tela cinza ou preta ou branca';
        }
      }
      catch{
        console.log('no such tag');
      }

      return fluxo;
      
}



//Procurando por sinal no sintonizador terrestre
exports.fluxo_8_4_Normal = async function(page, stdTimeOut, page1=null){

    fluxo = '';

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
            if(status_ordem == 'Criada' || status_ordem == 'A planejar'
              || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                fluxo = fluxo+'Ordem de serviço pendente';
              }
              else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Procurando por sinal no sintonizador terrestre';
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
          fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Procurando por sinal no sintonizador terrestre';
        }
      }
      catch{
        console.log('no such tag');
      }

      return fluxo;
}



//Canal não disponível
exports.fluxo_8_5_Normal = async function(page, stdTimeOut, page1=null){

    fluxo = '';

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
            if(status_ordem == 'Criada' || status_ordem == 'A planejar'
              || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                fluxo = fluxo+'Ordem de serviço pendente';
              }
              else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                fluxo = fluxo+'GPT/ TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Canal não disponível';
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
          fluxo = fluxo+'GPT/ TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Canal não disponível';
        }
      }
      catch{
        console.log('no such tag');
      }

      return fluxo;
}



//Mensagem de erro: Procurando por sinal em SAT 1 e 2 (Não consta na lista de categorias)
exports.fluxo_8_6_Normal = async function(page, stdTimeOut, page1=null){

    fluxo = '';

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
            if(status_ordem == 'Criada' || status_ordem == 'A planejar'
              || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                fluxo = fluxo+'Ordem de serviço pendente';
              }
              else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Procurando por sinal em SAT 1 e 2';
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
          fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Procurando por sinal em SAT 1 e 2';
        }
      }
      catch{
        console.log('no such tag');
      }

      return fluxo;
}



//Sinal fraco ou inexistente
exports.fluxo_8_7_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Sinal fraco ou inexistente';
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
        fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Sinal fraco ou inexistente';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}




//Barra de 0 e 100%
exports.fluxo_8_8_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/ TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Barra de 0 100%';
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
        fluxo = fluxo+'GPT/ TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Barra de 0 100%';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Evento não disponível
exports.fluxo_8_9_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Evento não disponível';
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
        fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Evento não disponível';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Imagem preto e branco
exports.fluxo_8_10_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Imagem preto e branco';
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
        fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Imagem preto e branco';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Problema no seu cartão de acesso
exports.fluxo_8_11_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Problema no seu cartão de acesso';
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
        fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Problema no seu cartão de acesso';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Problema no seu cartão de acesso
exports.fluxo_8_12_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Canal não aparece na grade';
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
        fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Canal não aparece na grade';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Imagem congelando digitalizando
exports.fluxo_8_13_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Imagem congelando digitalizando';
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
        fluxo = fluxo+'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Imagem congelando digitalizando';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Tela azul
exports.fluxo_8_14_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / tela azul';
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
        fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / tela azul';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Não sai do canal 400 – Não sai do canal do cliente
exports.fluxo_8_15_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / não sai do canal 400';
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
        fluxo = fluxo+'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / não sai do canal 400';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



//Tela com chuvisco
exports.fluxo_8_16_Normal = async function(page, stdTimeOut, page1=null){

  fluxo = '';

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
          if(status_ordem == 'Criada' || status_ordem == 'A planejar'
            || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
              fluxo = fluxo+'Ordem de serviço pendente';
            }
            else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
              fluxo = fluxo+'GPT/TV por Assinatura /  Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / tela com chuvisco';
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
        fluxo = fluxo+'GPT/TV por Assinatura /  Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / tela com chuvisco';
      }
    }
    catch{
      console.log('no such tag');
    }

    return fluxo;
}



///teste teste teste
exports.fluxo_8_1_Normal_teste = async function (page, stdTimeOut, reclamacao, Banda_Larga=false, page1=null){

  fluxo = '';

  if(Banda_Larga == false){
        await page.click('text=Ordem de Serviço');
        await page.click('text=Confirmar');

        await page.waitForTimeout(stdTimeOut);
        try{

          await page.click(':light(:nth-match(tr, 2) td)');
          var data_selector = ':light(:nth-match(tr, 2) :nth-match(td, 3))';
          var data_tag = await page.$(data_selector);
          var data_criacao = await data_tag.innerText();
          var tmp_arr = data_criacao.split('/');
          data_criacao = tmp_arr[1]+'/'+tmp_arr[0]+'/'+tmp_arr[2];
          console.log(data_criacao);

          dataHoje = new Date();
          dataAbertura = new Date(data_criacao);

          dias = (dataHoje.getTime() - dataAbertura.getTime())/(1000*3600*24);
          console.log(dias);

          var razao_selector = ':light(:nth-match(tr, 5) td:nth-child(4))';
          var razao_tag = await page.$(razao_selector);
          var razao_ordem = await razao_tag.innerText();
          console.log(razao_ordem);

          var os_encontrada = false;

          if(Math.floor(dias) <= 10){
            
            if(razao_ordem == reclamacao){

              status_tag = await page.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
              let status_ordem = await status_tag.innerText();
              console.log(status_ordem);
              if(status_ordem == 'Criada' || status_ordem == 'A planejar'
                || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                  fluxo = fluxo+'Ordem de serviço pendente';
                }
                else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                  fluxo = fluxo+'GPT/TV por Assinatura/ Ausência de sinal ou Procurando por sinal';
                }
                else{
                  fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
                }
            }
            else{
              
              var i = 4;
              var j = 1;
              while(Math.floor(dias) <= 10 && razao_ordem != reclamacao){

                j += 4

                let data_tag_arr = await page.$$('tr');
                let data_criacao_tr_arr = await data_tag_arr[j].innerText();
                let data_criacao_arr = data_criacao_tr_arr.split('\t');
                let data_criacao2 = data_criacao_arr[2];
                let tmp_arr2 = data_criacao2.split('/');
                data_criacao2 = tmp_arr2[1]+'/'+tmp_arr2[0]+'/'+tmp_arr2[2];
                console.log(data_criacao2);

                i += 4;

                let razao_tag_arr = await page.$$('tr');
                let razao_tr_arr = await razao_tag_arr[i].innerHTML();
                let razao_arr = razao_tr_arr.split('</td><td>');
                let razao_ordem2 = razao_arr[3];
                razao_ordem = razao_ordem2;
                console.log(razao_ordem);


                let dataHoje2 = new Date();
                let dataAbertura2 = new Date(data_criacao2);

                let dias2 = (dataHoje2.getTime() - dataAbertura2.getTime())/(1000*3600*24);
                dias = dias2;
                console.log(dias);

                //if(razao_ordem == reclamacao && dias <= 10){
                //  os_encontrada = true;
                //}

              }

              if(Math.floor(dias) <= 10 && razao_ordem == reclamacao){

                let status_tag_arr = await page.$$('tr');
                let status_tr_arr = await status_tag_arr[i].innerHTML();
                let status_arr = status_tr_arr.split('</td><td>');
                let status_ordem2 = status_arr[4];
                status_ordem = status_ordem2;


                //let status_tag2 = await page.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
                //let status_ordem2 = await status_tag2.innerText();
                console.log(status_ordem);
                if(status_ordem2 == 'Criada' || status_ordem2 == 'A planejar'
                  || status_ordem2 == 'Em execução' || status_ordem2 == 'A tratar'){
                    fluxo = fluxo+'Ordem de serviço pendente';
                  }
                  else if(status_ordem2 == 'Finalizada' || status_ordem2 == 'Cancelada'){
                    fluxo = fluxo+'GPT/TV por Assinatura/ Ausência de sinal ou Procurando por sinal';
                  }
                  else{
                    fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
                  }
              }

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
  else {
      console.log('Fluxo Banda larga');
  }

  return fluxo;
}



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
                            'Equipamento roubado ou extraviado': 'TÉCNICO',
                            'Equipamento travado': 'TÉCNICO',
                            'Problemas de gravação': 'TÉCNICO',
                            'Áudio e legenda': 'TÉCNICO',
                            'Controle remoto': 'TÉCNICO',
                            'Visita técnica não realizada': 'TÉCNICO',
                            'Reinstalação em novo endereço': 'TÉCNICO',
                            'Reinstalação mesmo endereço': 'TÉCNICO',
                            'Mudança de Ponto Comodo': 'TÉCNICO',
                            'Danos durante a visita': 'TÉCNICO'
                          };


exports.fluxos_Normal = async function (page, stdTimeOut, reclamacao, Banda_Larga=false, page1=null){

    var dict_gpt_fluxos = {'Ausência de sinal ou procurando por sinal': 'GPT/TV por Assinatura',
                            'Tela cinza ou preta ou branca': 'GPT/TV por Assinatura/ Tela cinza ou preta ou branca',
                            'Procurando por sinal no sintonizador terrestre': 'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Procurando por sinal no sintonizador terrestre',
                            'Canal não disponível': 'GPT/ TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Canal não disponível',
                            'Mensagem de erro: Procurando por sinal em SAT 1 e 2': 'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / aparece alguma mensagem / Procurando por sinal em SAT 1 e 2',
                            'Sinal fraco ou inexistente': 'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Sinal fraco ou inexistente',
                            'Barra de 0 e 100%': 'GPT/ TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Barra de 0 100%',
                            'Evento não disponível': 'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Evento não disponível',
                            'Imagem preto e branco': 'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Imagem preto e branco',
                            'Problema no seu cartão de acesso': 'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / aparece alguma mensagem / Outras mensagens / Problema no seu cartão de acesso',
                            'Canal não aparece na grade': 'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Canal não aparece na grade',
                            'Imagem congelando digitalizando': 'GPT/TV por Assinatura/ Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / Imagem congelando digitalizando',
                            'Tela azul': 'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / tela azul',
                            'Não sai do canal 400 – Não sai do canal do cliente': 'GPT/TV por Assinatura / Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / não sai do canal 400',
                            'Tela com chuvisco': 'GPT/TV por Assinatura /  Outros Motivos / Imagem e sinal / Não aparece nenhuma mensagem ou código / tela com chuvisco',
                            'Equipamento com ruído': 'GPT/TV por Assinatura/  Outros Motivos / Equipamento SKY / Equipamento com ruído',
                            'Equipamento desliga sozinho': 'GPT/TV por Assinatura /  Outros Motivos / Equipamento SKY / Equipamento desliga sozinho',
                            'Equipamento não liga ou queimado': 'GPT/TV por Assinatura /  Outros Motivos / Equipamento SKY / Equipamento não liga ou queimado',
                            'Equipamento roubado ou extraviado': 'GPT/TV por Assinatura /  Outros Motivos / Equipamento SKY / Equipamento roubado',
                            'Equipamento travado': 'GPT/TV por Assinatura /  Outros Motivos / Equipamento SKY / Equipamento travado',
                            'Problemas de gravação': 'GPT/TV por Assinatura /  Outros Motivos / Equipamento SKY / Problemas de gravação',
                            'Áudio e legenda': 'GPT/TV por Assinatura / Outros Motivos / áudio e legenda',
                            'Controle remoto': 'GPT/TV por Assinatura /  Outros Motivos / Controle remoto',
                            'Visita técnica não realizada': 'Seguir GPT',
                            'Reinstalação em novo endereço': 'GPT/ TV por assinatura /  Outros Motivos / reinstalação ou mudança de antena  / reinstalação em novo endereço',
                            'Reinstalação mesmo endereço': 'GPT/ TV por assinatura /  Outros Motivos / reinstalação ou mudança de antena  / mudança de antena mesmo endereço',
                            'Mudança de Ponto Comodo': 'GPT/ TV por assinatura / Outros Motivos / reinstalação ou mudança de antena / mudança de comodo',
                            'Danos durante a visita': 'GPT/ TV por assinatura /  Outros Motivos / reinstalação ou mudança de antena / visita técnica / Danos durante a visita',
                            'Situação não mapeada': 'Ligar para o cliente',
                            'Entrega emergencial Controle Remoto': 'GPT/TV por Assinatura /  Outros Motivos / Controle remoto',
                            'IRD entregue no Dealer': 'Seguir GPT'
                          };

  var dict_de_para_OS = {'Tela cinza ou preta ou branca': 'Tela cinza TODOS canais',
                          'Ausencia sinal/interrompido': 'Ausência de sinal',
                          'Sem sinal': 'Ausencia sinal/interrompido',
                          'Problema com equipamento': 'Ausencia sinal/interrompido',
                          'Código de erro': 'Ausencia sinal/interrompido',
                          'Procurando por sinal no sintonizador terrestre': 'Ausencia sinal/interrompido',
                          'Canal não disponível': 'Ausencia sinal/interrompido',
                          'Sinal fraco ou inexistente': 'Ausencia sinal/interrompido',
                          'Problema no seu cartão de acesso': 'Ausencia sinal/interrompido',
                          'Canal não aparece na grade': 'Ausencia sinal/interrompido',
                          'Não sai do canal do cliente': 'Ausencia sinal/interrompido',
                          'Controle remoto': 'Entrega emergencial Controle Remoto',
                          'Equipamento não liga ou queimado': 'Receptor nao liga',
                          'Equipamento desliga sozinho': 'Receptor nao liga',
                          'Mudança de Ponto Comodo': 'Mudanca Ponto/Comodo',
                          'Reinstalação em novo endereço': 'Reinstalacao Novo Endereco',
                          'Tela azul': 'Tela azul-fora do canal SKY',
                          'Equipamento travado': 'Receptor travado (comandos)',
                          'Problemas de gravação': 'Receptor travado (comandos)',
                          'Reinstalação mesmo endereço': 'Mudança de antena',
                          'Imagem congelando digitalizando': 'Congelamento',
                          'Danos durante a visita': 'PS-Vistoria de endereco',
                          'Áudio e legenda': 'Problemas com audio',
                          'Equipamento com ruído':'Problemas com audio',
                          'Tela cinza ou preta ou branca': 'Imagem em preto e branco',
                          'Equipamento Roubado': 'PS-Banda Larga-Roubo de modem',
                          'Extraviado banda larga': 'PS-Banda Larga-Roubo de modem',
                          'Equipamento roubado ou extraviado': 'PS-Banda Larga-Roubo de modem',
                          'Retirada Banda Larga': 'Retirada Banda Larga',
                          'Reinstalação em novo endereço – banda larga': 'PS-Banda Larga-Reinstalacao Novo Endereco'
                          };

/*   var dict_de_para_OS = {'Tela cinza TODOS canais': 'Tela cinza ou preta ou branca',
                          'Ausência de sinal': 'Ausencia sinal/interrompido',
                          'Sem sinal': 'Ausencia sinal/interrompido': 'Sem sinal',
                          'Ausencia sinal/interrompido': 'Problema com equipamento',
                          'Ausencia sinal/interrompido': 'Código de erro',
                          'Ausencia sinal/interrompido': 'Procurando por sinal no sintonizador terrestre',
                          'Ausencia sinal/interrompido': 'Canal não disponível',
                          'Ausencia sinal/interrompido': 'Sinal fraco ou inexistente',
                          'Ausencia sinal/interrompido': 'Problema no seu cartão de acesso',
                          'Ausencia sinal/interrompido': 'Canal não aparece na grade',
                          'Ausencia sinal/interrompido': 'Não sai do canal do cliente',
                          'Entrega emergencial Controle Remoto': 'Controle remoto',
                          'Receptor nao liga': 'Equipamento não liga ou queimado',
                          'Receptor nao liga': 'Equipamento desliga sozinho',
                          'Mudanca Ponto/Comodo': 'Mudança de Ponto Comodo',
                          'Reinstalacao Novo Endereco': 'Reinstalação em novo endereço',
                          'Tela azul-fora do canal SKY': 'Tela azul',
                          'Receptor travado (comandos)': 'Equipamento travado',
                          'Receptor travado (comandos)': 'Problemas de gravação',
                          'Mudança de antena': 'Reinstalação mesmo endereço',
                          'Congelamento': 'Imagem congelando digitalizando',
                          'PS-Vistoria de endereco': 'Danos durante a visita',
                          'Problemas com audio': 'Áudio e legenda',
                          'Problemas com audio': 'Equipamento com ruído',
                          'Imagem em preto e branco': 'Tela cinza ou preta ou branca',
                          'PS-Banda Larga-Roubo de modem': 'Equipamento Roubado',
                          'PS-Banda Larga-Roubo de modem': 'Extraviado banda larga',
                          'PS-Banda Larga-Roubo de modem': 'Equipamento roubado ou extraviado',
                          'Retirada Banda Larga': 'Retirada Banda Larga',
                          'PS-Banda Larga-Reinstalacao Novo Endereco': 'Reinstalação em novo endereço – banda larga'
                          }; */


  fluxo = '';

  if(Banda_Larga == false){
        await page.click('text=Ordem de Serviço');
        await page.click('text=Confirmar');

        await page.waitForTimeout(stdTimeOut);
        try{

          await page.click(':light(:nth-match(tr, 2) td)');
          var data_selector = ':light(:nth-match(tr, 2) :nth-match(td, 3))';
          var data_tag = await page.$(data_selector);
          var data_criacao = await data_tag.innerText();
          var tmp_arr = data_criacao.split('/');
          data_criacao = tmp_arr[1]+'/'+tmp_arr[0]+'/'+tmp_arr[2];
          console.log(data_criacao);

          dataHoje = new Date();
          dataAbertura = new Date(data_criacao);

          dias = (dataHoje.getTime() - dataAbertura.getTime())/(1000*3600*24);
          console.log(dias);

          var razao_selector = ':light(:nth-match(tr, 5) td:nth-child(4))';
          var razao_tag = await page.$(razao_selector);
          var razao_ordem = await razao_tag.innerText();
          console.log(razao_ordem);

          var os_encontrada = false;

          if(Math.floor(dias) <= 10){
            
            if(razao_ordem == dict_de_para_OS[reclamacao]){

              status_tag = await page.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
              let status_ordem = await status_tag.innerText();
              console.log(status_ordem);
              if(status_ordem == 'Criada' || status_ordem == 'A planejar'
                || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                  fluxo = fluxo+'Ordem de serviço pendente';
                }
                else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                  fluxo = fluxo + dict_gpt_fluxos[reclamacao];
                }
                else{
                  fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
                }
            }
            else{
              
              var i = 4;
              var j = 1;
              while(Math.floor(dias) <= 10 && razao_ordem != dict_de_para_OS[reclamacao]){

                j += 4

                let data_tag_arr = await page.$$('tr');
                let data_criacao_tr_arr = await data_tag_arr[j].innerText();
                let data_criacao_arr = data_criacao_tr_arr.split('\t');
                let data_criacao2 = data_criacao_arr[2];
                let tmp_arr2 = data_criacao2.split('/');
                data_criacao2 = tmp_arr2[1]+'/'+tmp_arr2[0]+'/'+tmp_arr2[2];
                console.log(data_criacao2);

                i += 4;

                let razao_tag_arr = await page.$$('tr');
                let razao_tr_arr = await razao_tag_arr[i].innerHTML();
                let razao_arr = razao_tr_arr.split('</td><td>');
                let razao_ordem2 = razao_arr[3];
                razao_ordem = razao_ordem2;
                console.log(razao_ordem);


                let dataHoje2 = new Date();
                let dataAbertura2 = new Date(data_criacao2);

                let dias2 = (dataHoje2.getTime() - dataAbertura2.getTime())/(1000*3600*24);
                dias = dias2;
                console.log(dias);

                //if(razao_ordem == reclamacao && dias <= 10){
                //  os_encontrada = true;
                //}

              }

              if(Math.floor(dias) <= 10 && razao_ordem == dict_de_para_OS[reclamacao]){

                let status_tag_arr = await page.$$('tr');
                let status_tr_arr = await status_tag_arr[i].innerHTML();
                let status_arr = status_tr_arr.split('</td><td>');
                let status_ordem2 = status_arr[4];
                status_ordem = status_ordem2;


                //let status_tag2 = await page.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
                //let status_ordem2 = await status_tag2.innerText();
                console.log(status_ordem);
                if(status_ordem2 == 'Criada' || status_ordem2 == 'A planejar'
                  || status_ordem2 == 'Em execução' || status_ordem2 == 'A tratar'){
                    fluxo = fluxo+'Ordem de serviço pendente';
                  }
                  else if(status_ordem2 == 'Finalizada' || status_ordem2 == 'Cancelada'){
                    fluxo = fluxo + dict_gpt_fluxos[reclamacao];
                  }
                  else{
                    fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
                  }
              }

              else{
                fluxo = fluxo + dict_gpt_fluxos[reclamacao];
              }

            }
          }
          else{
            fluxo = fluxo + dict_gpt_fluxos[reclamacao];
          }
      }
      catch{
        return dict_gpt_fluxos[reclamacao];
      }
  }
  else {
      console.log('Fluxo Banda larga');
  }

  return fluxo;
}



exports.fluxos_Pre_Pago_Sky_Livre = async function (reclamacao){

  var dict_gpt_fluxos = {'Ausência de sinal ou procurando por sinal': 'GPT/ Ausência de sinal ou Procurando por sinal',
                          'Tela cinza ou preta ou branca': 'GPT/Outros motivos / imagem e sinal',
                          'Procurando por sinal no sintonizador terrestre': 'GPT/Outros motivos / imagem e sinal',
                          'Canal não disponível': 'GPT/Outros motivos / imagem e sinal',
                          'Mensagem de erro: Procurando por sinal em SAT 1 e 2': 'GPT/Outros motivos / imagem e sinal',
                          'Sinal fraco ou inexistente': 'GPT/Outros motivos / imagem e sinal',
                          'Barra de 0 e 100%': 'GPT/Outros motivos / imagem e sinal',
                          'Evento não disponível': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Imagem preto e branco': 'GPT/Outros motivos / imagem e sinal',
                          'Problema no seu cartão de acesso': 'GPT/Outros motivos / imagem e sinal',
                          'Canal não aparece na grade': 'GPT/Outros motivos / imagem e sinal',
                          'Imagem congelando digitalizando': 'GPT/Outros motivos / imagem e sinal',
                          'Tela azul': 'GPT/Outros motivos / imagem e sinal',
                          'Não sai do canal 400 – Não sai do canal do cliente': 'GPT/Outros motivos / imagem e sinal',
                          'Tela com chuvisco': 'GPT/Outros motivos / imagem e sinal',
                          'Equipamento com ruído': 'GPT/Outros motivos / Equipamento SKY',
                          'Equipamento desliga sozinho': 'GPT/Outros motivos / Equipamento SKY',
                          'Equipamento não liga ou queimado': 'GPT/Outros motivos / Equipamento SKY',
                          'Equipamento roubado ou extraviado': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Equipamento travado': 'GPT/Outros motivos / Equipamento SKY',
                          'Problemas de gravação': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Áudio e legenda': 'GPT/Outros motivos / Audio e legenda',
                          'Controle remoto': 'GPT/Outros motivos / Controle Remoto',
                          'Recadastramento': 'GPT/Atualização cadastral',
                          'Visita técnica não realizada': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Reinstalação em novo endereço': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Reinstalação mesmo endereço': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Mudança de Ponto Comodo': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Danos durante a visita': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'Situação não mapeada': 'Ligar para o cliente',
                          'Entrega emergencial Controle Remoto': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre',
                          'IRD entregue no Dealer': 'Nenhuma ação tomada – SKY Pré Pago ou SKY Livre'
                        };

  var fluxo = dict_gpt_fluxos[reclamacao];
  return fluxo;
}




exports.fluxos_Nao_habilitado = async function (page, stdTimeOut, reclamacao, page1=null){


var dict_de_para_OS = {'Tela cinza ou preta ou branca': 'Tela cinza TODOS canais',
                        'Ausencia sinal/interrompido': 'Ausência de sinal',
                        'Sem sinal': 'Ausencia sinal/interrompido',
                        'Problema com equipamento': 'Ausencia sinal/interrompido',
                        'Código de erro': 'Ausencia sinal/interrompido',
                        'Procurando por sinal no sintonizador terrestre': 'Ausencia sinal/interrompido',
                        'Canal não disponível': 'Ausencia sinal/interrompido',
                        'Sinal fraco ou inexistente': 'Ausencia sinal/interrompido',
                        'Problema no seu cartão de acesso': 'Ausencia sinal/interrompido',
                        'Canal não aparece na grade': 'Ausencia sinal/interrompido',
                        'Não sai do canal do cliente': 'Ausencia sinal/interrompido',
                        'Controle remoto': 'Entrega emergencial Controle Remoto',
                        'Equipamento não liga ou queimado': 'Receptor nao liga',
                        'Equipamento desliga sozinho': 'Receptor nao liga',
                        'Mudança de Ponto Comodo': 'Mudanca Ponto/Comodo',
                        'Reinstalação em novo endereço': 'Reinstalacao Novo Endereco',
                        'Tela azul': 'Tela azul-fora do canal SKY',
                        'Equipamento travado': 'Receptor travado (comandos)',
                        'Problemas de gravação': 'Receptor travado (comandos)',
                        'Reinstalação mesmo endereço': 'Mudança de antena',
                        'Imagem congelando digitalizando': 'Congelamento',
                        'Danos durante a visita': 'PS-Vistoria de endereco',
                        'Áudio e legenda': 'Problemas com audio',
                        'Equipamento com ruído':'Problemas com audio',
                        'Tela cinza ou preta ou branca': 'Imagem em preto e branco',
                        'Equipamento Roubado': 'PS-Banda Larga-Roubo de modem',
                        'Extraviado banda larga': 'PS-Banda Larga-Roubo de modem',
                        'Equipamento roubado ou extraviado': 'PS-Banda Larga-Roubo de modem',
                        'Retirada Banda Larga': 'Retirada Banda Larga',
                        'Reinstalação em novo endereço – banda larga': 'PS-Banda Larga-Reinstalacao Novo Endereco'
                        };


fluxo = '';

      await page.click('text=Ordem de Serviço');
      await page.click('text=Confirmar');

      await page.waitForTimeout(stdTimeOut);
      try{

        await page.click(':light(:nth-match(tr, 2) td)');
        var data_selector = ':light(:nth-match(tr, 2) :nth-match(td, 3))';
        var data_tag = await page.$(data_selector);
        var data_criacao = await data_tag.innerText();
        var tmp_arr = data_criacao.split('/');
        data_criacao = tmp_arr[1]+'/'+tmp_arr[0]+'/'+tmp_arr[2];
        console.log(data_criacao);

        dataHoje = new Date();
        dataAbertura = new Date(data_criacao);

        dias = (dataHoje.getTime() - dataAbertura.getTime())/(1000*3600*24);
        console.log(dias);

        var razao_selector = ':light(:nth-match(tr, 5) td:nth-child(4))';
        var razao_tag = await page.$(razao_selector);
        var razao_ordem = await razao_tag.innerText();
        console.log(razao_ordem);

        var os_encontrada = false;

        if(Math.floor(dias) <= 30){
          
          if(razao_ordem == dict_de_para_OS[reclamacao]){

            status_tag = await page.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
            let status_ordem = await status_tag.innerText();
            console.log(status_ordem);
            if(status_ordem == 'Criada' || status_ordem == 'A planejar'
              || status_ordem == 'Em execução' || status_ordem == 'A tratar'){
                fluxo = fluxo+'Ordem de serviço pendente';
              }
              else if(status_ordem == 'Finalizada' || status_ordem == 'Cancelada'){
                fluxo = fluxo + 'Nenhuma ação tomada – Cliente não Habilitado'
              }
              else{
                fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
              }
          }
          else{
            
            var i = 4;
            var j = 1;
            while(Math.floor(dias) <= 30 && razao_ordem != dict_de_para_OS[reclamacao]){

              j += 4

              let data_tag_arr = await page.$$('tr');
              let data_criacao_tr_arr = await data_tag_arr[j].innerText();
              let data_criacao_arr = data_criacao_tr_arr.split('\t');
              let data_criacao2 = data_criacao_arr[2];
              let tmp_arr2 = data_criacao2.split('/');
              data_criacao2 = tmp_arr2[1]+'/'+tmp_arr2[0]+'/'+tmp_arr2[2];
              console.log(data_criacao2);

              i += 4;

              let razao_tag_arr = await page.$$('tr');
              let razao_tr_arr = await razao_tag_arr[i].innerHTML();
              let razao_arr = razao_tr_arr.split('</td><td>');
              let razao_ordem2 = razao_arr[3];
              razao_ordem = razao_ordem2;
              console.log(razao_ordem);


              let dataHoje2 = new Date();
              let dataAbertura2 = new Date(data_criacao2);

              let dias2 = (dataHoje2.getTime() - dataAbertura2.getTime())/(1000*3600*24);
              dias = dias2;
              console.log(dias);

              //if(razao_ordem == reclamacao && dias <= 10){
              //  os_encontrada = true;
              //}

            }

            if(Math.floor(dias) <= 30 && razao_ordem == dict_de_para_OS[reclamacao]){

              let status_tag_arr = await page.$$('tr');
              let status_tr_arr = await status_tag_arr[i].innerHTML();
              let status_arr = status_tr_arr.split('</td><td>');
              let status_ordem2 = status_arr[4];
              status_ordem = status_ordem2;


              //let status_tag2 = await page.$(':light(:nth-match(tr, 2) :nth-match(td, 7))');
              //let status_ordem2 = await status_tag2.innerText();
              console.log(status_ordem);
              if(status_ordem2 == 'Criada' || status_ordem2 == 'A planejar'
                || status_ordem2 == 'Em execução' || status_ordem2 == 'A tratar'){
                  fluxo = fluxo + 'Ordem de serviço pendente';
                }
                else if(status_ordem2 == 'Finalizada' || status_ordem2 == 'Cancelada'){
                  fluxo = fluxo + 'Nenhuma ação tomada – Cliente não Habilitado';
                }
                else{
                  fluxo = fluxo+'GPT/ TV por Assinatura/ Outros motivos / Visita técnica/ Reagendar OS';
                }
            }

            else{
              fluxo = fluxo + 'Nenhuma ação tomada – Cliente não Habilitado';
            }

          }
        }
        else{
          fluxo = fluxo + 'Nenhuma ação tomada – Cliente não Habilitado';
        }
    }
    catch{
      return 'Nenhuma ação tomada – Cliente não Habilitado';
    }

return fluxo;
}