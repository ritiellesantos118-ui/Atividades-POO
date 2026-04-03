
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = parseFloat(preco);
    }
}


class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
       
        if (!produto.nome || isNaN(produto.preco) || produto.preco <= 0) {
            alert("Por favor, insira um nome e um valor válido.");
            return;
        }
        
        this.produtos.push(produto);
        this.atualizarTela();
    }

    limparCarrinho() {
        this.produtos = [];
        this.atualizarTela();
    }

    calcularTotal() {
        return this.produtos.reduce((acc, p) => acc + p.preco, 0);
    }

    atualizarTela() {
        const lista = document.getElementById('lista-itens');
        const totalTxt = document.getElementById('valor-total');
        
   
        lista.innerHTML = "";

        if (this.produtos.length === 0) {
            lista.innerHTML = '<p style="background:none; justify-content:center;">Vazio</p>';
        } else {
        
            this.produtos.forEach(p => {
                const item = document.createElement('p');
                item.innerHTML = `<span>${p.nome}</span> <span>R$ ${p.preco.toFixed(2)}</span>`;
                lista.appendChild(item);
            });
        }

       
        totalTxt.textContent = this.calcularTotal().toFixed(2);
    }
}


const carrinho = new Carrinho();

function adicionar() {
    const nomeInput = document.getElementById('nome');
    const precoInput = document.getElementById('preco');

   
    const novoProd = new Produto(nomeInput.value, precoInput.value);
    carrinho.adicionarProduto(novoProd);

   
    nomeInput.value = "";
    precoInput.value = "";
    nomeInput.focus();
}

function limpar() {
    if (carrinho.produtos.length > 0) {
        if (confirm("Deseja realmente limpar todo o carrinho?")) {
            carrinho.limparCarrinho();
        }
    }
}