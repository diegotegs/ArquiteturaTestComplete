
module.exports.PrimeiroScript = PrimeiroScript;
var PrincipalPage = require("PrincipalPage");
var FormOrderPage = require("FormOrderPage");



var menuOrder ="Orders|New order..." ;
var produtoMenu ="MyMoney";
var quantidadeProduto = "10";
var cidade = "Belo Horizonte";
var cep= "11122233308";
var dataExp = "07/11/2020";
var estado = "Minas Gerais";
var rua= "Rua B";
var nome = "Diego Marinho";
var card = "ae";
var numCard = "1234 2222 1111 3123";

//============================= Mapeamento =============================



function PrimeiroScript(){  
  PrincipalPage.ClicarEmNewOrder(menuOrder);
  FormOrderPage.EscolherProduto(produtoMenu);
  FormOrderPage.DigitarQuantidade(quantidadeProduto);
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

