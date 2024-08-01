
function calcular(){
    let b= parseInt(document.getElementById("vb").value);
    let c= parseInt(document.getElementById("vc").value);
    let s= distancia(b,c)
    document.getElementById("saida").innerText=s;
}
function distancia(b,c) {
let calculo= Math.sqrt((b**2+c**2))

return calculo.toFixed(1);
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
