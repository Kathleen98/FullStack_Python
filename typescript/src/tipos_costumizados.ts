type aluno = {
    nome: string;
    curso: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: 'Ka',
        curso: ['Full Stack', "UX"],
        idade: 25,
    },

    {
        nome: 'Ga',
        curso: ['Front-end','Figma'],
        idade: 24,
    }
]

alunos.push({
    nome: 'Ju',
    curso: ["Back-end"],
    idade: 20,
})