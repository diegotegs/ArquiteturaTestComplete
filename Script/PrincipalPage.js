var PageBase = require("PageBase");
var AssertUtils = require("AssertUtils");

module.exports.ClicarEmNewOrder = ClicarEmNewOrder;

//============================= Mapeamento =============================
let menuNewOrder;
//============================= Mapeamento =============================

function inicilizaVariavel(){
 menuNewOrder =  Aliases.Orders.MainForm.MainMenu; 
}

function ClicarEmNewOrder(menu){
  inicilizaVariavel();
  PageBase.ClickComParametro(menuNewOrder,menu);
}