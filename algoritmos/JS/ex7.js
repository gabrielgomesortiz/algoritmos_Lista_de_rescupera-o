
function verificacao(){
    let ano= parseInt(document.getElementById("ano").value);
    let funcao= verificacaoDeBissexto(ano);
    let resp='';
    if(funcao){
        resp='o ano é bissexto';
    }
    else{
        resp='o ano não é bissexto';
    }
    document.getElementById("saida").innerText=resp;
}

function verificacaoDeBissexto(ano){
    let achou=false;
    if(ano%4===0){
        achou=true;
    }
    return achou;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
