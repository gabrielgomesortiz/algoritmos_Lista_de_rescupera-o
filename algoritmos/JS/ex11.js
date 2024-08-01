
function calcular(){
    let num= parseInt(document.getElementById("num").value);
    let funcao= resposta(num)
    document.getElementById("saida").innerText= funcao;
  }
  function resposta(num){
    let armazena=1;
    for(let i=1;i<=num;i++){
      armazena*=i;
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
