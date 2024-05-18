function adicionar() {
    
    //Recuperando valores do html
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let quantidade = document.getElementById('quantidade').value;
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
}

function limpar() {

}