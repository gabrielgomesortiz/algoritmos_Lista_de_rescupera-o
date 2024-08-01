
function dados() {
    let frase = document.getElementById("frase").value;
    let fraseInvertida = ''
    let resp = ''
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase.charAt(i)
    }
    let funcao = validacao(fraseInvertida, frase);
    if (funcao) {
        resp = 'sua palavra é um palindromo'
    }
    else {
        resp = 'sua palavra não é um palindromo'
    }
    document.getElementById("saida").innerText = resp;
}
function validacao(fraseInvertida, frase) {
    let validar = false;
    if (fraseInvertida === frase) {
         validar = true;
    }
    return validar;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
