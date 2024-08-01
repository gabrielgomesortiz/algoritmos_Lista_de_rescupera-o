function caclcular(){
    let termo= parseInt(document.getElementById("termo").value);
    let Enesimo= parseInt(document.getElementById("Enesimotermo").value);
    let ant=0;
    let posterior=1;
    let soma=0;
    let termos=[ant,posterior]
    for(let i=2;i<termo;i++){
        soma= ant+posterior
        termos+=','+soma
        ant=posterior;
        posterior=soma;
    }
    let funcao= descobrirEnesimoTermo(Enesimo,termos);
    document.getElementById("saida").innerText= 'seu fibonacci resultou nos seguintes termos '+ termos+' e o enesimo numero foi: '+ funcao;
}
function descobrirEnesimoTermo(Enesimo,termos){
    let termosDividos= termos.split(',');
    let pegarEnesimo=0;
    for(let i=0;i<=termosDividos.length;i++){
        if(i== Enesimo-1){
            pegarEnesimo=termosDividos[i]
        }
    }
    return pegarEnesimo;
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});
