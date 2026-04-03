class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        
        return ` Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}



const p1 = new Pessoa("João", 23 )
const p2 = new Pessoa("Pedro", 37)
const p3 = new Pessoa("Sara", 45)
const p4 = new Pessoa("Joana", 57)
const p5 = new Pessoa("Marta", 89)


const listaDePessoas = [p1, p2,p3, p4, p5];


const botao = document.getElementById('btnApresentar');
const container = document.getElementById('output');
const btnVoltar = document.getElementById('btnVoltar');


btnVoltar.addEventListener('click', (Aqui) => {
    container.innerHTML = ''; 
});

botao.addEventListener('click', () => {
    container.innerHTML = '';

    listaDePessoas.forEach(pessoa => {
        const p = document.createElement('p');
        p.textContent = pessoa.apresentar();
        

        p.style.padding = "5px";
        p.style.borderBottom = "1px solid #fab2e8";
        
        container.appendChild(p);
    });
});