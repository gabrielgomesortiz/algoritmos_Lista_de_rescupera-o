function calcular(){
    let celsius= parseFloat(document.getElementById("celsius").value);
    let s= distancia(celsius)
    document.getElementById("saida").innerText=s;
}
function distancia(celsius) {
    let farenhits= celsius*1.8+32;
    return farenhits;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});