module.exports.EscolherProduto = EscolherProduto;
module.exports.DigitarQuantidade = DigitarQuantidade;
module.exports.DigitarData = DigitarData;
module.exports.DigitarCidade = DigitarCidade;
module.exports.DigitarCEP = DigitarCEP;
module.exports.DigitarDataExpirarCartao = DigitarDataExpirarCartao;
module.exports.DigitarEstado = DigitarEstado;
module.exports.DigitarRua = DigitarRua;
module.exports.DigitarNome = DigitarNome;
module.exports.SelecionarCartao = SelecionarCartao;
module.exports.ClickOK = ClickOK;
module.exports.DigitarNumCartao = DigitarNumCartao;

var GeneralUtils = require("GeneralUtils");
var PageBase = require("PageBase");
var elementGroup = Aliases.Orders.OrderForm.Group;
var Botao = Aliases.Orders.OrderForm.ButtonOK;
function EscolherProduto(produto){
  PageBase.ClicarElemento(elementGroup.ProductNames,produto);
}
function DigitarQuantidade(qts){
  PageBase.setText(elementGroup.quantidade,qts);
}
function DigitarData(){
  PageBase.ModificarData(elementGroup.Date,GeneralUtils.GerarDatas());
}
function DigitarCidade(cidade){
  PageBase.sendKeys(elementGroup.City,cidade);
}
function DigitarCEP(cep){
  PageBase.sendKeys(elementGroup.Zip,cep);
}
function DigitarDataExpirarCartao(dataEx){
  PageBase.ModificarData(elementGroup.ExpDate,dataEx);
}
function DigitarEstado (estado){
  PageBase.sendKeys(elementGroup.State, estado);
}
function DigitarRua(rua){
  PageBase.sendKeys(elementGroup.Street, rua);
}
function DigitarNome (nome){
  PageBase.sendKeys(elementGroup.Customer, nome);
}
function SelecionarCartao(card){
  switch (card)
  {
    case "ae" :
      PageBase.Clicar(elementGroup.ae);
      break;  
    case "master":
      PageBase.Clicar(elementGroup.master);
      break;
    case "visa":
      PageBase.Clicar(elementGroup.visa);
      break;
  
    default:
    Log.Message("Não foi selecionado nenhum cartão Válido!")
  }  
}
function DigitarNumCartao(num){
  PageBase.setText(elementGroup.CardNo,num)
}
function ClickOK(){
  PageBase.Clicar(Botao);
}

