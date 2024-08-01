
function escreva(){
    let  numeros= document.getElementById("inputnome").value;
    let array= numeros.split(",").map(Number);
    let funcao= verificarMaiorNum(array);
    document.getElementById("saida").innerText=funcao
}
function verificarMaiorNum(array){
    let maior = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
