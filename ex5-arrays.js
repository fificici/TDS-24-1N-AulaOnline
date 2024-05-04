/*
A) Crie um array chamado nomes que contenha pelo menos três nomes em formato de strings, incluindo espaços em branco no início e/ou no final, e letras maiúsculas e minúsculas misturadas.
B) Transforme todos os nomes em letras minúsculas usando o método toLowerCase().
C) Transforme todos os nomes em letras maiúsculas usando o método toUpperCase().
D) Remova espaços em branco no início e no final de todos os nomes usando o método trim().
E) Verifique se cada nome contém a letra 'a' usando o método includes(caracteres).
F) Substitua todas as ocorrências da letra 'a' pelo símbolo '#' usando o método replaceAll(chars1, chars2).
*/

let nomes = ['  Felipe  ', '     Rafaella    ', '      Júlia   ']

let minuscula = nomes.toLowerCase()
let maiusculas = nomes.toUpperCase()
let removerEspaço = nomes.trim()
let verificar = nomes.includes('a')
let substituir = nomes.replaceAll('a', '#')

console.log(minuscula)
console.log(minuscula)
console.log(removerEspaço)
console.log(verificar)
console.log(substituir)