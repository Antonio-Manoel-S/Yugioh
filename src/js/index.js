/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
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
console.log(cartoes)
//essa const pegou todos da classe cartao(.cartao, porque classe começa com . ) qualquer coisa, testa com um breve console.log

btnAvancar.addEventListener("click", function() {

     
     })
     console.log(Object.getPrototypeOf(document.querySelectorAll('li')));
