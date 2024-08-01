
function escreva(){
    let  frase= document.getElementById("inputnome").value;
    let armazena=0;
    for(let i=0; i<frase.length;i++){
        let l=frase[i].toLowerCase();
        armazena+= funcao(l)
    }
document.getElementById("saida").innerText=armazena;
}
function funcao(l){
    let retorno=0
    if(l==='a'||l==='á'||l==='à'||l==='â'||l==='ã'){
           retorno++
    }
    return retorno;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
