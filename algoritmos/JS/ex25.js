
function idades() {
    let idades = document.getElementById("idades").value;
    let dividaAsIdades = idades.split(',').map(Number);
    let funcao1=maisDE21(dividaAsIdades);
    let funcao2=nascidosBissexto(dividaAsIdades);
    let funcao3= somaIdades(dividaAsIdades);
    let funcao4= mediaIdades(dividaAsIdades);
    document.getElementById("saida").innerText = 'pesoas com mais de 21 anos: '+funcao1+'\n'+ 'quantos nasceram em anos bissextos: '+funcao2+'\n'+ ' soma das idades: '+ funcao3+'\n'+ ' e a media das idades: '+ funcao4
}
function maisDE21(dividaAsIdades){
    let cont=0
    for (let i = 0; i < dividaAsIdades.length; i++) {
        if (dividaAsIdades[i] >= 21) {
            cont++
        }
    }
    return cont;
}
function nascidosBissexto(dividaAsIdades){
    let bixestos=0
    for (let j = 0; j < dividaAsIdades.length; j++) {
        let descAno = 2024 - dividaAsIdades[j]
        if (descAno % 4 == 0) {
            bixestos++
        }
    }
    return bixestos;
}
function somaIdades(dividaAsIdades){
    let soma=0
    for (let k = 0; k < dividaAsIdades.length; k++) {
        soma += dividaAsIdades[k]
    }
    return soma;
}
function mediaIdades(dividaAsIdades){
    let soma2=0
    let soma=0
    for (let k = 0; k < dividaAsIdades.length; k++) {
        soma += dividaAsIdades[k]
    }
    for (let l = 0; l < dividaAsIdades.length; l++) {
        soma2++
    }
   let media = soma / soma2;
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
