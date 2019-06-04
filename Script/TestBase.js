var CadastrarProdutoFlows = require("CadastrarProdutoFlows");
var PrincipalPage = require("PrincipalPage");
var AssertUtils = require("AssertUtils");
var AppActionUtils = require("AppActionUtils");
//============================= Mapeamento =============================
var produtoMenu ="MyMoney";
//============================= Mapeamento =============================

function PrimeiroScript(){
  AppActionUtils.AbrirAplicacao(TestedApps.Orders); 
  CadastrarProdutoFlows.PrimeiroScript();
  PrincipalPage.ValidarQuantidadeDeItemNaColuna(1);
  PrincipalPage.ValidarProduto(produtoMenu);
  PrincipalPage.ValidarColunaNome("Mari");
  AppActionUtils.TerminarAplicacao(TestedApps.Orders);
  
  
  
}





