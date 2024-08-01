
function escreva(){
    let  numeros= document.getElementById("inputnome").value;
    let array= numeros.split(",").map(Number);
    let soma=0
    let cont=0;
    for(let i=0; i<array.length;i++){
        soma+= array[i]
        cont++
    }
    let funcao= tirarMedia(soma,cont)
    document.getElementById("saida").innerText=funcao
}
function tirarMedia(soma,cont){
    let media= soma/cont;
    return media;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
