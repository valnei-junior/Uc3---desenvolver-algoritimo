// Questão 1: Manipulação de Arrays e Condicionais
// 1. Crie um array frutas com os valores ["maçã", "banana", "laranja"].
// 2. Utilize o método push para adicionar a fruta "uva" ao final do array.
// 3. Utilize o método shift para remover o primeiro item do array.
// 4. Crie uma função verificarFruta que receba um nome de fruta e verifique se ela
// está no array frutas. Utilize if e else para retornar "Fruta encontrada" ou "Fruta não
// encontrada".
// 5. Exiba o resultado da função verificarFruta para o nome "banana".


// let frutas = ["maçã", "banana", "laranja"];

// frutas.push("uva");
// console.log(frutas); // ["maçã", "banana", "laranja", "uva"]

// let inicio = frutas.shift();
// console.log(inicio);  // "maçã"
// console.log(frutas);  // ["banana", "laranja", "uva"]

// function verificarFruta(nomeFruta) {
//     if (frutas.includes(nomeFruta)) {

//         return "Fruta encontrada";
//     } else {
//         return "Fruta não encontrada";
//     }
// }

// console.log(verificarFruta("banana"));  // "Fruta encontrada"







// ----------------------------------------------------------------------------------------------------------

// Questão 2: Funções e Operadores Lógicos
// 1. Crie uma função calcular que receba três parâmetros: a, b, e operacao. O
// parâmetro operacao pode ser "soma", "subtracao", "multiplicacao" ou "divisao".
// 2. Utilize if, else if, e else para realizar a operação correspondente e retornar o
// resultado.
// 3. Exiba o resultado das operações "soma" e "divisao" para os valores 10 e 2.

// function calcular(a, b, operacao) {
//     let resultado; // Variável para armazenar o resultado da operação

//     // Verifica o tipo de operação e realiza o cálculo correspondente
//     if (operacao === "soma") {
//         resultado = a + b;
//     } else if (operacao === "subtracao") {
//         resultado = a - b;
//     } else if (operacao === "multiplicacao") {
//         resultado = a * b;
//     } else if (operacao === "divisao") {
//         // Verifica se o divisor não é zero para evitar erro de divisão por zero
//                     resultado = a / b;
           
//     } else {
//         // Caso o tipo de operação não seja reconhecido
//         return "Operação não reconhecida.";
//     }

//     return resultado; // Retorna o resultado da operação
// }

// // Exibindo o resultado das operações "soma" e "divisao" para os valores 10 e 2
// console.log("Resultado da soma: " + calcular(20, 5, "soma"));       // 12
// console.log("Resultado da divisão: " + calcular(18, 2, "divisao"));   // 5






// ----------------------------------------------------------------------------------------------------------

// // Questão 3: Manipulação de Arrays e Laços
// // 1. Crie um array numeros com os valores [1, 2, 3, 4, 5].
// // 2. Utilize um for para adicionar 5 a cada elemento do array e armazene os resultados em
// // um novo array numerosAumentados.
// // 3. Exiba o array numerosAumentados no console.


//                                                       // 1. Cria o array com os valores especificados
// let numeros = [1, 2, 3, 4, 5];

//                                                  // 2. Cria um novo array para armazenar os resultados
// let numerosAumentados = [];

//                                                     // 3. Utiliza um loop for para adicionar 5 a cada elemento do array numeros
// for (let i = 0; i < numeros.length; i++) {
//                                                      // Adiciona 5 ao elemento atual e armazena no novo array
//     numerosAumentados.push(numeros[i] + 5);
// }

//                                                         // 4. Exibe o array numerosAumentados no console
// console.log(numerosAumentados); // [6, 7, 8, 9, 10]







// -------------------------------------------------------------------------------------------------------------

// Questão 4: Funções e Switch Case
// 1. Crie uma função classificarNota que receba uma nota (número de 0 a 10) e utilize
// switch case para retornar "Aprovado" para notas 7 e acima e "Reprovado" para notas
// abaixo de 7.
// 2. Exiba o resultado para a nota 8 e para a nota 5.

// function classificarNota(nota) {
//     let resultado;

//     switch (true) {
//         case (nota >= 7):
//             resultado = "Aprovado";
//             break;
//         case (nota < 7):
//             resultado = "Reprovado";
//             break;
//         default:
//             resultado = "Nota inválida";
//             break;
//     }

//     return resultado;
// }

// // Exibindo o resultado para a nota 8 e para a nota 5
// console.log("Nota 8: " + classificarNota(8));  // Aprovado
// console.log("Nota 5: " + classificarNota(5));  // Reprovado







// -------------------------------------------------------------------------------------------------
// Questão 5: Funções e Condicionais com Arrays
// 1. Crie um array numeros com os valores [5, 10, 15, 20].
// 2. Crie uma função verificarNumero que receba um número e retorne "Menor que 10"
// se o número for menor que 10, "Entre 10 e 20" se o número estiver entre 10 e 20, e
// "Maior que 20" se for maior que 20.
// 3. Utilize um for para percorrer o array numeros e exibir a classificação de cada número
// utilizando a função verificarNumero.

// 1. Cria o array com os valores especificados
// let numeros = [5, 10, 15, 20];

// // 2. Cria a função verificarNumero para classificar o número
// function verificarNumero(num) {
//     if (num < 10) {
//         return "Menor que 10";
//     } else if (num >= 10 && num <= 20) {
//         return "Entre 10 e 20";
//     } else {
//         return "Maior que 20";
//     }
// }

// // 3. Utiliza um loop for para percorrer o array numeros e exibir a classificação
// for (let i = 0; i < numeros.length; i++) {
//     let classificacao = verificarNumero(numeros[i]);
//     console.log(`Número ${numeros[i]}: ${classificacao}`);
// }







// ------------------------------------------------------------------------------------------

// Questão 6: Condicionais e Operadores Aritméticos
// 1. Crie uma variável idade e atribua um valor.
// 2. Utilize if para verificar se a idade é maior ou igual a 18 e menor que 65. Se for o caso,
// exiba "Adulto" no console. Caso contrário, exiba "Não adulto".
// 3. Utilize um operador ternário para realizar a mesma verificação e exiba o resultado no
// console.

// let idade = 25; // Você pode alterar o valor para testar diferentes idades

// // Utilizando if
// if (idade >= 18 && idade < 65) {
//     console.log("Adulto");
// } else {
//     console.log("Não adulto");
// }

// 
// const resultado = (idade >= 18 && idade < 65) ? "Adulto" : "Não adulto";
// console.log(resultado);








// -------------------------------------------------------------------------------------


// Questão 7: FizzBuzz Simples
// 1. Crie uma função fizzBuzz que receba um número n e retorne um array com os
// números de 1 a n, substituindo múltiplos de 3 por "Fizz" e múltiplos de 5 por "Buzz".
// Para múltiplos de ambos, use "FizzBuzz".
// 2. Utilize um loop for para construir o array e if e else para verificar as condições.


function fizzBuzz(n) {
   
   const result = [];
   
   
   for (let i = 1; i <= n; i++) {
     
     if (i % 15 === 0) {
       result.push("FizzBuzz");
     }
    
     else if (i % 3 === 0) {
       result.push("Fizz");
     }
    
     else if (i % 5 === 0) {
       result.push("Buzz");
     }
     
     else {
       result.push(i);
     }
   }
      
   return result;
 }
 console.log (fizzBuzz(15));