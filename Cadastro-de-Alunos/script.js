
class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
    }

    calcularMedia() {
        const media = (this.nota1 + this.nota2) / 2;
        const status = media >= 6 ? "Aprovado" : "Reprovado";
        
        return {
            valorMedia: media.toFixed(1),
            status: status
        };
    }
}


function registrarAluno() {
    const nomeInput = document.getElementById('nome').value;
    const n1Input = document.getElementById('nota1').value;
    const n2Input = document.getElementById('nota2').value;

    
    if (!nomeInput || n1Input === "" || n2Input === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

  
    const alunoObj = new Aluno(nomeInput, n1Input, n2Input);
    const resultado = alunoObj.calcularMedia();

    const display = document.getElementById('resultado');
    const classeStatus = resultado.status === "Aprovado" ? "aprovado" : "reprovado";

    display.innerHTML = `
        <p>Média de ${alunoObj.nome}: <strong>${resultado.valorMedia}</strong></p>
        <p class="${classeStatus}">${resultado.status}</p>
    `;
}