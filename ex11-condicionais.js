/*
A) Crie uma variável chamada genero e atribua a ela um dos seguintes valores: "ação", "comédia", "terror", "ficção" ou "aventura". Este valor representará o gênero de filme que o aluno gosta.
B) Use condicionais if, else if e else para determinar o gosto do aluno com base no valor da variável genero.
C) Se o valor for "ação", exiba a mensagem: "Você gosta de filmes de ação! Explosões e perseguições são incríveis."
D) Se o valor for "comédia", exiba a mensagem: "Você gosta de filmes de comédia! Rir é o melhor remédio."
E) Se o valor for "terror", exiba a mensagem: "Você gosta de filmes de terror! Prepare-se para muitos sustos."
F) Se o valor for "ficção", exiba a mensagem: "Você gosta de filmes de ficção científica! Viaje para outros mundos e realidades."
G) Se o valor for "aventura", exiba a mensagem: "Você gosta de filmes de aventura! Explore lugares incríveis e enfrente desafios emocionantes."
H) Se o valor não corresponder a nenhum dos gêneros acima, exiba a mensagem: "Não sei qual é o seu gênero de filme favorito."
*/

let genero = "aventura"

if (genero === "ação") {

    console.log("Você gosta de filmes de ação! Explosões e perseguições são incríveis.")

} else if (genero === "comédia") {

    console.log("Você gosta de filmes de comédia! Rir é o melhor remédio.")

} else if (genero === "terror") {

    console.log("Você gosta de filmes de terror! Prepare-se para muitos sustos.")

} else if (genero === "ficção") {

    console.log("Você gosta de filmes de ficção científica! Viaje para outros mundos e realidades.")

} else if (genero === "aventura") {

    console.log("Você gosta de filmes de aventura! Explore lugares incríveis e enfrente desafios emocionantes.")

} else {

    console.log("Não sei qual é o seu gênero de filme favorito.")
}

