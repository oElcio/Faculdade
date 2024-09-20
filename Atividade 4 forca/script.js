const palavras = [
    "abacaxi", "anel", "amigo", "ave", "bola", "fogo", "cama", "gato"
];

let palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
let palavraOculta = Array(palavraSelecionada.length).fill('_');
let erros = 0;

function iniciarJogo() {
    document.getElementById('palavraDisplay').textContent = palavraOculta.join(' ');

    const botoes = document.getElementById('botoes');
    botoes.innerHTML = '';

    for (let i = 65; i <= 90; i++) {
        let botao = document.createElement('button');
        botao.className = 'botaoLetra';
        botao.textContent = String.fromCharCode(i);
        botao.onclick = () => adivinharLetra(botao.textContent);
        botoes.appendChild(botao);
    }
}

function adivinharLetra(letra) {
    let acertou = false;

    for (let i = 0; i < palavraSelecionada.length; i++) {
        if (palavraSelecionada[i].toUpperCase() === letra) {
            palavraOculta[i] = palavraSelecionada[i];
            acertou = true;
        }
    }

    document.getElementById('palavraDisplay').textContent = palavraOculta.join(' ');

    if (!acertou) {
        erros++;
        document.getElementById('forca').textContent = `Erro: ${erros}/6`;
        if (erros >= 6) {
            alert('Você perdeu! A palavra era: ' + palavraSelecionada);
            reiniciarJogo();
        }
    } else if (!palavraOculta.includes('_')) {
        alert('Parabéns! Você acertou a palavra!');
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = Array(palavraSelecionada.length).fill('_');
    erros = 0;
    document.getElementById('forca').textContent = `Erro: ${erros}/6`;
    iniciarJogo();
}

iniciarJogo();
