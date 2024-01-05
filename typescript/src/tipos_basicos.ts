let estaChovendo: boolean = false;

let idade:number = 26;

let altura:number = 1.64;

const nacionalidade: string = 'brasileira';

const colegas:string[] = ['Ca', 'Pa', 'Gu'];
const tecnologias: Array <string> = ['html', 'Js', 'Ts', 'Python'];

// Array de leitura não tem o 'push' , não podemos adicionar novos itens.
const notas: ReadonlyArray<number> = [1, 4 , 5, 7, 8];

const lista: [nome:string, estudando: boolean, idade: number] = ['Kathleen', true, 26];

let idadeAna: number | string = 25;
idadeAna = '25 anos';

// Variáveis do tipo any aceitam qualquer tipo de valor, precisamos tomar cuidado
// Ele acaba fugindo do propósito do Ts.
let dadosAPI: any;

dadosAPI = 10;
dadosAPI = true;
dadosAPI = 'Kathleen';

// tipagem explicita
// Quando não deplaramos a tipagem do dado
let curso ='fullstack';
// O Ts entendeu que a variável é do tipo string e não aceita a mudaça de valor para number
// curso = 10;

