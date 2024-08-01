function calcularNumPares(){
    let termo= parseInt(document.getElementById("termo").value);
    let funcao= descobrirNum(termo);
    document.getElementById("saida").innerText=funcao;
}
function descobrirNum(termo){
    let soma=0;
    for(let i=0;i<=termo;i=i+2){
        soma+= i 
    }
    return soma;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
