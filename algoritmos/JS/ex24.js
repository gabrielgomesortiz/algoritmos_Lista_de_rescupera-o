
function escreva() {
    let preco = parseInt(document.getElementById("preco").value);
    let juros = parseInt(document.getElementById("juros").value);
    let NDM = parseInt(document.getElementById("NumDeMeses").value);
    let funcao = TotalApagar(preco, juros, NDM)
    document.getElementById("saida").innerHTML = funcao
}
function TotalApagar(preco, juros, NDM) {
    let armazenaOsJurosAplicados = '<strong>Os juros aplicados foram:</strong>'+'<br>';
    let soma = 0
    let armazenaTudo='';
    for (let i = 1; i <= NDM; i++) {
        soma = (juros / 100 * preco) + preco
        preco = soma;
        armazenaOsJurosAplicados += preco.toFixed(2)+'<br>';
    }
    let TotalApagar = soma / NDM
        armazenaTudo=armazenaOsJurosAplicados +'<br>'+'<strong>por mes vc pagará R$: </strong>'+ TotalApagar.toFixed(2)
    return armazenaTudo;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
