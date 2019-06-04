module.exports.ClicarElemento = ClicarElemento;
module.exports.ClickComParametro = ClickComParametro;
module.exports.sendKeys = sendKeys;
module.exports.setText = setText;
module.exports.Clicar = Clicar;
module.exports.SelectItem = SelectItem;
module.exports.ModificarData = ModificarData;
module.exports.ClicarRadio = ClicarRadio;

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





