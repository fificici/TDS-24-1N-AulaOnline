/*
A) Crie três variáveis: nome, idade e cidade.
B) Atribua valores a essas variáveis com seu nome, idade e cidade.
C) Crie uma variável chamada mensagem e utilize uma template string para criar uma mensagem personalizada que inclua seu nome, idade e cidade. A mensagem deve seguir o seguinte formato: "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]."
D) Exiba a mensagem no console.
E) Refaça o item C utilizando o método de concatenação.
F) Exiba a mensagem no console.
*/

let nome = 'Felipe'
let idade = 18
let cidade = 'São Leopoldo'

let mensagem = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`

console.log(mensagem)

mensagem = 'Olá, meu nome é ' + nome, ',tenho ' + idade, 'anos e moro em ' + cidade, '.'

console.log(mensagem)

