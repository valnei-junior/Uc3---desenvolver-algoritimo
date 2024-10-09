// 1. Manipulação de Arrays para Ordenação
// ● Dado o array let numeros = [34, 7, 23, 32, 5, 62], faça as seguintes
// tarefas:
// ○ Adicione os números 9 e 12 ao final do array.
// ○ Adicione 1 ao início do array.
// ○ Ordene o array de forma crescente.
// ○ Inverta a ordem do array.
// ● No final, imprima o array resultante.

let numeros = [34, 7, 23, 32, 5, 62];


numeros.push(9,12);
console.log(numeros);

numeros.unshift(1);
console.log(numeros);

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.reverse();
console.log("Array resultantes", numeros);




// ---------------------------------------------------------------------------------------------

// 2. Concatenando e Formatando Strings
// ● Considere duas variáveis, let saudacao = "Olá" e let nome = "Mundo". Faça
// as seguintes tarefas:
// ○ Concatene essas duas variáveis em uma única string.
// ○ Transforme a string resultante para que todas as letras fiquem em maiúsculas.
// ○ Depois, extraia apenas a palavra "Mundo" da string concatenada.
// ● Por fim, imprima o resultado da extração.

let saudacao = "Olá"
let nome = "Mundo"

let frase = `${saudacao} ${nome}`;
console.log(frase);


let maiusculo = frase.toUpperCase();
console.log(maiusculo);

let extracao = frase.split ('')[1];
console.log(frase);





// ----------------------------------------------------------------------------------------------

// 3. Cálculo de Soma e Filtro de Números
// ● Dado o array de números let valores = [10, 25, 30, 45, 50, 60], execute
// as seguintes etapas:
// ○ Filtre apenas os números maiores que 30.
// ○ Some todos os números filtrados.
// ○ Verifique se o valor somado é um número (utilize isNaN()).
// ● Mostre no console o valor filtrado, somado e a confirmação de que é um número.



// ○ Filtre apenas os números maiores que 30.
let valores = [10, 25, 30, 45, 50, 60]

// ○ Filtre apenas os números maiores que 30.
let filtrados = valores.filter(valor => valor > 30);
console.log("Números filtrados:", filtrados);

// Somando os números filtrados
let soma = filtrados.reduce((acc, valor) => acc + valor, 0);
console.log("Soma dos números filtrados:", soma);

// ○ Verifique se o valor somado é um número (utilize isNaN())
let isNumero = !isNaN(soma);
console.log("A soma é um número?", isNumero);






// ----------------------------------------------------------------------------------------------------

// 4. Usando map() e reduce() para Dobrar e Somar Valores
// ● Dado o array let numeros = [1, 2, 3, 4, 5], faça o seguinte:
// ○ Use map() para criar um novo array que contenha o dobro de cada valor.
// ○ Reduza o novo array para obter a soma de todos os seus elementos.
// ● Imprima o array dobrado e o resultado da soma.

let numeros = [1, 2, 3, 4, 5]
// ○ Use map() para criar um novo array que contenha o dobro de cada valor.
let dobrados = numeros.map(function(numero) {
    return numero * 2;
    });
    console.log(dobrados);

// ○ Reduza o novo array para obter a soma de todos os seus elementos.
let soma = dobrados.reduce(function(acumulador, numero) {
        return acumulador + numero;
        }, 0);
        console.log(soma); 




// ---------------------------------------------------------------------------------------------


// 5. Contando Caracteres e Dividindo Frases
// ● Dada a string let frase = "A programação é divertida e desafiadora.",
// execute as seguintes tarefas:
// ○ Conte quantos caracteres essa frase possui (incluindo espaços).
// ○ Divida a frase em palavras separadas.
// ○ Converta todas as palavras para letras maiúsculas.
// ○ Junte essas palavras em uma nova string, separadas por hífens (-).
// ● Imprima a frase resultante.

let frase = "A programação é divertida e desafiadora.";

// Contando quantos caracteres a frase possui (incluindo espaços)
let contadorCaracteres = frase.length;
console.log("Número de caracteres:", contadorCaracteres);

// Dividindo a frase em palavras
let palavras = frase.split(" ");

// Convertendo todas as palavras para letras maiúsculas
let palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase());

// Juntando as palavras em uma nova string, separadas por hífens
let fraseResultante = palavrasMaiusculas.join("-");

// Imprimindo os resultados

console.log("Frase resultante:", fraseResultante);


// ------------------------------------------------------------------------------------------------


// 6. Manipulando Arrays com splice() e slice()
// ● Dado o array let frutas = ["Maçã", "Banana", "Laranja", "Manga",
// "Uva"]:
// ○ Remova "Laranja" do array e substitua por "Abacaxi".
// ○ Extraia apenas as primeiras três frutas do array usando slice().
// ○ Adicione "Melancia" ao final do novo array extraído.
// ● Imprima o array modificado e o array extraído.


let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"]; // Corrigido aqui

// Removendo "Laranja" e substituindo por "Abacaxi"
frutas.splice(frutas.indexOf("Laranja"), 1, "Abacaxi");

// Extraindo as primeiras três frutas do array
let frutasExtraidas = frutas.slice(0, 3);

// Adicionando "Melancia" ao final do novo array extraído
frutasExtraidas.push("Melancia");

// Imprimindo o array modificado e o array extraído
console.log("Array modificado:", frutas);
console.log("Array extraído:", frutasExtraidas);

// --------------------------------------------------------------------------------------------


// 7. Verificação de Índices e Modificação de Valores
// ● Considere o array let nomes = ["Ana", "Carlos", "João", "Maria"]:
// ○ Descubra o índice de "Carlos" no array.
// ○ Remova "João" usando splice() e substitua por "José".
// ○ Adicione "Fernanda" ao início e "Rafael" ao final do array.
// ● Imprima o índice de "Carlos" e o array resultante.

// Definindo o array
let nomes = ["Ana", "Carlos", "João", "Maria"];

// Descobrindo o índice de "Carlos"
let indiceCarlos = nomes.indexOf("Carlos");
console.log("Índice de Carlos:", indiceCarlos);

// Removendo "João" e substituindo por "José"
let indexJoao = nomes.indexOf("João");
if (indexJoao !== -1) {
    nomes.splice(indexJoao, 1, "José");
}

// Adicionando "Fernanda" ao início e "Rafael" ao final do array
nomes.unshift("Fernanda");
nomes.push("Rafael");

// Imprimindo  o array resultante

console.log("Array resultante:", nomes);


// ----------------------------------------------------------------------------------------
// 8. Transformação de Arrays com map(), filter() e reduce()
// ● Dado o array de preços let precos = [15.5, 10.0, 20.75, 30.0, 8.0]:
// ○ Use map() para adicionar 10% a cada preço.
// ○ Filtre os preços que sejam maiores que 20.
// ○ Some todos os preços filtrados.
// ● Mostre o array com os preços aumentados, o array filtrado, e o total somado.

// let precos = [15.5, 10.0, 20.75, 30.0, 8.0];

// // Adicionando 10% a cada preço
// let precosAumentados = precos.map(preco => preco * 1.1);
// console.log("Preços aumentados:", precosAumentados);

// // Filtrando os preços que são maiores que 20
// let precosFiltrados = precosAumentados.filter(preco => preco > 20);
// console.log("Preços filtrados:", precosFiltrados);

// // Somando todos os preços filtrados
// let total = precosFiltrados.reduce((acc, preco) => acc + preco, 0);

// // Mostrando os resultados
// console.log("Total dos preços filtrados:", total);



// -------------------------------------------------------------------------------------------------

// 9. Analisando Números Aleatórios
// ● Gere 10 números aleatórios entre 0 e 100 usando Math.random() e Math.floor().
// Salve esses números em um array.
// ○ Use filter() para selecionar apenas os números maiores que 50.
// ○ Ordene o array filtrado de forma decrescente.
// ● Imprima o array original, o array filtrado e o array ordenado.

// Gere 10 números aleatórios entre 0 e 100
const numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
console.log("Array original:", numerosAleatorios);

// Use filter() para selecionar apenas os números maiores que 50
const numerosFiltrados = numerosAleatorios.filter(numero => numero > 50);
console.log("Array filtrado (números > 50):", numerosFiltrados);

// Ordene o array filtrado de forma decrescente
const numerosOrdenados = numerosFiltrados.sort((a, b) => b - a);

// Imprima os resultados
console.log("Array ordenado (decrescente):", numerosOrdenados);


// -------------------------------------------------------------------------------------------


// 10. Condicional para Calcular Média
// ● Dado o array let notas = [7.5, 8.0, 6.5, 9.0, 7.0]:
// ○ Calcule a média das notas usando reduce().
// ○ Verifique se a média é maior ou igual a 7 para decidir se o aluno foi aprovado ou
// reprovado.
// ● Imprima a média e o resultado ("Aprovado" ou "Reprovado").

let notas = [7.5, 8.0, 6.5, 9.0, 7.0];

// Calcule a soma das notas usando reduce
let soma = notas.reduce((acc, nota) => acc + nota, 0);

// Calcule a média
let media = soma / notas.length;

// Imprima a média
console.log("A média das notas é:", media);

// ○ Verifique se a média é maior ou igual a 7 para decidir se o aluno foi aprovado ou reprovado.
let status = media >= 7 ? "Aprovado" : "Reprovado";


console.log ("Resultado", status)



// ----------------------------------------------------------------------------------------


// 11. Manipulação de String com Interpolação e Substituição
// ● Crie variáveis let cidade = "São Paulo" e let clima = "ensolarado":
// ○ Use Template Literals para criar uma frase como: "Hoje em São Paulo está
// ensolarado."
// ○ Substitua a palavra "ensolarado" por "chuvoso".
// ● Imprima a frase original e a frase modificada.

let cidade = "São Paulo";
let clima = "ensolarado";

// ○ Use Template Literals para criar uma frase como: "Hoje em São Paulo está ensolarado."
let saudacao = `Hoje em ${cidade} está ${clima}`;
console.log(saudacao);

// ○ Substitua a palavra "ensolarado" por "chuvoso".
let climaModificado = clima.replace("ensolarado", "chuvoso");
let fraseModificada = `Hoje em ${cidade} está ${climaModificado}.`;
console.log(fraseModificada);


// --------------------------------------------------------------------------------------------

// 12. Reversão e Capitalização de Palavras
// ● Dada a string let texto = "javascript é incrível":
// ○ Divida o texto em palavras separadas.
// ○ Inverta a ordem das palavras.
// ○ Converta a primeira letra de cada palavra para maiúscula.
// ● Imprima o texto resultante.

let texto = "javascript é incrível";

// Dividindo o texto em palavras separadas
let palavras = texto.split(" ");

// Invertendo a ordem das palavras
let palavrasInvertidas = palavras.reverse();

// ○ Converta a primeira letra de cada palavra para maiúscula.
// Convertendo a primeira letra de cada palavra para maiúscula
let resultado = palavrasInvertidas.map(palavra => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}).join(" ");

// Imprimindo o texto resultante
console.log(resultado);



// ---------------------------------------------------------------------------------------------

// 13. Comparando Valores com switch e if
// ● Crie uma variável let mes = 6, representando um mês do ano:
// ○ Use switch para verificar qual é o mês (por exemplo, 6 = Junho) e imprimir o
// nome do mês.
// ○ Use if para verificar se o mês é parte do primeiro semestre (1-6) ou do segundo
// semestre (7-12).
// ● Mostre o nome do mês e a informação do semestre.

let mes = 6
let nomeDoMes;

switch (mes) {
    case 1:
        nomeDoMes = "Janeiro";
        break;
    case 2:
        nomeDoMes = "Fevereiro";
        break;
    case 3:
        nomeDoMes = "Março";
        break;
    case 4:
        nomeDoMes = "Abril";
        break;
    case 5:
        nomeDoMes = "Maio";
        break;
    case 6:
        nomeDoMes = "Junho";
        break;
    case 7:
        nomeDoMes = "Julho";
        break;
    case 8:
        nomeDoMes = "Agosto";
        break;
    case 9:
        nomeDoMes = "Setembro";
        break;
    case 10:
        nomeDoMes = "Outubro";
        break;
    case 11:
        nomeDoMes = "Novembro";
        break;
    case 12:
        nomeDoMes = "Dezembro";
        break;
    default:
        nomeDoMes = "Mês inválido";
}


let semestre;

if (mes >= 1 && mes <= 6) {
    semestre = "primeiro semestre";
} else if (mes >= 7 && mes <= 12) {
    semestre = "segundo semestre";
} else {
    semestre = "mês inválido";
}

// Mostrando o resultado
console.log(`O mês é: ${nomeDoMes}`);
console.log(`O mês pertence ao: ${semestre}`);



// ----------------------------------------------------------------------------------------------------------------

// 14. Manipulando Números com parseInt() e Math
// ● Considere a string let numeroStr = "45.67":
// ○ Converta a string para um número inteiro usando parseInt().
// ○ Arredonde o número para baixo usando Math.floor().
// ○ Arredonde o número para cima usando Math.ceil().
// ● Imprima todos os resultados.


let numeroStr = "45.67";
console.log(`Número original como string: ${numeroStr}`);

// Convertendo a string para um número inteiro usando parseInt()
let numeroInt =  parseFloat(numeroStr);
console.log(`Número convertido para inteiro: ${numeroInt}`);

// Arredondando o número para baixo usando Math.floor()
let arredondarBaixo = Math.floor(numeroInt);
console.log(`Arredondado para baixo: ${arredondarBaixo}`);

// Arredondando o número para cima usando Math.ceil()
let arredondarCima = Math.ceil(numeroInt);
console.log(`Arredondado para cima: ${arredondarCima}`);

// ---------------------------------------------------------------------------------------------------------------

// 15. Encontrando Caracteres em uma String
// ● Dada a string let palavra = "programador":
// ○ Use charAt() para encontrar o terceiro caractere.
// ○ Use indexOf() para encontrar a posição do caractere "a".
// ○ Extraia a primeira metade da palavra usando slice().
// ● Imprima todos os resultados.


// ○ Use charAt() para encontrar o terceiro caractere.
let palavra = "programador";
let terceiroCaractere = palavra.charAt(2); // Lembre-se que o índice começa em 0
console.log("Terceiro caractere:", terceiroCaractere);


// ○ Use indexOf() para encontrar a posição do caractere "a".
// Encontrar a posição do caractere "a"
let posicaoA = palavra.indexOf("a");
console.log("Posição do caractere 'a':", posicaoA);


// Extrair a primeira metade da palavra
let metadePalavra = palavra.slice(0, Math.ceil(palavra.length / 2));
console.log("Primeira metade da palavra:", metadePalavra);



// -------------------------------------------------------------------------------------------------------------------

// 16. Uso de for para Contagem de Caracteres
// ● Dada a string let frase = "Estudar programação é ótimo!":
// ○ Conte quantas vezes a letra "a" aparece na frase usando um loop for.
// ○ Imprima o resultado.

let frase = "Estudar programação é ótimo!";
let contagem = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a' || frase[i] === 'A') {
        contagem++;
    }
}

console.log(`A letra "a" aparece ${contagem} vezes na frase.`);

// -------------------------------------------------------------------------------------------------------------------------

// 17. Manipulação de Arrays com join() e reverse()
// ● Considere o array let letras = ["a", "b", "c", "d", "e"]:
// ○ Inverta a ordem das letras.
// ○ Junte as letras em uma única string, separadas por vírgulas.
// ● Imprima o array invertido e a string resultante.

let letras = ["a", "b", "c", "d", "e"];

// Inverter a ordem das letras  Imprimir o array invertido
letras.reverse();
console.log("Array invertido:", letras);


// Juntar as letras em uma única string, separadas por vírgulas
let resultado = letras.join(", ");
// string resultante
console.log("String resultante:", resultado);


// ----------------------------------------------------------------------------------------------------------


// 18. Criação e Verificação de Arrays
// ● Crie um array de 5 números inteiros, como let numeros = [5, 12, 8, 130,
// 44].
// ○ Filtre os números que sejam maiores que 10.
// ○ Some todos os números do array original.
// ○ Verifique se o array possui exatamente 5 elementos.
// ● Imprima o array filtrado, a soma e a verificação de tamanho.


let numeros = [5, 12, 8, 130, 44];

// Filtrar os números que são maiores que 10
let numerosFiltrados = numeros.filter(numero => numero > 10);
console.log("Números filtrados (maiores que 10):", numerosFiltrados);


// Somar todos os números do array original
let soma = numeros.reduce((acc, numero) => acc + numero, 0);
console.log("Soma dos números:", soma);


// Verificar se o array possui exatamente 5 elementos
let temCincoElementos = numeros.length === 5;
// Imprimir  verificação de tamanho
console.log("O array possui exatamente 5 elementos?", temCincoElementos);

// -----------------------------------------------------------------------------------------------------------------------

// 19. Operações com Strings e Condicionais
// ● Considere a string let nome = "Alice":
// ○ Converta o nome para letras minúsculas.
// ○ Verifique se o nome convertido é igual a "alice".
// ○ Caso seja igual, exiba uma mensagem de "Nome reconhecido".
// ● Imprima o resultado.


let nome = "Alice";

// Convertendo o nome para letras minúsculas
let nomeMinusculo = nome.toLowerCase();

// Verificando se o nome convertido é igual a "alice"
if (nomeMinusculo === "alice") {
    console.log("Nome reconhecido");
}

// Imprimindo o resultado
console.log("Nome em minúsculas:", nomeMinusculo);




// -------------------------------------------------------------------------------------------------


// 20. Manipulando Números e Arrays com Math e push()
// ● Crie um array vazio let numeros = []:
// ○ Gere 5 números aleatórios entre 1 e 20 e adicione-os ao array usando push().
// ○ Arredonde cada número para o inteiro mais próximo usando Math.round().
// ● Imprima o array de números arredondados.


// Cria um array vazio
let numeros = [];

// Gera 5 números aleatórios entre 1 e 20
for (let i = 0; i < 5; i++) {
    // Gera um número aleatório entre 1 e 20 e arredonda
    let numeroAleatorio = Math.round(Math.random() * 19) + 1;
    // Adiciona o número arredondado ao array
    numeros.push(numeroAleatorio);
}

// Imprime o array de números arredondados
console.log(numeros);



// -----------------------------------------------------------------------------------------------------

// 21. Manipulação de String com split() e length
// ● Dada a frase let frase = "Aprender JavaScript é divertido e
// recompensador":
// ○ Divida a frase em palavras.
// ○ Conte o número total de palavras.
// ○ Verifique se a frase possui mais de 5 palavras.
// ● Imprima a lista de palavras, o número de palavras, e a verificação de quantidade.

// Define a frase
let frase = "Aprender JavaScript é divertido e recompensador";

// Divide a frase em palavras
let palavras = frase.split(" ");

// Conta o número total de palavras
let numeroDePalavras = palavras.length;

// Verifica se a frase possui mais de 5 palavras
let maisDeCincoPalavras = numeroDePalavras > 5;

// Imprime a lista de palavras, o número de palavras, e a verificação de quantidade
console.log("Lista de palavras:", palavras);
console.log("Número de palavras:", numeroDePalavras);
console.log("A frase possui mais de 5 palavras?", maisDeCincoPalavras);


// ----------------------------------------------------------------------------------------------------------------------

// 22. Validação de Input com prompt() e confirm()
// ● Use prompt() para perguntar ao usuário seu nome.
// ○ Use confirm() para verificar se o nome inserido está correto.
// ○ Caso esteja correto, exiba uma saudação com alert().
// ● Mostre a sequência completa de ações.


// Passo 1: Perguntar ao usuário seu nome
let nome = prompt("Qual é o seu nome?");

// Passo 2: Confirmar se o nome está correto
let nomeCorreto = confirm(`Seu nome é ${nome}? Clique em OK para confirmar ou Cancelar para inserir novamente.`);

if (nomeCorreto) {
    // Passo 3: Se confirmado, exibir uma saudação
    alert(`Olá, ${nome}! Seja bem-vindo!`);
} else {
    // Se o usuário cancelar, você pode adicionar uma nova tentativa ou uma mensagem
    alert("Por favor, tente novamente.");
}



// -----------------------------------------------------------------------------------------------------------------------------

// 23. Contando Caracteres com length e for
// ● Considere o texto let texto = "JavaScript":
// ○ Conte quantos caracteres "a" existem no texto usando um loop for.
// ○ Imprima a quantidade de caracteres "a".


let texto = 'Javascript';
for (let i = 0; i < texto.length; i++0){
    if texto [i]==='a') contador
}








// 24. Manipulação de Arrays com Adição e Remoção
// ● Dado o array let cores = ["Vermelho", "Verde", "Azul"]:
// ○ Adicione "Amarelo" ao final.
// ○ Remova "Verde".
// ○ Adicione "Roxo" ao início.
// ● Imprima o array final.











// 25. Comparando Strings com toLowerCase() e toUpperCase()
// ● Considere duas strings let str1 = "casa" e let str2 = "CASA":
// ○ Converta ambas para minúsculas e verifique se são iguais.
// ○ Converta ambas para maiúsculas e verifique se são iguais.
// ● Imprima os resultados das comparações.













// 26. Trabalhando com Math.random() e sort()
// ● Crie um array com 5 números aleatórios entre 1 e 50.
// ○ Ordene esses números de forma crescente.
// ○ Ordene os mesmos números de forma decrescente.
// ● Imprima o array em ambas as ordens.










// 27. Manipulando Objetos com Arrays
// ● Crie um array de objetos representando carros, com propriedades como marca,
// modelo, e ano.
// ○ Filtre os carros que sejam de uma marca específica.
// ○ Extraia os modelos desses carros em um novo array.
// ● Imprima o array filtrado e o array de modelos.










// 28. Trabalhando com splice() para Modificar Arrays
// ● Dado o array let animais = ["Cachorro", "Gato", "Leão", "Tigre"]:
// ○ Remova "Leão" e substitua por "Panda".
// ○ Adicione "Coelho" após "Gato".
// ● Imprima o array final.












// 29. Ordenando Arrays com Números Mistos
// ● Considere o array let numeros = [10, 5, 15, 7, 20]:
// ○ Ordene o array de forma crescente.
// ○ Adicione um novo número ao início do array.
// ○ Verifique se o array possui exatamente 6 elementos.
// ● Imprima o array ordenado e a verificação de tamanho.












// 30. Operações Mistas com concat(), reverse(), e join()
// ● Considere duas variáveis let part1 = "Aprender" e let part2 =
// "Programação":
// ○ Concatene as duas strings.
// ○ Inverta a ordem das letras da string resultante.
// ○ Junte as letras em uma nova string separadas por um ponto (.).
// ● Imprima o resultado final.