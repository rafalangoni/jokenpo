const pedra = document.querySelector("[data-tipo=pedra]");
const papel = document.querySelector("[data-tipo=papel]");
const tesoura = document.querySelector("[data-tipo=tesoura]");
const computador = ['Papel', 'Pedra', 'Tesoura'];

function escolhaDoComputador(){
    let valorDoComputador = Math.floor(Math.random() * computador.length);
    return valorDoComputador
}

function comparaEscolha(escolha){
    if(escolha == "Pedra"){
        console.log("empate")
    }
}

pedra.addEventListener("click", (evento) =>{
    comparaEscolha(evento.target.textContent);
})
papel.addEventListener("click", (evento) =>{
    comparaEscolha(evento.target.textContent);
})
tesoura.addEventListener("click", (evento) =>{
    comparaEscolha(evento.target.textContent);
})

/**
 * 1) fazer uma função para definir a escolha aleatória do computador
 * 2) na função compara escollha, usar a função da escolha aleatória para saber quem ganhou
 */