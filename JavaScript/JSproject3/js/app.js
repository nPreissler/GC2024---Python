

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(['-']);
    let preco = parseFloat(nomeProduto[1].replace('R$', ''));
    let quantia = parseInt(document.getElementById('quantidade').value);
    let total = document.getElementById('valor-total');
    let valorTotal = parseFloat(total.textContent.replace('R$', ''));
    let carrinho = document.getElementById('lista-produtos');


    if (produto == 'Fone de ouvido - R$100') {

        quantia = isNaN(quantia) ? 1 : quantia;
        let resultado = document.getElementById('valor-total').value;
        resultado = preco * quantia;
        valorTotal += resultado;
        let itemCarrinho = document.createElement('span');
        itemCarrinho.className = 'carrinho__produtos__produto';
        itemCarrinho.innerHTML = `<span class="texto-azul">${quantia}x</span> ${nomeProduto[0]} <span class="texto-azul">R$${resultado.toFixed(0)}</span>`;
        carrinho.appendChild(itemCarrinho);
        total.innerHTML = `R$${valorTotal.toFixed(0)}`;

    } else if (produto == 'Celular - R$1400') {

        quantia = isNaN(quantia) ? 1 : quantia;
        let resultado = document.getElementById('valor-total').value;
        resultado = preco * quantia;
        valorTotal += resultado;
        let itemCarrinho = document.createElement('span');
        itemCarrinho.className = 'carrinho__produtos__produto';
        itemCarrinho.innerHTML = `<span class="texto-azul">${quantia}x</span> ${nomeProduto[0]} <span class="texto-azul">R$${resultado.toFixed(0)}</span>`;
        carrinho.appendChild(itemCarrinho);
        total.innerHTML = `R$${valorTotal.toFixed(0)}`;

    } else if (produto == 'Oculus VR - R$5000') {

        quantia = isNaN(quantia) ? 1 : quantia;
        let resultado = document.getElementById('valor-total').value;
        resultado = preco * quantia;
        valorTotal += resultado;
        let itemCarrinho = document.createElement('span');
        itemCarrinho.className = 'carrinho__produtos__produto';
        itemCarrinho.innerHTML = `<span class="texto-azul">${quantia}x</span> ${nomeProduto[0]} <span class="texto-azul">R$${resultado.toFixed(0)}</span>`;
        carrinho.appendChild(itemCarrinho);
        total.innerHTML = `R$${valorTotal.toFixed(0)}`;

    }

}

function limpar() {
    window.location.reload()
}