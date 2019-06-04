module.exports.ClicarElemento = ClicarElemento;
module.exports.ClickComParametro = ClickComParametro;
module.exports.sendKeys = sendKeys;
module.exports.setText = setText;
module.exports.Clicar = Clicar;
module.exports.SelectItem = SelectItem;
module.exports.ModificarData = ModificarData;
module.exports.ClicarRadio = ClicarRadio;
module.exports.VerificarProdutoGrid = VerificarProdutoGrid;
module.exports.VerificarQuantidadeDeItemGrid = VerificarQuantidadeDeItemGrid;
module.exports.VerificarNomeNaGrid = VerificarNomeNaGrid;

function sendKeys(elemento, texto){
  elemento.Keys(texto);
}

function setText(elemento, texto){
  elemento.SetText(texto);
}

function ClicarElemento(elemento,valor){
  elemento.ClickItem(valor);
}

function Clicar(elemento){
  elemento.Click();
}

function ClicarRadio(elemento){
  elemento.ClickButton();
}

function DoubleClick(elemento){
  elemento.EventMouseDoubleClick;
}
function SelectItem(elemento, item){
 elemento.SelectedItem = item; 
}

function ModificarData(data, valor){
  data.wDate = valor;
}

function ClickComParametro(caminho, elemento){
  caminho.Click(elemento);
}

function VerificarProdutoGrid(produto){
  for(var i = 0; i < Aliases.Orders.MainForm.GridDePedidos.wItemCount; i++ ){
    if(Aliases.Orders.MainForm.GridDePedidos.wItem(i,1) == produto){    
      return produto;
    }else{
      Log.Error("O Produto pesquisado não foi encontrado!")
    }
  }
} 
 
 function VerificarQuantidadeDeItemGrid(){
  return Aliases.Orders.MainForm.GridDePedidos.wItemCount;
}
  
 function VerificarNomeNaGrid(nome){   
   for(var i = 0; i < Aliases.Orders.MainForm.GridDePedidos.wItemCount; i++ ){
    if(Aliases.Orders.MainForm.GridDePedidos.wItem(i, 0) == nome){    
      return nome;
    }else{
      Log.Error("O Nome pesquisado não foi encontrado!")
    }
  }
}


