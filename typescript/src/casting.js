"use strict";
// Em Ts não podemos ter a mesma variável em arquivos diferentes.
// Para conseguir usar o mesmo nome de uma variável é preciso criar uma "pasta" dentro do código.
// Usamos o "namespace casting" para conseguir criar essa pasta.
var casting;
(function (casting) {
    let idade = 25;
    // quando declaramos que uma variável será do tipo any e precisamos usar 
    // métodos do tipo number, por exemplo, usamos a estrutura "as"
    // Estamos dizendo para o Ts, trate a variável "idade" com "number"
    // Assim habilitamos os métodos para o tipo number
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
    });
    // Conversão TS, convertemos a variável para o tipo desconhecido "unknown"
    // Em seguida informamos o tipo que desejamos fazer a conversão
    let nome = 35;
    nome.length;
})(casting || (casting = {}));
