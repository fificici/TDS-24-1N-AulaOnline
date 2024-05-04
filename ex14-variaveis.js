/*
A) Utilize o readline-sync para solicitar ao usuário que insira um número.
B) Armazene o número inserido pelo usuário em uma variável.
C) Exiba o número inserido pelo usuário no console.
*/

const readline = require('readline-sync')

const numero = readline.question('Digite um número: ')

console.log('Número inserido pelo usuário:', numero)