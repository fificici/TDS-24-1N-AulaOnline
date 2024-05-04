/*
A) Crie um objeto chamado aluno com as seguintes propriedades:
nome (string): O nome do aluno.
idade (number): A idade do aluno.
curso (string): O curso que o aluno está frequentando.
B) Atribua valores fictícios para essas propriedades do objeto.
C) Exiba as informações do aluno no console, incluindo seu nome, idade e curso.
*/

let aluno = {
    Nome: 'Felipe',
    Idade: 18,
    Curso: 'TDS'
}

console.log(aluno)

/*
A) Atualize o objeto aluno adicionando uma nova propriedade chamada 'notas', um array vazio que será usado para registrar as notas do aluno (para criar um array vazio é só não colocar nada dentro de []).
B) Adicione pelo menos três notas fictícias ao array notas.
C) Calcule a média das notas do aluno (para calcular a média, fazemos a soma das notas dividida pelo quantidade de itens no array).
D) Exiba as informações do aluno no console, incluindo seu nome, idade, curso, notas e média.
*/

aluno = {
    Nome: 'Felipe',
    Idade: 18,
    Curso: 'TDS',
    Notas: [10, 7, 9]
}

let soma = 0
for (let i = 0; i < aluno.Notas.length; i++) {
    soma += aluno.Notas[i]
}

let media = soma / aluno.Notas.length

aluno = {
    Nome: 'Felipe',
    Idade: 18,
    Curso: 'TDS',
    Notas: [10, 7, 9],
    Média: media.toFixed(2)
}

console.log(aluno)

/*
A) Atualize o objeto aluno adicionando uma nova propriedade chamada 'endereco', que será um objeto com as seguintes propriedades:
B) país (string): O nome do país onde o aluno mora
C) anoNaEscola: O ano (ou série) em que o aluno está na escola
D) cidade (string): A cidade onde o aluno mora.
E) Exiba as informações completas do aluno, incluindo seu nome, idade, curso e todas as propriedades do objeto endereco (rua, número, cidade e CEP) no console.
*/

aluno = {
    Nome: 'Felipe',
    Idade: 18,
    Curso: 'TDS',
    Notas: [10, 7, 9],
    Média: media.toFixed(2),
    Endereço: {
        Pais: 'Brasil',
        AnoNaEscola: 'Primeiro',
        Cidade: 'São Leopoldo'
    }
}

console.log(aluno)