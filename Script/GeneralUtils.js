module.exports.numeroAleatorio = numeroAleatorio;
module.exports.textoAleatorio = textoAleatorio;
module.exports.GerarDatas = GerarDatas;

//Metodo para gerar numeros aleatorios
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

//Metodos para gerar string aleatorio
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

//Gerar data atual
function GerarDatas(){
  let DataAtual;
  //Gerar datas dinamicas
  DataAtual = aqDateTime.Today();
  return Project.Variables.dataAtual = DataAtual;
}