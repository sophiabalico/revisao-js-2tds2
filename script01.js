// preciso verificar se a idade do aluno é maior que 7 anos

let idadeAluno = 16;

if (idadeAluno > 7) {
    console.log("aluno pode ser matriculado!");
} else {
    console.log("aluno não pode se matricular");
}

// para alunos entre 8 e 12 anos: infantil
// para alunos entre 13 e 17: adolescentes
// para alunos maiores de 18: adulto

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("categoria infantil");
} else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("categoria adolescente"); 
} else if (idadeAluno > 17) {
    console.log("categoria adulto");
}else {
    console.log("aluno não pode se matricular");
}