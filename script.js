// let idade = 5; criar variavel o let
// console.log(idade) console serve pra imprimir

// let altura =180
// console.log (altura)
// console.log ('Olá Mundo!')

// let alturaadolescente = 180 (let) permite que a variavel altere o valor final
// console.log(alturaadolescente) 

// const altura = 180  a variavel não pode der alterado com a variavel (Const)
// console.log(altura)

// let pessoa = {
//     nome: 'valnei',
//     idade: 40,
//     permissão: true
// };
// console.log (pessoa)             criação do objeto pessoa da linha 14 á 18



// let dados = [true, 'valnei', 'senac', 120]
// console.log (dados.length)
// console.log(dados [3])   Criação de uma alrei



// let corSite = 'azul'
// function resetaCor (cor){
//     corSite = cor

// }
// console.log(corSite)
//     resetaCor ('verde')
// console.log (corSite)   criação de funcão da linha 25 á 32.


// function dizerNome (){
//     console.log('joão')
// }
// dizerNome() criando função da linha 39 á 42



// function multiplicarPorDois (valor){
//     return valor * 7
// }
// let resultado = multiplicarPorDois (5)
// console.log (resultado)                criando função de multiplicar 7x5 = 35 



// let salario = 100
// let desconto = 50                    
// console.log(salario - desconto + salario)   criação do aritimetico da linha 54 á 56


// let valorTecladoGamer = 100
// valorTecladoGamer+=valorTecladoGamer
// console.log (valorTecladoGamer)          outra forma de criação de multiplica / somar / dividir /

// --------------------------------------------------------------------------------------------------
// console.log(1===1)    não estando dentro ele é string, vai aparecer true


// console.log('1'===1) é string entre aspas. devido o numero está entre aspar torna-se falso
// console.log('1'==1)vai ser falso

                    // criando operador ternario
// let pontos = 100
// let tipo = pontos > 100 ? 'premium': 'comum'
// console.log (tipo)


                        // Operadores Logicos //& &

// let maiorDeIdade = true
// let possuiCnh = true
// let podeTrabalhar=(maiorDeIdade&&possuiCnh)

// console.log(podeTrabalhar)  pode trabalhar

// let maiorDeIdade = true
// let possuiCnh = true
// let podeTrabalhar=(maiorDeIdade&&possuiCnh)
// console.log(podeTrabalhar)  não pode trabalhar


// let maiorDeIdade = true
// let possuiCnh = true
// let podeTrabalhar=(maiorDeIdade&&possuiCnh)

// console.log('ele pode?', podeTrabalhar)  Ele pode trabalhar com string entre aspas


// ||operador ou
// console.log (true||false) 

// let maiorDeIdade = true
// let possuiCnh = true
// let podeTrabalhar=(maiorDeIdade||possuiCnh)
// console.log('ele pode?', podeTrabalhar)
// let canditadoRecusado= !podeTrabalhar
// console.log ('candidato recusado', canditadoRecusado)



// let a = 'rosa'
// let b = 'azul'
// let c = a
// a=b
// b=c
// console.log(a)
// console.log(b) troca de a por b criando uma variavel


            // // Colocando pra dar boa noite/boa tarde / bom dia
            //        alterando somente a hora. pode se trocar 18 por 14.10 para mudar a hora e dar boa tarde
// let hora = 18
// if (hora>6&&hora<12){
//     console.log('bom dia!')
// }
// else if (hora>12&&hora<18){
    // console.log ('boa tarde')
// }
// else{
//     console.log ('boa noite')
// }

// questões a resolver
// 
// -------------------------------------------------------------------------
                        // Questionario 1º atividade
//                           Questão 01
// let compra = 60
// if (compra>100)
// console.log('desconto de 20%')

// else if (compra>50)
// console.log('desconto de 10%')
// else

// console.log('não tem desconto')
// ---------------------------------------------------------------
// 
                            // Questão 02

// let idade = 12
// if (idade>12)
// console.log('Menor de idade')

// else if (idade>18)
// console.log('Maior de idade')
// else

// console.log('Adulto')
// --------------------------------------------------------------

//                                  Questão 03


// let temperatura = 60
// if (temperatura<15)
// console.log('Frio')

// else if (temperatura<=30)
// console.log('agradavel')

// else  
// console.log ('quente')

// ----------------------------------------------------------------

//                              Questão 04

// let valor = 71
// if (valor>90)
// console.log('A')

// else if (valor>70 && valor<90 )
// console.log('B')

// else  
// console.log ('C')
// ---------------------------------------------------------------------


//                              Questão 05

// let velocidade = 121
// if (velocidade>120)
//     console.log('Muito Rápido')

// else if (velocidade>80 && velocidade<120 )
//     console.log('Velocidade Adequada')

// else  
//     console.log ('Muito Lenta')

// ------------------------------------------------------------------

//                                  Questão 07

// let Estoque = 6
// if (Estoque<1)
//     console.log('leve')

// else if (Estoque>1 && Estoque<5)
//     console.log('medio')

// else  
//     console.log ('Pesado')

// ----------------------------------------------------------------------------
//                                  Questão 06

// let Peso = 55
// if (Peso<10)
//     console.log('Estoque Baixo')

// else if (Peso>10 && Peso<50)
//     console.log('Estoque medio')

// else  
//     console.log ('Estoque Alto')

// --------------------------------------------------------------------
//                                  Questão 08

// let Altura = 50
// if (Altura<50)
// console.log('Baixa')

// else if (Altura>50 && Altura<150)
// console.log('Média')

// else  
// console.log ('Alta')

// --------------------------------------------------

//                                  Questão 09

// let Filmes = 9
// if (Filmes<10)
// console.log('Infantil')

// else if (Filmes>10 && Filmes<18)
// console.log('Adolescente')

// else  
// console.log ('Adulto')

// ---------------------------------------------------------------
//                                  Questão 10

// let Veiculos = 20
// if (Veiculos<10)
// console.log('Baixo rendimento')

// else if (Veiculos>10 && Veiculos<15)
// console.log('Rendimento médio')

// else  
// console.log ('Alto rendimento')

// -------------------------------------------------------------------------------

let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);




















