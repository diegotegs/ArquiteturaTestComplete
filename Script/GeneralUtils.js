module.exports.numeroAleatorio = numeroAleatorio;
module.exports.textoAleatorio = textoAleatorio;
module.exports.GerarDatas = GerarDatas;

function numeroAleatorio(tamanho)
{
    var numeros = '0123456789';
    var aleatorio = '';
    for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * numeros.length);
        aleatorio += numeros.substring(rnum, rnum + 1);
    }
    return aleatorio;
}

function textoAleatorio(tamanho)
{
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var aleatorio = '';
    for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        aleatorio += letras.substring(rnum, rnum + 1);
    }
    return aleatorio;
}

function GerarDatas(){
  let DataAtual;
  //Gerar datas dinamicas
  DataAtual = aqDateTime.Today();
  return Project.Variables.dataAtual = DataAtual;
}

