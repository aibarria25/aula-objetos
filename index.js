/*
Exercícios de interpretação de código
1- 

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"

2-

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // {nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato) // {nome: 'Juba', idade: 3, raca: 'SRD'}
console.log(tartaruga) // {nome: 'Jubo', idade: 3, raca: 'SRD'}

b)
Os tres pontos copia o objeto mantendo todas as informacos nele. Feita a copia,
pode ser alterado algum dado sem perjudicar o objeto original

3- 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // true
console.log(minhaFuncao(pessoa, "altura")) // undefined

 b)
 O primeiro valor vai ser True porque  backender é uma das chaves
  do objeto pessoa, no entanto o segundo valor vai ser undefined
  porque elena é uma chave.

// Exercícios de escrita de código

//1 - 

const pessoa = {
    nome: "Alejandro Ibarria",
    apelidos:["Ale", "Alejandrito", "Alex"]
}

function mensagem (x){
    console.log(`Eu sou ${x.nome}, mas pode me chamar de: ${x.apelidos[0]}, ${x.apelidos[1]} ou ${x.apelidos[2]}`)
}
console.log(mensagem(pessoa))

//b
const pessoa2 = {...pessoa, apelidos:["niño", "Alex", "Tito"]}
console.log(mensagem(pessoa2)) 



//2- 
const objeto1 = {
    nome: "Alejandro",
    idade: 31,
    profissao: "Analista de TI"
}

const objeto2 = {
    nome: "Dairon",
    idade: 28,
    profissao: "Analista Senior de TI"
}

function funcao1 (objeto) {
    const array = []
    array.push(objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length)
    return array
}

console.log(funcao1(objeto1))
console.log(funcao1(objeto2))
*/

//3-

const carrinho = []

const frutas1 = {
    nome: "banana", 
    disponibilidade: false,
}

const frutas2 = {
    nome: "manga", 
    disponibilidade: true,
}
const frutas3 = {
    nome: "maca", 
    disponibilidade: true,
}

function funcao(fruta){
    carrinho.push(fruta)
}

funcao(frutas1)
funcao(frutas2)
funcao(frutas3)

console.log(carrinho)
