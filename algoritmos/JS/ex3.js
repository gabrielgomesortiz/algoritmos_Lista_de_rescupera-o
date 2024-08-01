function calcular(){
    let preco= parseFloat(document.getElementById("preco").value);
    let s= distancia(preco)
    document.getElementById("saida").innerText=s;
}
function distancia(preco) {
let calculo= preco*0.10;
let total= calculo+preco;
let resposta= "Você pagará na gorgeta: "+calculo.toFixed(2)+' e vc pagara no total: '+ total.toFixed(2);
return resposta;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});