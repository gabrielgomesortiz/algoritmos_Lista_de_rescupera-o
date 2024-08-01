
function verificacao(){  
    let n1= parseFloat(document.getElementById("x1").value);
    let n2= parseFloat(document.getElementById("x2").value);
    let n3= parseFloat(document.getElementById("y1").value);
    let n4= parseFloat(document.getElementById("y2").value);
    let media= (n1+n2+n3+n4)/4;
    let funcao= condicao(media);
    document.getElementById("saida").innerText=funcao;
}
function condicao(media){
    let resp='';
    if(media >= 9.0){
        resp = 'Vc esta aprovado pois tirou A';
    }
    else if(media >= 7.5){
        resp = 'Vc esta aprovado pois tirou B';
    }
    else if(media >= 6.0){
        resp = 'Vc esta aprovado pois tirou C';
    }
    else if(media >= 4.0){
        resp = 'Vc esta reprovado pois tirou D';
    }
    else {
        resp = 'Vc esta reprovado pois tirou E';
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
