const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // pega os numeros que estão na posição 0 e 3 do array
console.log(valores[4])

valores[4] = 10 // adiciona um quarto elemento no array
console.log(valores)
console.log(valores.length) // verifica quantos elementos tem no array

valores.push({id: 3}, false, null, 'test')
console.log(valores)

console.log(valores.pop()) // saca o ultimo valor do array
delete valores[0] // deleta o primeiro elemento do array

console.log(typeof valores) // verifica o tipo de dado