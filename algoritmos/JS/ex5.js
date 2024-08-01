function calcular(){
    let x1= parseInt(document.getElementById("x1").value);
    let x2= parseInt(document.getElementById("x2").value);
    let y1= parseInt(document.getElementById("y1").value);
    let y2= parseInt(document.getElementById("y2").value);
    let s= distancia(x1,x2,y1,y2);
    document.getElementById("saida").innerText=s;
}
function distancia(x1,x2,y1,y2) {
    let kk= Math.sqrt((x2-x1)**2+(y2-y1)**2);
    return kk.toFixed(2);
}
document.getElementById('showSourceButton').addEventListener('click', function() {
    // Obtém o código fonte do body
    var sourceCode = document.documentElement.outerHTML;
    // Exibe o código fonte no elemento <pre>
    var preElement = document.getElementById('sourceCode');
    preElement.textContent = sourceCode;
    preElement.style.display = 'block';
});