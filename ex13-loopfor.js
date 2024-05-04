/*
A) Escolha um número, por exemplo, 7, para o qual você deseja exibir a tabuada.
B) Use um loop for para calcular e exibir os resultados da multiplicação desse número pelos números de 1 a 10.
C) Exiba cada multiplicação no formato "[Número] x [Outro número] = [Resultado]".
D) Repita o processo para todos os números de 1 a 10.
E) Ao final, terá exibido a tabuada completa do número escolhido.
*/

const numero = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}