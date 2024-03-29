let textoDoUsuario = 'Cenouras crescem na terra'

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a) toda vez que a palavra cenoura for digitada terá a resposta ''true'' mesmo se for em maiuscúlo porque tem o toLowerCase, se não tiver vai ser respondido ''false''.
// b) true, true e true.


