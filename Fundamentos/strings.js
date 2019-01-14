const escola = "cod3r"

console.log(escola.charAt(4)) // pega o 4° caractere começando do 0
console.log(escola.charCodeAt(3)) // pega o valor de 3 na tabela unicode
console.log(escola.indexOf('3')) // verifica se existe o valor 3 na constante e retorna sua posição


console.log(escola.substring(1)) // imprime os caracteres da constante começando pelo indice 1
console.log(escola.substring(0, 3)) // imprime 3 valores da string começando pelo 0

console.log('Escola '.concat(escola).concat("!")) // concatenando String
console.log(escola.replace(3, 'e')) // substitui o indice 3 pela letra E

console.log('ana,maria,pedro'.split(',')) // converte os valores da string em um array