
function escreva() {
    let nome = document.getElementById("inputnome").value;
    let sobrenome = 0;
    for (let i = nome.length - 1; i >= 0; i--) {
        if (nome.charAt(i) === " ") {
            sobrenome = i;
            break;
        }
    }
    let funcao= trabalharNome(nome,sobrenome)
    document.getElementById("saida").innerText = funcao;
}
function trabalharNome(nome,sobrenome){
    let resp = "";
    for (let i = sobrenome; i < nome.length; i++) {
        resp += nome.charAt(i)
    }
    resp += ','
    for (let i = 0; i < sobrenome; i++) {

        resp += nome.charAt(i)
    }
    return resp;    
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
