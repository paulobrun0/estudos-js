const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // verifica se é um valor inteiro
console.log(Number.isInteger(peso2)) // verifica se é um valor inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // limita o numero de casas decimais
console.log(media.toString()) // converte em string
console.log(media.toString(2)) // converte em binario
console.log(typeof media) // verifica qual o tipo de variavel 