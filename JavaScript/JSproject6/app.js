function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de > ate){
        alert('O número inserido em "Do número" não pode ser maior que em "Até o número"')
        document.getElementById('de').value = '';
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumAleatorio(de, ate);
        if (numero > (ate - de)){
            alert('o número "de" não pode ser maior que o número "até"')
            break;
        }
        while (sorteados.includes(numero)) {
            numero = obterNumAleatorio(de, ate)
            alert('tentando obter número inédito')
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  Nenhum até agora</label>';
  alterarStatusBotao();
}