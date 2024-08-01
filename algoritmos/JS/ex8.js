
function calcular() {
    let idade = parseInt(document.getElementById("idade").value)
    let f = verificar(idade);
    document.getElementById("saida").innerText = f
}

function verificar(idade) {
    let resp = "";
    if (idade <= 12) {
        resp = "vc é criança"
    }
    else if (idade <= 18) {
        resp = "vc é adolescente"
    }
    else if (idade <= 60) {
        resp = "vc e adulto"
    }
    else {
        resp = "vc é idoso"
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
