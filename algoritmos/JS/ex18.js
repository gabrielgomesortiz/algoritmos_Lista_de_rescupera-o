
function escreva(){
    let  frase= document.getElementById("inputnome").value;
    let funcao= inverter(frase)
    document.getElementById("saida").innerText=funcao;
}
function inverter(frase){
    let armazena="";
    for(let i=frase.length-1;i>=0;i--){
      armazena+= frase[i]
  }
  return armazena;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
