const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`    
console.log(concatenacao, template)

// expressoes....
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // transforma as letras em maiuscula
console.log(`Ei... ${up('cuidado')}!`) // imprime a constante UP em letras maiuscula