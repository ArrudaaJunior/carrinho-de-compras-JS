let valorTotal;
limpar()

function adicionar() {
    
    //Recuperando valores do html
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
  

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeDoProduto = produto.split('-')[0];
    let valorDaUnidade = produto.split('R$')[1];
    
    //Calculando preço e subtotal
    let preco = quantidade * valorDaUnidade;

    //Adicionando no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    //Atualizando o valor total
    valorTotal = valorTotal + preco;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}