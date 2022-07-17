const pedra = document.querySelector("[data-tipo=pedra]");
const papel = document.querySelector("[data-tipo=papel]");
const tesoura = document.querySelector("[data-tipo=tesoura]");
const computador = ['Papel', 'Pedra', 'Tesoura'];
let vencedor = document.querySelector('.principal__vencedor')
let escolhaComputador = document.querySelector('.principal__computador-escolha');

pedra.addEventListener("click", () => {
    vencedor.textContent = '';
    escolhaComputador.textContent = ''
    let valorDoComputador = Math.floor(Math.random() * computador.length);
    if (valorDoComputador == 1) {
        vencedor.textContent = ' Empate!';
        escolhaComputador.textContent = ' Pedra';
    } else if (valorDoComputador == 0) {
        vencedor.textContent = ' Computador venceu!';
        escolhaComputador.textContent = ' Papel';
    }else{
        vencedor.textContent = ' Você venceu!';
        escolhaComputador.textContent = ' Tesoura';
    }
})

papel.addEventListener("click", () => {
    vencedor.textContent = '';
    escolhaComputador.textContent = ''
    let valorDoComputador = Math.floor(Math.random() * computador.length);
    if (valorDoComputador == 1) {
        vencedor.textContent = ' Você venceu!';
        escolhaComputador.textContent = ' Pedra';
    } else if (valorDoComputador == 0) {
        vencedor.textContent = ' Empate!';
        escolhaComputador.textContent = ' Papel';
    }else{
        vencedor.textContent = ' Computador venceu!';
        escolhaComputador.textContent = ' Tesoura';
    }
})

tesoura.addEventListener("click", () => {
    vencedor.textContent = '';
    escolhaComputador.textContent = ''
    let valorDoComputador = Math.floor(Math.random() * computador.length);
    if (valorDoComputador == 1) {
        vencedor.textContent = ' Computador venceu!';
        escolhaComputador.textContent = ' Pedra';
    } else if (valorDoComputador == 0) {
        vencedor.textContent = ' Você enceu!';
        escolhaComputador.textContent = ' Papel';
    }else{
        vencedor.textContent = ' Empate!';
        escolhaComputador.textContent = ' Tesoura';
    }
})

/**
 * 1) fazer uma função para definir a escolha aleatória do computador
 * 2) na função compara escollha, usar a função da escolha aleatória para saber quem ganhou
 */