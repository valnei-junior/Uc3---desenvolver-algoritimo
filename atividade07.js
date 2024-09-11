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

// // Utilizando operador ternário
// const resultado = (idade >= 18 && idade < 65) ? "Adulto" : "Não adulto";
// console.log(resultado);








// -------------------------------------------------------------------------------------


// Questão 7: FizzBuzz Simples
// 1. Crie uma função fizzBuzz que receba um número n e retorne um array com os
// números de 1 a n, substituindo múltiplos de 3 por "Fizz" e múltiplos de 5 por "Buzz".
// Para múltiplos de ambos, use "FizzBuzz".
// 2. Utilize um loop for para construir o array e if e else para verificar as condições.


// function fizzBuzz(n) {
//     // Cria um array vazio que será preenchido com os resultados
//     const result = [];
    
//     // Loop de 1 até n
//     for (let i = 1; i <= n; i++) {
//       // Verifica se i é múltiplo de 15 (ou seja, múltiplo de 3 e 5)
//       if (i % 15 === 0) {
//         result.push("FizzBuzz");
//       }
//       // Verifica se i é múltiplo de 3
//       else if (i % 3 === 0) {
//         result.push("Fizz");
//       }
//       // Verifica se i é múltiplo de 5
//       else if (i % 5 === 0) {
//         result.push("Buzz");
//       }
//       // Se nenhuma das condições acima for verdadeira, adiciona o número i
//       else {
//         result.push(i);
//       }
//     }
    
//     // Retorna o array resultante
//     return result;
//   }
//   console.log (fizzBuzz(15)); /*resultado final*/






// ---------------------------------------------------------------------------------------------


// Questão 8: Manipulação de Arrays com Splice e Length
// 1. Crie um array tarefas com os valores ["estudar", "limpar", "comprar"].
// 2. Utilize splice para adicionar "exercitar" na segunda posição do array e remover o item
// na terceira posição.
// 3. Exiba o tamanho do array e o array final no console.


// // 1. Criação do array tarefas
// let tarefas = ["estudar", "limpar", "comprar"];

// // 2. Utilização do splice para adicionar "exercitar" na segunda posição e remover o item na terceira posição
// tarefas.splice(2, 1, "exercitar"); // Adiciona "exercitar" na segunda posição e remove o item na terceira posição

// // 3. Exibindo o tamanho do array e o array final no console
// console.log("Tamanho do array:", tarefas.length);
// console.log("Array final:", tarefas);


// --------------------------------------------------------------------------------------------------------------


// Questão 9: Operadores Aritméticos e Funções
// 1. Crie uma função calcularMedia que receba duas notas e retorne a média dessas
// notas.
// 2. Utilize a função para calcular a média das notas 7 e 9 e exiba o resultado no console.

// // 1. Criação da função calcularMedia
// function calcularMedia(nota01, nota02) {
//   // Calcula a média das duas notas
//   return (nota01 + nota02) / 2;
// }

// // 2. Utilização da função para calcular a média das notas 7 e 9
// let media = calcularMedia(7, 9);

// // Exibindo o resultado no console
// console.log("A média das notas é:", media);





// -------------------------------------------------------------------------------------------------




// Questão 10: Manipulação de Arrays e Laços
// 1. Crie um array valores com os valores [5, 10, 15, 20].
// 2. Utilize um while para dividir cada valor por 2 e armazenar os resultados em um novo
// array valoresDivididos.
// 3. Exiba o array valoresDivididos no console.

// // 1. Criação do array valores
// let valores = [5, 10, 15, 20];

// // Array para armazenar os resultados das divisões
// let valoresDivididos = [];

// // Índice para percorrer o array valores
// let i = 0;

// // 2. Utilização do loop while para dividir cada valor por 2 e armazenar os resultados
// while (i < valores.length) {
//   // Dividir o valor atual por 2 e armazenar no array valoresDivididos
//   valoresDivididos.push(valores[i] / 2);
//   // Incrementar o índice para o próximo valor
//   i++;
// }

// // 3. Exibindo o array valoresDivididos no console
// console.log("Array valoresDivididos:", valoresDivididos);


// -------------------------------------------------------------------------------------

// Questão 11: Operadores Aritméticos e Condicionais
// 1. Solicite ao usuário dois números através de prompt e armazene-os em variáveis.
// 2. Crie uma função compararSoma que receba os dois números, calcule a soma e retorne
// uma mensagem se a soma é maior que 20 ou não.
// 3. Exiba a mensagem com alert.


// 1. Solicitação de dois números ao usuário
let numero1 = parseFloat(prompt("número 01"));
let numero2 = parseFloat(prompt("número 02"));


// 2. Criação da função compararSoma
function compararSoma(num1, num2) {
  // Calcula a soma dos dois números
  let soma = num1 + num2;

    return soma>20? 'maior que 20': 'menor que 20'
}

// 3. Exibindo a mensagem com alert
alert(compararSoma(numero1, numero2));

// ----------------------------------------------------------------------------------------



// Questão 12: Laços e Operadores Booleanos
// 1. Solicite ao usuário um número através de prompt e crie um array numeros com todos
// os números de 1 até o número fornecido manualmente.
// 2. Utilize um for para percorrer o array e exiba com alert se cada número até o número
// digitado é múltiplo de 3.










// Questão 13: Números e Seus Quadrados
// 1.Solicite ao usuário um número através de prompt e crie um array numeros com todos os
// números de 1 até o número fornecido.
// 2.Use um for para percorrer o array e exiba com alert o número e seu quadrado.










// Questão 14: Funções e Condicionais
// 1. Crie uma função verificarValor que receba um número fornecido pelo usuário
// através de prompt e determine se ele é positivo, negativo ou zero.
// 2. Exiba o resultado usando alert.












// Questão 15: Números Pares e Ímpares
// 1.Solicite ao usuário um número através de prompt e crie um array numeros com todos os
// números de 1 até o número fornecido.
// 2.Use um for para percorrer o array e exiba com alert se cada número é par ou ímpar.












// Questão 16: Funções e Operadores Aritméticos
// 1. Solicite ao usuário dois números e uma operação matemática (soma, subtração,
// multiplicação ou divisão) através de prompt.
// 2. Crie uma função operacaoMatematica que realize a operação matemática
// correspondente.
// 3. Exiba o resultado com alert.








// Questão 17: Funções e Condicionais
// 1. Solicite ao usuário um número através de prompt e crie uma função
// verificarParidade que determine se o número é par ou ímpar.
// 2. Exiba o resultado com alert.












// Questão 18: Laços e Condicionais
// 1. Solicite ao usuário um número através de prompt e crie um array numeros com todos
// os números de 1 até o número fornecido.
// 2. Use um for para percorrer o array e exiba com alert se cada número é maior que 10.