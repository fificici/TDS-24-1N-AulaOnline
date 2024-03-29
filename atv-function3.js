// a)

function phrase () {
    let name = 'Felipe'
    let age = 18
    let city = 'São Leopoldo'
    let job = 'estudante'
    console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${job}.`)
}

phrase()

// b)

function frase (nome, idade, cidade, profissão) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}

frase('Felipe', 18, 'São Leopoldo', 'estudante')