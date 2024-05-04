/*
A) Crie uma função que calcule a área de um quadrado.
B) Crie uma função que calcule a área de um retângulo.
C) Crie uma função que calcule a área de um triângulo.
*/


function quadrado (lado) {
    let quadrado = lado * lado
    console.log(quadrado)
}

quadrado(2)

function retangulo (base, altura) {
    let retangulo = base * altura
    console.log(retangulo)
}

retangulo(2, 3)

function triangulo (base, altura) {
    let triangulo = (base * altura) / 2
    console.log(triangulo)
}

triangulo(2, 3)