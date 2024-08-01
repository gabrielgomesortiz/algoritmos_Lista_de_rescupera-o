function calcular(){
    let num= parseInt(document.getElementById("num").value);
    let s= distancia(num)
    document.getElementById("saida").innerText=s;
}
function distancia(num) {
let calculo= "Seu número ao quadrado é "+num**2
return calculo;
}

document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});