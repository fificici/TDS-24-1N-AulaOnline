/*
A) Utilize o readline-sync para solicitar ao usuário que insira dois números.
B) Armazene os números inseridos pelo usuário em duas variáveis.
C) Realize as operações de adição, subtração, multiplicação, divisão e resto entre os dois números inseridos pelo usuário.
D) Exiba os resultados das operações no console.
*/

const readline = require('readline-sync');

const numero1 = readline.question('Digite o primeiro número: ')
const numero2 = readline.question('Digite o segundo número: ')

const adicao = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2
const resto = numero1 % numero2

console.log(`A adição de ${numero1} e ${numero2} é: ${adicao}`)
console.log(`A subtração de ${numero1} por ${numero2} é: ${subtracao}`)
console.log(`A multiplicação de ${numero1} por ${numero2} é: ${multiplicacao}`)
console.log(`A divisão de ${numero1} por ${numero2} é: ${divisao}`)
console.log(`O resto da divisão de ${numero1} por ${numero2} é: ${resto}`)