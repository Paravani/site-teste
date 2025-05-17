// script.js
document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao');
    
    botao.addEventListener('click', function() {
        alert('Botão clicado!');
        
        // Mudar cor de fundo aleatória
        const cores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        document.body.style.backgroundColor = corAleatoria;
    });
     // Exemplo de manipulação do DOM
    const paragrafo = document.createElement('p');
    paragrafo.textContent = 'Este parágrafo foi adicionado com JavaScript!';
    document.getElementById('conteudo').appendChild(paragrafo);
    elemento.innerHTML = '<strong>MarketMeet</strong> com HTML';
});