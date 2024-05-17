function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let quantidade = document.getElementById('quantidade');
    let valorDaUnidade = produto.split('R$')[1];
    let preco = quantidade.value * valorDaUnidade;
}

function limpar() {

}