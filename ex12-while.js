/*
A) Crie uma variável chamada contagem e atribua a ela um valor inicial, por exemplo, 10.
B) Use um loop while para criar uma contagem regressiva a partir do valor inicial. O loop deve continuar enquanto o valor da contagem for maior ou igual a 0.
C) Em cada iteração do loop, exiba o valor atual da contagem no console e, em seguida, diminua a contagem em 1.
D) Continue o loop até que a contagem chegue a 0.
E) Após o término da contagem regressiva, exiba uma mensagem no console, como "Contagem regressiva concluída!".
*/


let contagem = 10


while (contagem >= 0) {
    console.log(contagem)
    contagem--
}


console.log("Contagem regressiva concluída!")