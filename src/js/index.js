/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão do pokemon correspondente ao que foi selecionado na listagem


pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão pokemon

precisamos criar duas variáveis JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com evento de click feito pelo usuario na listagem pokemon

-remover a classe aberto só do cartão que esta aberto
-ao clicar em um pokemon da listagem pegamos o id dese pokemon pra saber qual o cartão mostrar
-remover a classe ativo que marca o pokemon selecionado
-adionar a classe ativo no item da lista selecionado
*/

// selecionar toda a lista de pokemons
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
// selecionar todos os cartãos pokemons
const listaCardPokemons = document.querySelectorAll('.cartao-pokemon')

//selecionar todos os itens da lista para fazer uam determinada função
listaSelecaoPokemons.forEach(pokemon => {

    // adionar um evento de click
    pokemon.addEventListener('click', () => {

        // remover o cartao que não esta selecionado
        const removCartPokAberto = document.querySelector('.aberto')
        removCartPokAberto.classList.remove('aberto')

        // pegar o id pra mostrar o cartão correspondente
        const idPokemonSelecionado = pokemon.attributes.id.value

        // depois que clicar mostrar o cartão selecionado
        const abTodCartPoks = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir =  document.getElementById(abTodCartPoks)
       cartaoPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativo do cartão selecionado
        const pokemonAtivoListagem = document.querySelector('.ativa')
        pokemonAtivoListagem.classList.remove('ativa')

        // acionar a classe ativa no cartão pokemon
        const ativarClasseCartaoPokemon = document.getElementById(idPokemonSelecionado)
        ativarClasseCartaoPokemon.classList.add('ativa')
    })
})