/*
A) Utilize o readline-sync para solicitar ao usuário que insira dois números.
B) Armazene os números inseridos pelo usuário em duas variáveis.
C) Faça todas as comparações entre os dois números inseridos pelo usuário utilizando operadores de comparação.
D) Exiba os resultados das comparações no console.
*/

const readline = require('readline-sync');

const numero1 = readline.question('Digite o primeiro número: ')
const numero2 = readline.question('Digite o segundo número: ')

const igual = numero1 === numero2
const diferente = numero1 !== numero2
const maiorQue = numero1 > numero2
const menorQue = numero1 < numero2
const maiorOuIgual = numero1 >= numero2
const menorOuIgual = numero1 <= numero2

console.log(`${numero1} é igual a ${numero2}: ${igual}`)
console.log(`${numero1} é diferente de ${numero2}: ${diferente}`)
console.log(`${numero1} é maior que ${numero2}: ${maiorQue}`)
console.log(`${numero1} é menor que ${numero2}: ${menorQue}`)
console.log(`${numero1} é maior ou igual a ${numero2}: ${maiorOuIgual}`)
console.log(`${numero1} é menor ou igual a ${numero2}: ${menorOuIgual}`)