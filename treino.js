
//Efetuar a leitura de um n´umero real e apresentar o resultado do quadrado desse numero.

let num = 100
const quadrado = num * num

//Ler uma temperatura em graus Celsius e apresent´ a-la convertida em graus Fahrenheit.
//A f ´ ormula de convers˜ao ´ e: F = C(9:0=5:0)+32:0, sendo F a temperatura em Fahrenheit
//e C a temperatura em Celsius.

console.log('O numero é: ' + num + ' e o quadrado de:' + num +' é: ' + quadrado)
let Celsius = 30
const conversao = Celsius * (9.0/5.0) + 32.0
let Fahrenheit = conversao
console.log(Celsius + ' Graus Celsius convertido para Fahrenheit é: ' + Fahrenheit )

//Ler um n´umero e retorne seu antecessor e seu sucessor.

let n1 = 10
let n2 = 10 - 1
let n3 = 10 + 1
console.log('o numero antecessor de ' + n1 + ' é: ' + n2)
console.log('o numero sucessor de ' + n1 + ' é: ' + n3)

//Ler o tamanho do lado de um quadrado e imprimir sua ´area.

let lado = 5
const area = lado * lado

console.log('se lateral do quadrado é ' + lado + ' entao sua area é: ' + area)

//Efetuar a leitura de tres valores e apresentar como resultado final a soma dos quadrados dos tres valores lidos.

let num1 = 3
let num2 = 4
let num3 = 5

let soma = num1 * num1 + num2 * num2 + num3 * num3
let resultado = soma

console.log('A soma dos quadrados dos tres valores lidos é: ' + resultado)

//Ler quatro notas e calcular a media aritmetica obtida

let nota1 = 10
let nota2 = 7
let nota3 = 4
let nota4 = 7

let soma1 = nota1 + nota2 + nota3 + nota4

let media = soma1 / 4

console.log('A media do aluno X é: ' + media)

//Receber o salario de um funcionario, calcular e mostrar seu novo salario, sabendo que ele recebeu um aumento de 25%.

let salario = 998
let aumento = 1.25
let novosalario = salario * 1.25

console.log('Seu novo salario é: ' + novosalario)