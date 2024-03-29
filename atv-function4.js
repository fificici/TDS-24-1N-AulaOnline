// a)

function numeros (numero1, numero2) {
    let soma = numero1 + numero2
    console.log(soma)
}

numeros(2, 3)

// b)

function numeros2 (numero1, numero2) {
    let comparador = numero1 >= numero2
    console.log(comparador)
}

numeros2(3, 2)

// c)

function numeros3 (numero) {
    let par = numero%2 == 0
    console.log(par)
}

numeros3(4)

// d)

function mensagem (linha) {
    let resposta = linha.lenght
    console.log (linha.toUpperCase())
}

mensagem('oi')