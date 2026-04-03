class Carro {
    constructor(marca, modelo, cor = "") {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
    }


    acelerar(elementId) {
        this.velocidade += 10;
        this.atualizarInterface(elementId);
    }

    frear(elementId) {
        this.velocidade = Math.max(0, this.velocidade - 5); 
        this.atualizarInterface(elementId);
    }

  
    mostrarVelocidade() {
        alert(`O ${this.modelo} ${this.cor} está a ${this.velocidade} km/h.`);
    }

    atualizarInterface(elementId) {
        if (elementId) {
            document.getElementById(elementId).innerText = this.velocidade;
        }
    }
}

const fusca = new Carro("Volkswagen", "Fusca", "Azul");
const gol = new Carro("Volkswagen", "Gol Quadrado", "Prata");