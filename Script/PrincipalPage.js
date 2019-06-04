module.exports.ValidarQuantidadeDeItemNaColuna = ValidarQuantidadeDeItemNaColuna;
module.exports.ValidarColunaNome = ValidarColunaNome;
module.exports.ValidarProduto = ValidarProduto;

var AssertUtils = require("AssertUtils");
module.exports.ClicarEmNewOrder = ClicarEmNewOrder;

var PageBase = require("PageBase");
let menuNewOrder;

function inicilizaVariavel(){
 menuNewOrder =  Aliases.Orders.MainForm.MainMenu; 
}

function ClicarEmNewOrder(menu){
  inicilizaVariavel();
  PageBase.ClickComParametro(menuNewOrder,menu);

}

function ValidarQuantidadeDeItemNaColuna(quantidade){  
  AssertUtils.VerificarSeEIgual(Aliases.Orders.MainForm.GridDePedidos.wItemCount, quantidade);
}

function ValidarColunaNome(nome){
  var linha = 0;
  var coluna = 0;  
  AssertUtils.VerificarSeContemPalavra(Aliases.Orders.MainForm.GridDePedidos.wItem(linha, coluna),nome)
  
}
function ValidarProduto(produto){
  var linha = 0;
  var coluna = 1;
  AssertUtils.VerificarSeEIgual(Aliases.Orders.MainForm.GridDePedidos.wItem(linha, coluna),produto)
}



