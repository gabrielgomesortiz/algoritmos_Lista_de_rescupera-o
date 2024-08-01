
function calcular(){
    let num=document.getElementById("num").value
    let f= somarnumeros(num)
    document.getElementById("saida").innerText='A soma de todos os números resulta em: '+f
}
function  somarnumeros(num){
    let soma=0
    let AddEspco=''
    for(let i=0; i<num.length;i++){   
        AddEspco+= num[i]+"+"
    }
    AddEspco= AddEspco.slice(0,-1)
    let trasfomaEmNum= AddEspco.split("+").map(Number);
    for(let j=0; j<trasfomaEmNum.length;j++){
        soma+= trasfomaEmNum[j]
    }
    let armazena=soma +' e ('+AddEspco+')'
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
