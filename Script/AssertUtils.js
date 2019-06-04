module.exports.VerificarSeEIgual = VerificarSeEIgual;
module.exports.VerificarSeContemPalavra = VerificarSeContemPalavra;

function VerificarSeEIgual(valorAtual,valorEsperado){
  if(aqConvert.VarToStr(valorAtual)== aqConvert.VarToStr(valorEsperado)){
    Log.Checkpoint(valorAtual+ " é igual a " + valorEsperado);    
  }else{
    Log.Error(valorAtual+ " não é igual a " + valorEsperado);   
  }
}

function VerificarSeContemPalavra(string,subString){
  if(aqString.Find(aqConvert.VarToStr(string), aqConvert.VarToStr(subString))>= 0){
    Log.Checkpoint(subString +" foi encontrada dentro do "+ string);
  }else{
    Log.Error(subString+" parte do texto não foi encontrado no " + string);
  }
}