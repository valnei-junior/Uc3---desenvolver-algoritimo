// Questão 1: Manipulando o Início e o Fim do Array

// Dado o array let frutas = ['maçã', 'banana', 'laranja'];, realize as
// seguintes operações:
//     1. Adicione a fruta "abacaxi" ao início do array.
//     2. Adicione a fruta "manga" ao final do array.
//     3. Remova a primeira fruta do array.
//     4. Remova a última fruta do array.

// Pergunta: Qual é o estado final do array frutas?

// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.unshift('abacaxi')
// frutas.push('manga')

// console.log(frutas)

// const primeiro = frutas.unshift()
// const ultimo  = frutas.pop()

// console.log (primeiro);
// console.log (ultimo);
// console.log (frutas);

// -------------------------------------------------------------------------------------

// Questão 2: Inserindo e Removendo Elementos no Meio do Array

// Considere o array let numeros = [10, 20, 30, 40, 50];. Realize as
// seguintes operações:
//     1. Insira o número 25 entre 20 e 30.
//     2. Remova o número 40 do array sem alterar os outros elementos.
// Pergunta: Qual é o estado final do array numeros?

// let numeros = [10, 20, 30, 40, 50];
// numeros.splice (2,0,25)

// console.log(numeros)

// numeros.splice
// numeros.pop(4,1)

// console.log(numeros)

// --------------------------------------------------

// Questão 3: Encontrando a Posição de Elementos no Array

// Dado o array let cores = ['vermelho', 'azul', 'verde', 'amarelo',
// 'azul'];:
// 1. Utilize .indexOf para encontrar a primeira posição da cor "azul".
// 2. Utilize .lastIndexOf para encontrar a última posição da cor
// "azul".
// 3. Verifique se a cor "roxo" está presente no array utilizando
// .includes.
// // Pergunta: Quais são os resultados das operações?

// const cores = ['vermelho', 'azul', 'verde', 'amarelo', 'azul'];

// console.log(cores. indexOf ('azul'));
// console.log(cores. lastIndexOf('azul'));
// console.log(cores. includes ('roxo'));

// --------------------------------------------------------------------------------------------
// Questão 4: Removendo e Adicionando Elementos

// Dado o array let alunos = ['João', 'Ana', 'Carlos', 'Bia'];, realize
// as seguintes operações:
// 1. Remova o aluno "Carlos" do array.
// 2. Adicione o aluno "Maria" no final do array.
// 3. Adicione o aluno "Pedro" no início do array.
// Pergunta: Qual é o estado final do array alunos?


// let alunos = ['João', 'Ana', 'Carlos', 'Bia'];
// const meio = alunos.splice(2,1)
// console.log (meio)
// console.log(alunos)

// alunos.push('maria')
// console.log (alunos)

// alunos.unshift('pedro')
// console.log (alunos)



// -------------------------------------------------------
// Questão 5: Manipulação Combinada

// Dado o array let animais = ['gato', 'cachorro', 'pássaro', 'peixe','gato'];:
// 1. Remova o primeiro elemento do array.
// 2. Adicione o elemento "hamster" ao final do array.
// 3. Remova o elemento "pássaro" utilizando .splice.
// 4. Verifique se o elemento "gato" ainda está presente no array
// utilizando .includes.
// Pergunta: Qual é o estado final do array animais e qual foi o
// resultado da verificação com .includes?

// let animais = ['gato', 'cachorro', 'pássaro', 'peixe','gato'];


// animais.splice (0,1)   /*para remover*/
// console.log(animais)

// animais.push('hamster')   /*para adicionar*/
// console.log (animais)

// animais.splice (2,1)
// console.log(animais)

// console.log (animais.includes('gato'))




// ---------------------------------------------------------------------------
// Questão 6: Encontrando e Removendo Elementos
// Dado o array let livros = ['O Senhor dos Anéis', '1984', 'O Pequeno Príncipe', 'Harry Potter'];:
// 1. Encontre a posição do livro "1984" utilizando .indexOf.
// 2. Remova o livro "O Pequeno Príncipe" utilizando .splice.
// Pergunta: Qual é o estado final do array livros e qual foi a posição
// encontrada do livro "1984"?


// let livros = ['O Senhor dos Anéis', '1984', 'O Pequeno Príncipe', 'Harry Potter'];

// console.log (livros.lastIndexOf('1984'))

// livros.splice (2,1)   /*para remover*/
// console.log(livros)



// -------------------------------------------------------------------------------

// Questão 7: Verificação de Existência e Adição de Elementos
// Dado o array let cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador',
// 'Brasília'];:
// 1. Verifique se a cidade "Salvador" está no array utilizando
// .includes.
// 2. Adicione a cidade "Curitiba" ao início do array.
// Pergunta: Qual é o estado final do array cidades e qual foi o
// resultado da verificação com .includes?

// let cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador','Brasília'];

// console.log (cidades.includes('Salvador'))

// cidades.unshift('Curitiba')   /*para adicionar*/
// console.log (cidades)

// ------------------------------------------------------------------------------------
// Questão 8: Substituindo Elementos no Array

// Dado o array let jogos = ['FIFA', 'Minecraft', 'Fortnite', 'Among
// Us'];:
// 1. Substitua o elemento "Minecraft" por "The Sims".
// 2. Remova o primeiro elemento do array utilizando .shift.
// Pergunta: Qual é o estado final do array jogos?

// let jogos = ['FIFA', 'Minecraft', 'Fortnite', 'AmongUs'];
// console.log(jogos)

// jogos.splice (1,1)  
// console.log(jogos)

// jogos.splice (1,0,"The Sims")
// console.log(jogos)






// ------------------------------------------------------------------------------
// Questão 9: Removendo e Verificando Elementos
// Dado o array let esportes = ['futebol', 'basquete', 'vôlei',
// 'tênis'];:
// 1. Remova o primeiro elemento do array utilizando .shift.
// 2. Verifique se o elemento "vôlei" está presente no array utilizando
// .includes.
// 3. Se "vôlei" estiver presente, remova-o do array utilizando
// .splice.
// Pergunta: Qual é o estado final do array esportes?


// let esportes = ['futebol', 'basquete', 'vôlei','tênis'];

// const primeiro = esportes.shift('futebol')
// console.log (esportes)

// console.log (esportes.includes('vôlei'))
// console.log (esportes)

// esportes.splice (1,1)   /*para remover*/
// console.log(esportes)


// --------------------------------------------------------------------------------
// Questão 10: Manipulação Combinada e Verificação de Posição
// Dado o array let tecnologias = ['HTML', 'CSS', 'JavaScript',
// 'React'];:
// 1. Remova o último elemento do array utilizando .pop.
// 2. Adicione o elemento "Node.js" ao início do array utilizando
// .unshift.
// 3. Encontre a posição do elemento "JavaScript" utilizando .indexOf.
// Pergunta: Qual é o estado final do array tecnologias e qual foi a
// posição do elemento "JavaScript"?

// let tecnologias = ['HTML', 'CSS', 'JavaScript','React'];
// const ultimo = tecnologias.pop()
// console.log (ultimo)
// console.log(tecnologias)

// tecnologias.unshift('Node.js')
// console.log (tecnologias)

// console.log (tecnologias.indexOf('JavaScript'))

// ----------------------------------------------------------------------------
// Questão 11: Adicionando e Removendo Elementos no Início e Fim

// Enunciado: Dado o array let filmes = ['Matrix', 'Inception', 'Avatar'];,
// realize as seguintes operações:
// 1. Adicione o filme "Interstellar" ao início do array.
// 2. Remova o último filme do array.
// 3. Adicione o filme "The Godfather" ao final do array.
// Pergunta: Qual é o estado final do array filmes?

// let filmes = ['Matrix', 'Inception', 'Avatar'];

// filmes.unshift("Interstellar")
// console.log (filmes)

// const ultimo = filmes.pop()
// console.log (ultimo)
// console.log(filmes)

// filmes.push("The Godfather")
// console.log (filmes)



// -----------------------------------------------------------------------------


// Questão 12: Removendo e Inserindo Elementos no Meio do Array
// Enunciado: Dado o array let cores = ['vermelho', 'azul', 'verde',
// 'amarelo'];, realize as seguintes operações:
// 1. Remova a cor "verde" do array.
// 2. Adicione a cor "roxo" na posição onde "verde" estava.
// Pergunta: Qual é o estado final do array cores?

// let cores = ['vermelho', 'azul', 'verde','amarelo'];
// console.log(cores)

// const meio = cores.splice(2,1)
// console.log (meio)
// console.log(cores)

// cores.splice (2,1,"roxo")
// console.log(cores)



// -------------------------------------------------------------------------------------------


// Questão 13: Verificando e Adicionando Elementos
// Enunciado: Dado o array let times = ['Flamengo', 'Corinthians',
// 'Palmeiras'];, realize as seguintes operações:
// 1. Verifique se o time "São Paulo" está presente no array utilizando .includes.
// 2. Se o time "São Paulo" não estiver presente, adicione-o ao final do array.
// Pergunta: Qual é o estado final do array times?

// let times = ['Flamengo', 'Corinthians','Palmeiras']
// console.log (times)

// console.log (times.includes('São Paulo'))
// console.log (times)






// ----------------------------------------------------------------------------------------------

// Questão 14: Manipulação com indexOf e splice
// Enunciado: Dado o array let comidas = ['pizza', 'hamburguer', 'sushi',
// 'lasanha'];, realize as seguintes operações:
// 1. Encontre a posição da comida "sushi" utilizando .indexOf.
// 2. Remova a comida "sushi" do array utilizando .splice.
// Pergunta: Qual é o estado final do array comidas?


// let comidas = ['pizza', 'hamburguer', 'sushi','lasanha'];
// console.log(comidas)
// console.log (comidas.lastIndexOf('sushi'))

// const meio = comidas.splice(2,1)
// console.log (meio)
// console.log(comidas)


// ---------------------------------------------------------------------------------------

// Questão 15: Inserção e Remoção Combinada
// Enunciado: Dado o array let numeros = [5, 10, 15, 20];, realize as seguintes
// operações:
// 1. Adicione o número 25 ao final do array.
// 2. Remova o número 10 do array utilizando .splice.
// 3. Adicione o número 7 ao início do array.
// Pergunta: Qual é o estado final do array numeros?


// let numeros = [5, 10, 15, 20];
// numeros.push(25)
// console.log (numeros)

// numeros.unshift(7)
// console.log (numeros)

// ----------------------------------------------------------------------------------------


// Questão 16: Removendo e Adicionando Elementos
// Enunciado: Dado o array let planetas = ['Terra', 'Marte', 'Júpiter',
// 'Saturno'];, realize as seguintes operações:
// 1. Remova o primeiro planeta do array.
// 2. Adicione o planeta "Vênus" ao início do array.
// Pergunta: Qual é o estado final do array planetas?

// let planetas = ['Terra', 'Marte', 'Júpiter', 'Saturno'];
// console.log (planetas)
// const primeiro = planetas.shift()
// console.log (primeiro)
// console.log(planetas)

// planetas.unshift('Vênus')
// console.log (planetas)

// ----------------------------------------------------------------------------


// Questão 17: Verificando e Removendo Elementos
// Enunciado: Dado o array let cursos = ['Matemática', 'Física', 'Química',
// 'Biologia'];, realize as seguintes operações:
// 1. Verifique se o curso "Física" está presente no array utilizando .includes.
// 2. Se "Física" estiver presente, remova-o do array.
// Pergunta: Qual é o estado final do array cursos?

// let cursos = ['Matemática', 'Física', 'Química', 'Biologia'];

// console.log (cursos.includes('Física'))   /*vendo se está presente*/
// console.log (cursos)

// const meio = cursos.splice(1,1)
// console.log (meio)
// console.log(cursos)


// ----------------------------------------------------------------------------------------

// Questão 18: Substituindo Elementos no Array
// Enunciado: Dado o array let carros = ['Ferrari', 'Lamborghini', 'Porsche',
// 'Bugatti'];, realize as seguintes operações:
// 1. Substitua o carro "Lamborghini" por "McLaren".
// 2. Remova o último carro do array.
// Pergunta: Qual é o estado final do array carros?

// let carros = ['Ferrari', 'Lamborghini', 'Porsche','Bugatti'];
// console.log(carros)
// const meio = carros.splice(1,1)
// console.log (meio)
// console.log(carros)

// carros.splice (1,0,"McLaren") /* para mudança de posição, ordem, ou apagar alguem da fila. basta trocar os dois primeiros nnumeros*/
// console.log(carros)

// const ultimo = carros.pop()
// console.log (ultimo)
// console.log(carros)


// -----------------------------------------------------------------------------------------

// Questão 19: Manipulação Combinada de Elementos
// Enunciado: Dado o array let idiomas = ['Inglês', 'Espanhol', 'Francês',
// 'Alemão'];, realize as seguintes operações:
// 1. Remova o primeiro idioma do array.
// 2. Adicione o idioma "Italiano" ao final do array.
// 3. Encontre a posição do idioma "Francês" utilizando .indexOf.
// Pergunta: Qual é o estado final do array idiomas e qual foi a posição do idioma "Francês"?

// let idiomas = ['Inglês', 'Espanhol', 'Francês','Alemão'];
// console.log(idiomas)

// idiomas.splice (0,1) /* para mudança de posição, ordem, ou apagar alguem da fila. basta trocar os dois primeiros nnumeros*/
// console.log(idiomas)

// idiomas.splice (4,1,'Italiano')  /*para adicionar ou apagar ultilizando .splice*/
// console.log(idiomas)

// console.log (idiomas.indexOf("Francês")) /*para encontrar*/



// --------------------------------------------------------------------------------------------------

// Questão 20: Adicionando e Verificando Elementos
// Enunciado: Dado o array let frutas = ['maçã', 'banana', 'laranja', 'uva'];,
// realize as seguintes operações:
// 1. Adicione a fruta "morango" ao início do array.
// 2. Verifique se a fruta "laranja" está presente no array utilizando .includes.
// Pergunta: Qual é o estado final do array frutas e qual foi o resultado da verificação com
// .includes?

// let frutas = ['maçã', 'banana', 'laranja', 'uva'];

// frutas.splice (0,0,'morango')  /*para adicionar ou apagar ultilizando .splice*/
// console.log(frutas)

// console.log (frutas.includes('laranja')) /*verifica se objeto ou numero está presente na array*/