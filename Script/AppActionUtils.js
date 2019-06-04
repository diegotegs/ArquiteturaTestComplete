module.exports.AbrirAplicacao = AbrirAplicacao;
module.exports.FecharAplicacao = FecharAplicacao;
module.exports.TerminarAplicacao = TerminarAplicacao;

//passar o caminho da aplicação como parâmetro
// ex: TestdApps.nome_da_Aplicacao
function AbrirAplicacao(aplicacao){
  aplicacao.Run();
}

//passar o caminho da aplicação como parâmetro
function TerminarAplicacao(aplicacao){
aplicacao.Terminate();  
}

function FecharAplicacao(aplicacao){
  aplicacao.Close();
}

