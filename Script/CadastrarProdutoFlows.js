var PrincipalPage = require("PrincipalPage");
var FormOrderPage = require("FormOrderPage");

module.exports.CadastrarProduto = CadastrarProduto;

function CadastrarProduto(produto,quantidade,cidade,cep,dataExp,estado,rua,nome,card,numCard){  
  PrincipalPage.ClicarEmNewOrder("Orders|New order...");
  FormOrderPage.EscolherProduto(produto);
  FormOrderPage.DigitarQuantidade(quantidade);
  FormOrderPage.DigitarData();
  FormOrderPage.DigitarCidade(cidade);
  FormOrderPage.DigitarCEP(cep);
  FormOrderPage.DigitarDataExpirarCartao(dataExp);
  FormOrderPage.DigitarEstado(estado);
  FormOrderPage.DigitarRua(rua);
  FormOrderPage.DigitarNome(nome);
  FormOrderPage.SelecionarCartao(card);
  FormOrderPage.DigitarNumCartao(numCard);
  FormOrderPage.ClickOK();
}