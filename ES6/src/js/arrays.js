const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 9 },
  ];
  
  // Função para filtrar alunos com nota maior ou igual a 6
  function filtrarAlunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
  }
  
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
  