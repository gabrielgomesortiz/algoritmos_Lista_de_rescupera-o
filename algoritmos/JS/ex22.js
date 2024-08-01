
function escreva(){
    let  numeros= document.getElementById("inputnome").value;
    let array= numeros.split(",").map(Number);
    let armazenaApenasNumImpares='';
    for(let i=0; i<array.length;i++){
        armazenaApenasNumImpares+=AvaliarNumeros(array[i]);
    }
    document.getElementById("saida").innerText='seu conjunto é:['+armazenaApenasNumImpares+']'
}
function AvaliarNumeros(array){
    let verificacão=''
    if(array%2!==0){
       verificacão=array+','
    }
    return verificacão;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
