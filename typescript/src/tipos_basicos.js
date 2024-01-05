"use strict";
let estaChovendo = false;
let idade = 26;
let altura = 1.64;
const nacionalidade = 'brasileira';
const colegas = ['Ca', 'Pa', 'Gu'];
const tecnologias = ['html', 'Js', 'Ts', 'Python'];
// Array de leitura não tem o 'push' , não podemos adicionar novos itens.
const notas = [1, 4, 5, 7, 8];
const lista = ['Kathleen', true, 26];
let idadeAna = 25;
idadeAna = '25 anos';
// Variáveis do tipo any aceitam qualquer tipo de valor, precisamos tomar cuidado
// Ele acaba fugindo do propósito do Ts.
let dadosAPI;
dadosAPI = 10;
dadosAPI = true;
dadosAPI = 'Kathleen';
// tipagem explicita
// Quando não deplaramos a tipagem do dado
let curso = 'fullstack';
// O Ts entendeu que a variável é do tipo string e não aceita a mudaça de valor para number
// curso = 10;
