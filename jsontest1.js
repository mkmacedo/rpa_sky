var fs = require('fs');


testjson = {'1': 'Um',
            '2': 'Dois'};


var jsonData = JSON.stringify(testjson);

fs.writeFile("jsonTest.txt", jsonData, function(err) {
    if(err){
        console.log(err);
    }
});

var XLSX = require('xlsx')
var workbook = XLSX.readFile('Planilha_Sky_TESTE.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
/* console.log(xlData); */

/* console.log(xlData[2].Cod_assinante)
console.log(xlData[2].Resumo)
var a = xlData[2].Cod_assinante;
var b = xlData[2].Resumo;

console.log(a);
console.log(b);
var lista_b = eval(b);
console.log(lista_b); */
var fluxo_dict = {};
var lista_submotivos_tecnico_TV = ['Sem imagem ou sem sinal', 'Sem conexão de dados', 'Saída de canais', 'Reparo não realizado', 
'Defeito no equipamento/Troca de equipamento não efetuada', 'Lentidão ou velocidade reduzida de conexão', 'Não cumprimento de agendamento de reparo',
'Problemas com reativação', 'Problema técnico', 'Problemas com o controle remoto', 'Instalação inadequada do serviço',
'Falta de canais abertos', 'Instalação de ponto adicional não efetuada', 'Persistência do problema após reparo',
'Qualidade ruim de imagem ou má qualidade do sinal', 'Instalação ou habilitação não realizada'];

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
                fluxo_dict[a] = resumo_motivos[i];
            }
        }
    }
}

console.log(fluxo_dict);


dct = {'1515847044': 'Cancelamento', 
        '1515684342': 'Cancelamento', 
        '1520735530': 'Cancelamento',
        '1502054649': 'Entrega emergencial Controle Remoto',
        '88277717': 'Ausência de sinal ou procurando por sinal',
        '19648047': 'IRD entregue no Dealer',
        '164365630': 'Tela cinza ou preta ou branca'};

console.log(dct);

