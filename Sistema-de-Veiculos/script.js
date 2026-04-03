// Classe Base
class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    info() {
        return `MARCA: ${this.marca} <br> ANO: ${this.ano}`;
    }
}

// Classe Filha: Carro
class Carro extends Veiculo {
    constructor(marca, ano, portas) {
        super(marca, ano);
        this.portas = portas;
    }
    info() {
        return `${super.info()} <br> PORTAS: ${this.portas}`;
    }
}

// Classe Filha: Moto
class Moto extends Veiculo {
    constructor(marca, ano, cilindradas) {
        super(marca, ano);
        this.cilindradas = cilindradas;
    }
    info() {
        return `${super.info()} <br> CILINDRADAS: ${this.cilindradas}cc`;
    }
}

// --- Criação dos Objetos ---
const meuCarro = new Carro("Toyota", 2024, 4);
const motoComum = new Moto("Honda", 2022, 500);
const minhaXRE = new Moto("Honda XRE", 2024, 300); // A nova XRE aqui!

// Função para exibir as informações ao clicar
function mostrarInfo(tipo) {
    const display = document.getElementById('resultado');
    
    if (tipo === 'carro') {
        display.innerHTML = meuCarro.info();
    } else if (tipo === 'moto1') {
        display.innerHTML = motoComum.info();
    } else if (tipo === 'moto2') {
        display.innerHTML = minhaXRE.info();
    }
}