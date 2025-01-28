/*
OBJETIVO - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/
//OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
document.getElementById("btn-avancar")
// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
const btnAvancar = document.getElementById("btn-avancar") //const é de constante, é um valor que não muda.

/*btnAvancar.addEventListener("click", function() {
   console.log("verdura")
     
     })
  */
  //add event listener analisa o primeiro esperado evento, nesse caso click, para ativar a function() que realiza qualquer tarefa dentro do {}.

// passo 3 - fazer aparecer o próximo cartão da lista
const cartoes = document.querySelectorAll(".cartao")
//essa const pegou todos da classe cartao(.cartao, porque classe começa com . ) qualquer coisa, testa com um breve console.log
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function() {
  if(cartaoAtual === cartoes.length - 1){
    return;
  }
  //passo 4 - buscar o cartão que esta selecionado e esconder
  removerCartao();
  
  cartaoAtual++;
  mostrarCartao();
})

const btnVoltar = document.getElementById("btn-voltar")

btnVoltar.addEventListener("click", function() {
  if(cartaoAtual === 0){
    return;
  }
  removerCartao()
  
  cartaoAtual--;
  mostrarCartao()
})

function removerCartao(){
  const cartaoSelecionado = document.querySelector(".selecionado")
  cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartao(){
  cartoes[cartaoAtual].classList.add("selecionado")
}

cartoes.forEach(cartao => {
  cartao.addEventListener('click', function(){
    const cartaVirada = cartao.querySelector(".carta-virada");
    //o array cartao (criado dentro desse for each) dentro do array cartoes, será verificado atraves do classlist se tem "virar", e o toggle vai tirar se tiver. Se não tiver, vai colocar.
    cartao.classList.toggle("virar");
    cartaVirada.classList.toggle("mostrar-fundo-carta");
    
    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder")
  });
});