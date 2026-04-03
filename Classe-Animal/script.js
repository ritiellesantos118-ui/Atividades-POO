
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} faz um som genérico.`;
    }
}


class Cachorro extends Animal {
    falar() {
        return `${this.nome} diz: Au Au! 🐶`;
    }
}




class Gato extends Animal {
    falar() {
        return `${this.nome} diz: Miau! 🐱`;
    }
}


function testarAnimais() {
    const dog = new Cachorro("Max");
    const cat = new Gato("Thew");
    


    const resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = `
        <p>${dog.falar()}</p>
        <p>${cat.falar()}</p>
    `;
}