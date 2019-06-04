var PageBase = require("PageBase");
var CadastrarProdutoFlows = require("CadastrarProdutoFlows");
var PrincipalPage = require("PrincipalPage");
var AssertUtils = require("AssertUtils");
var AppActionUtils = require("AppActionUtils");

//============================= Mapeamento =============================
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

function CadastrarProdutoMyMoney(){
  AppActionUtils.AbrirAplicacao(TestedApps.Orders); 
  CadastrarProdutoFlows.CadastrarProduto(produtoMenu,quantidadeProduto,cidade,cep,dataExp,estado,rua,nome,card,numCard);
  AssertUtils.VerificarSeEIgual(1,PageBase.VerificarQuantidadeDeItemGrid());
  AssertUtils.VerificarSeEIgual(produtoMenu,PageBase.VerificarProdutoGrid("MyMoney"));
  AssertUtils.VerificarSeContemPalavra(PageBase.VerificarNomeNaGrid(nome),"rinho");
  AppActionUtils.TerminarAplicacao(TestedApps.Orders); 
}