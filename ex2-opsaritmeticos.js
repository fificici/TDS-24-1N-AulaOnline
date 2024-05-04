/*
A) Crie quatro variáveis: numero1, numero2, soma, subtracao, multiplicacao, divisao e modulo.
B) Atribua valores numéricos às variáveis numero1 e numero2.
C) Use os operadores aritméticos para realizar as seguintes operações e atribuir os resultados às variáveis correspondentes:
D) Calcule a soma dos dois números e atribua o resultado à variável soma.
E) Calcule a subtração do numero1 pelo numero2 e atribua o resultado à variável subtracao.
F) Calcule a multiplicação dos dois números e atribua o resultado à variável multiplicacao.
G) Calcule a divisão do numero1 pelo numero2 e atribua o resultado à variável divisao.
H) Calcule o módulo (resto da divisão) do numero1 pelo numero2 e atribua o resultado à variável modulo.
*/

let numero1 = 8
let numero2 = 6
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = (numero1 / numero2).toFixed(2)
let modulo = (numero1 % numero2)

console.log(`Soma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}\nMódulo: ${modulo}`)