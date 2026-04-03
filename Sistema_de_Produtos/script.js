
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }


    calcularTotal() {
        return this.preco * this.quantidade;
    }
}


const meuProduto = new Produto(" Valor Unitário do Produto", 199.90, 1);


const inputQtd = document.getElementById('qtd');
const displayTotal = document.getElementById('valor-total');
const displayNome = document.getElementById('nome-produto');
const displayPreco = document.getElementById('preco-unitario');


function atualizarInterface() {
   

    meuProduto.quantidade = Number(inputQtd.value);

   
    const total = meuProduto.calcularTotal();

   
    displayTotal.innerText = total.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    
    console.log(`Nova quantidade: ${meuProduto.quantidade} | Total: R$ ${total.toFixed(2)}`);
}


inputQtd.addEventListener('input', atualizarInterface);


displayNome.innerText = meuProduto.nome;
displayPreco.innerText = meuProduto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
atualizarInterface();