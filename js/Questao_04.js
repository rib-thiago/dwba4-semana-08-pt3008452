class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        alert("Nome completo do aluno: " + this.primeiroNome + " " + this.segundoNome);
    }

    media(){
        alert("Média final do aluno: " + ( (this.primeiraNota * 0.6) + (this.segundaNota * 0.4)) ) ;
    }

    situacao(){
        let media = ((this.primeiraNota * 0.6) + (this.segundaNota * 0.4))
        if (media > 6) {
            alert("Aluno: Aprovado");
        } else {
            alert("Aluno: Reprovado");
        }
    }

}

function exibir(alunos) {
  
    for (let i = 0; i < alunos.length; i++) {
        alunos[i].nomeCompleto()
        alunos[i].media()
        alunos[i].situacao()
    }
}



let aluno1 = new Aluno("Thiago", "Ribeiro", 10, 10);
let aluno2 = new Aluno("Karoline", "Keller", 9, 8);
let aluno3 = new Aluno("Gustavo", "Lemos", 5, 2);
let aluno4 = new Aluno("Samuel", "Henrique", 7, 7);
let aluno5 = new Aluno("Vladimir", "Lenin", 10, 9);

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

exibir(alunos);

