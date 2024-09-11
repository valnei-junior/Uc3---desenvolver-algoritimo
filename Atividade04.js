// Atividade 1: Verificação de Idade

// Contexto: João é o organizador de uma festa e precisa verificar se as pessoas que entram têm
// 18 anos ou mais.

// Questão: Crie uma função que, dada uma lista de idades, use um loop for para verificar se
// todas as pessoas têm 18 anos ou mais. Se sim, retorne "Todos podem entrar". Se não, retorne
// "Alguém não pode entrar".


// function verificarIdade(listaidade) {
//     for(let idade of listaidade){
//     if (idade < 18) {
//         return 'Alguém nao pode entrar';
//     } 
// }
//         return 'Todos podem entrar';

// }
//     const idades=[19,20]
//     console.log(verificarIdade(idades))

// --------------------------------------------------------------------

// Atividade 2: Contador de Números Pares

// Contexto: Maria quer contar quantos números pares existem entre 1 e 50.

// Questão: Crie uma função que use um loop while para contar quantos números pares
// existem entre 1 e 50. Retorne esse número.

// function ContadorNumerosPares () {
//  let conta= 0;
//  let i = 1;

//  while (i<=50){
//     if (i % 2 ===0){
//         conta++;
//     }
//     i++;
//  }
//     return conta ;
// }
// console.log (ContadorNumerosPares ()) 



// ------------------------------------------------------------------------------------------------

// Atividade 3: Classificação de Cores

// Contexto: Ana precisa categorizar cores de acordo com sua intensidade.

// Questão: Use switch case para classificar uma cor baseada em um número de 1 a 3. Se 1,
// classifique como "Cor Clara". Se 2, "Cor Média". Se 3, "Cor Escura". Qualquer outro número
// deve retornar "Cor Desconhecida".
// 

// function definirCor (cores){


//     switch (cores){
//         case 1:
//             return('Cor clara')
//             break;
//         case 2:
//             return('Cor média')
//             break;
//         case 3:
//             return('Cor escura')
//             break;
//         default:
//             return ('Cor desconhecida')
//             break;
//     }
// }
// console.log (definirCor (1))





// ------------------------------------------------------------------------------------------
// Atividade 4: Validação de Senha

// Contexto: Carla precisa validar a segurança de senhas inseridas por usuários.

// Questão: Crie uma função que use switch case para validar uma senha. Se a senha tiver
// menos de 8 caracteres, retorne "Senha Fraca". Se tiver entre 8 e 12 caracteres, retorne "Senha
// Média". Se tiver mais de 12, retorne "Senha Forte".

// function ValidarSegurança (senha){

//     const comprimento = senha.length
//         switch (true){
//             case (comprimento <8):
//                 return('Senha Fraca')
//                 break;
//             case (comprimento >8 && comprimento <12):
//                 return('Senha Média')
//                 break;
//             case  (comprimento >12):
//                 return('Senha forte')
//                 break;
//                    }
//     }


//     console.log (ValidarSegurança ('123456789101112'))




// -------------------------------------------------------------------------------------

// Atividade 5: Classificação de Notas

// Contexto: Isabela quer classificar notas escolares de acordo com a pontuação.

// Questão: Use switch case para classificar uma nota de 0 a 100. Se a nota for maior que 90,
// classifique como "A". Se entre 80 e 89, "B". Se entre 70 e 79, "C". Se entre 60 e 69, "D". Se
// menor que 60, "F".



// let Nota = 50
//         switch (true){
//     case Nota >90:
//         console.log('Classificação A')
//         break;
//     case Nota >80 && Nota <89:
//         console.log('Classificação B')
//         break;
//     case Nota >70 && Nota <79:
//         console.log('Classificação C')
//         break;
//     case Nota >60 && Nota <69:
//         console.log('Classificação D')
//         break;
//     case Nota <60:
//         console.log('Classificação F')
//         break;
       
// }




// Atividade 6: FizzBuzz Avançado

// Contexto: Gabriel quer criar uma versão avançada do FizzBuzz.

// Questão: Crie uma função que use um loop for para percorrer de 1 a 100. Se o número for
// divisível por 2, 3 e 5, imprima "FizzBuzzBoom". Se for divisível por 2 e 3, imprima "FizzBuzz".
// Se for divisível por 3 e 5, imprima "BuzzBoom". Se for divisível por 2 e 5, imprima "FizzBoom".
// Se for divisível apenas por 2, 3, ou 5, imprima "Fizz", "Buzz", ou "Boom", respectivamente.
// Caso contrário, imprima o número.






// function fizzBuzz(){
// for (let  numero = 1 ; numero <=100 ; numero++){
//     if(numero % 2 === 0  && numero % 3 === 0 && numero % 5 ===0){
//         console.log ('FizzBuzzBoom')
//     }else if (numero % 2 === 0 && numero % 3 ===0){
//         console.log ('fizzbuzz')
//     }if (numero % 3 === 0 && numero % 5 ===0){
//         console.log ('buzzBoom')
//     } else if (numero % 2 === 0 && numero % 5 ===0){
//         console.log ('fizzBoom')
//     }if (numero % 2 === 0){
//         console.log ('fizz')
//     }if (numero % 3 ===0){
//         console.log ('buzz')
//     }if (numero % 5 ===0){
//         console.log ('Boom')
//     }else
//     console.log ()


// }
// }
// console.log(fizzBuzz())

// -----------------------------------------------------------------------------------
//                                         Atividade de 10 questões

// 1. Contar até 10 com for
// Crie um loop for que conte de 1 até 10 e exiba cada número no console

// for (let i =0; i<10;i++)
//         console.log (i)
// // 
// ----------------------------------------------------------
// 2. Contar até 10 com while
// Crie um loop while que conte de 1 até 10 e exiba cada número no console

// let i = 1 
// while (i >= 10){
//     if (i % 2 ==0){
//    console.log (i)
// }
// i++;
// }

// -----------------------------------------------------------

// 3. Somar números de 1 a 5 com for
// Crie um loop for que some os números 
// de 1 a 5 e exiba a soma total.

// for (let i = 1; i< 5; i++)
//     console.log (i)

// --------------------------------------------------------
// 

// 4. Somar números de 1 a 5 com while
// Crie um loop while que some os números
//  de 1 a 5 e exiba a soma total

// let i = 1 
// while (i < 5){
//     if (i % 2 ==0){
//    console.log (i)
// }
// i++;
// }


// ------------------------------------------------

// 5. Multiplicar números de 1 a 4 com for

// let produto = 1
// for (let i = 1; i<=4 ; i++){
//     produto *= i
// }
//     console.log (produto);

// ------------------------------------------------------

// 6. Multiplicar números de 1 a 4 com while
// Crie um loop while que multiplique os números de 1 a 4 e exiba o resultado.

// let i =1
// let produto = 1
// while (i <=4){
//             produto *=i
//     i++;
//     }
//     console.log (produto)


// -------------------------------------------------------------


// 7. Verificar paridade com for
// Crie um loop for que percorre os números 
// de 1 a 10 e exibe "Par" se o número for par e
// "Ímpar" se o número for ímpar.


// for (let i =1; i<=10;i++){                   
//     if (i %2 ===0){
//         console.log(i, 'par')
//     }
//     else {
//         console.log(i, 'impar')

//     }
// }                          





// ----------------------------------------------------------------------------

// 8. Verificar paridade com while
// Crie um loop while que percorre os números de 1 a 10 e exibe "Par" se o número for par e
// "Ímpar" se o número for ímpar.

// let i = 1                     
// let numeros = 0
// while (i <= 10){
//     if (i % 2 ===0){
//         console.log (i, 'par')
// }
//     else {
//         console.log(i,'impar')
//     }

//     i++;
// }


// 9. FizzBuzz com for
// Crie um loop for que percorre os números de 1 a 20 e exibe:
// ● "Fizz" se o número for múltiplo de 3,
// ● "Buzz" se o número for múltiplo de 5,
// ● "FizzBuzz" se o número for múltiplo de 3 e 5,
// ● Caso contrário, exiba o número.


// for (let i = 1; i <= 20; i++) {

//     let numero = ''

//     if (i % 3 === 0) numero += 'fizz'
//     if (i % 5 === 0) numero += 'buzz'
//        console.log(numero || i)
// }




// 10. Escolher a operação com switch
// Crie uma função que usa um switch para retornar
//  uma mensagem baseada na operação
// passada como argumento:
// ● "soma" para adição,
// ● "subtração" para subtração,
// ● "multiplicação" para multiplicação,
// ● "divisão" para divisão.

// let  operacao = 'calculos'

// switch (operacao){
//     case 'soma':
//         console.log('para adicação');
//         break;
//     case 'subtração':
//         console.log('para subtração');
//         break;
//     case 'multiplicação':
//         console.log('para multiplicação');
//         break;
//         case 'divisão':
//             console.log('para divisão');
//         break;  
//     default:
//         console.log ('Calculo não reconhecido');
//         break;
// }

