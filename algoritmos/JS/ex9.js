
function calcular() {
    let preco = parseFloat(document.getElementById("preco").value);
    let juros = parseFloat(document.getElementById("juros").value);
    let funcao1 = acrescimo(preco, juros);
    let funcao2 = desconto(preco, juros);
    document.getElementById("saida").innerText = 'Valor inicial: ' + preco + ' e o juros: ' + juros + ' e acrescimo: ' + funcao1 +' então o desconto: '+ funcao2;
}
function acrescimo(preco, juros) {
    let calc = (juros / 100 * preco) + preco;
    return calc;
}
function desconto(preco, juros) {
    let calc = ((juros / 100 * -preco) + preco);
    return calc;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
