//                             Atividade 05


// Questão 1: Classificação de Notas com Mensagem Personalizada

// Contexto: Um professor está utilizando um sistema para classificar as notas dos alunos e
// deseja que a função forneça uma mensagem personalizada de acordo com a nota. 
// Questão: Modifique a função para que a classificação da nota seja acompanhada de uma mensagem
// personalizada. Por exemplo, se a nota for 'A', a mensagem deve ser "Sua nota é A. Excelente
// trabalho!". O objetivo é tornar o feedback mais pessoal e encorajador.

// function definirnota (){
//     const nota = parseInt (prompt('Digite a nota do aluno (0 a 100'));
//        let  resultado;
    
//         if (nota>90){
//             resultado = 'A, Excelente trabalho!';
        
//         }else if (nota>=80){
//             resultado = 'B, Bom trabalho!';

//         }else if (nota>=70){
//             resultado = 'C, Trabalho Satisfatorio!';

//         }else if (nota>=60){
//             resultado = 'D, Precisa Melhorar!';
//         }else {
//             resultado = 'F, Insuficiente!';
//         }
//         alert (`Sua nota é ${resultado}`);
//     }

// definirnota ();

// ---------------------------------------------------------------------

// Questão 2: Classificação com Intervalos Personalizados

// Contexto: Um professor deseja ajustar os intervalos de classificação das notas para refletir
// critérios personalizados de avaliação. 

// Questão: Modifique a função para que a classificação da
// nota seja baseada em intervalos personalizados que o usuário define. Solicite ao usuário os
// limites superiores para as notas 'A', 'B' e 'C'. A função deve usar esses limites para determinar
// a classificação da nota.


// function definirnota (){
//     const nota = parseInt (prompt('Digite a nota do aluno (0 a 100'));
//     const intervaloA = parseInt (prompt ('Digite o limite superior para nota 100'))
//     const intervaloB = parseInt (prompt ('Digite o limite superior para nota 90'))
//     const intervaloC = parseInt (prompt ('Digite o limite superior para nota 80'))
       
//     let  resultado;
//         if (nota> intervaloA){
//             resultado = 'A';
        
//         }else if (nota>intervaloB){
//             resultado = 'B';

//         }else if (nota>intervaloC){
//             resultado = 'C';

//         }else if (nota>=60){
//             resultado = 'D';
//         }else {
//             resultado = 'F';
//         }
//         alert (`Sua nota é ${resultado}`);
//     }

// definirnota ();

// ------------------------------------------------------------------------------------------------

// Questão 3: Classificação e Validação

// Contexto: É necessário garantir que as notas inseridas estejam dentro do intervalo válido
// antes de realizar a classificação.

// Questão: Atualize a função para incluir uma validação que
// verifique se a nota inserida está entre 0 e 100. Caso contrário, a função deve informar ao
// usuário que a nota é inválida e deve estar dentro do intervalo permitido.

// function definirnota (){
//     const nota = parseInt (prompt('Digite a nota do aluno (0 a 100'));
//        let  resultado;
    
//         if (nota <0 ||  nota >100){
//             resultado = 'Nota Invalida';

//         } else if (nota>90 && nota <=100){
//             resultado = 'A, Excelente trabalho!';
        
//         }else if (nota>=80){
//             resultado = 'B, Bom trabalho!';

//         }else if (nota>=70){
//             resultado = 'C, Trabalho Satisfatorio!';

//         }else if (nota>=60){
//             resultado = 'D, Precisa Melhorar!';
//         }else {
//             resultado = 'F, Insuficiente!';
//         }
//         alert (`Sua nota é ${resultado}`);
//     }

// definirnota ();

// ----------------------------------------------------------------------------------------
// Questão 4: Classificação com Desempenho

// Contexto: Um professor quer fornecer um feedback adicional com base na proximidade da
// nota da mínima aprovação. 

// Questão: Modifique a função para que o feedback sobre a nota
// inclua uma mensagem adicional caso a nota esteja próxima da nota mínima de aprovação (60).
// Por exemplo, se a nota for 55 ou mais, adicione a mensagem "Você está quase lá!" junto com a
// classificação.

// function definirnota (){
//     const nota = parseInt (prompt('Digite a nota do aluno (0 a 100'));
//        let  resultado;
    
//         if (nota <0 ||  nota >100){
//             resultado = 'Nota Invalida';

//         } else if (nota>90 && nota <=100){
//             resultado = 'A, Excelente trabalho!';
        
//         }else if (nota>=80){
//             resultado = 'B, Bom trabalho!';

//         }else if (nota>=70){
//             resultado = 'C, Trabalho Satisfatorio!';

//         }else if (nota>=60){
//             resultado = 'D, Precisa Melhorar!';
//         }else {
//             resultado = 'F, Insuficiente!';
//         }
//         alert (`Sua nota é ${resultado}`);
//     }

// definirnota ();


// ------------------------------------------------------------------------------------------------
// Questão 5: Classificação com Sugestão de Estudo

// Contexto: Um sistema educacional precisa fornecer sugestões de estudo com base na nota
// dos alunos para ajudá-los a melhorar seu desempenho. 
// Questão: Atualize a função para adicionar sugestões de estudo personalizadas para cada 
// faixa de nota. A sugestão deve ajudar o aluno a entender como pode
//  melhorar com base na sua classificação.

// function definirNota (){
//         const nota = parseInt (prompt('Nota do aluno (0 a 100'));
//            let  resultado;
        
//             if (nota <0 ||  nota >100){
//                 resultado = 'Nota Invalida';
    
//             } else if (nota>90 && nota <=100){
//                 resultado = 'Excelente trabalho!';
            
//             }else if (nota>=80){
//                 resultado = 'Bom trabalho!';
    
//             }else if (nota>=70){
//                 resultado = 'Trabalho Satisfatorio!';
    
//             }else if (nota>=60){
//                 resultado = 'Precisa Melhorar!';
//             }else {
//                 resultado = 'Melhore URGENTE!';
//             }
//             alert (`Sua nota é ${resultado}`);
//         }
    
//     definirNota ();



// -------------------------------------------------------------------------------------------------
// Questão 6: Classificação com Comentário Personalizado

// Contexto: Um professor deseja incluir um comentário adicional para cada nota classificada.
// Questão: Modifique a função para permitir que o usuário insira um comentário personalizado
// sobre a nota classificada. O comentário deve ser exibido junto com a classificação
//  final da nota.

// function definirNota(){
//         const nota = parseInt (prompt('Nota do aluno (0 a 100'));
//         const comentário = prompt ('Digite seu comentario');
//            let  resultado;
        
//             if (nota <0 ||  nota >100){
//                 resultado = 'Nota Invalida'+ nota;
    
//             } else if (nota>90 && nota <=100){
//                 resultado = 'A '+nota;
            
//             }else if (nota>=80){
//                 resultado = 'B '+nota;
    
//             }else if (nota>=70){
//                 resultado = 'C '+ nota;
    
//             }else if (nota>=60){
//                 resultado = 'D ' +nota;
//             }else {
//                 resultado = 'F ' + nota;
//             }
//             alert (`Sua nota é ${resultado}, ${comentário}`);
//         }
    
//     definirNota();



// -------------------------------------------------------------------------------------------------
// Questão 7: Classificação com Faixa de Notas
// Contexto: O sistema deve exibir a faixa de notas correspondente à nota classificada para dar
// uma visão geral do desempenho do aluno. 
// Questão: Atualize a função para exibir a faixa de
// notas correspondente (por exemplo, "90-100", "80-89") com base na nota inserida. Isso deve
// ajudar a visualizar em que intervalo a nota se enquadra.

// function definirNota (){
//         const nota = parseInt (prompt('Nota do aluno (0 a 100'));
           
          
//            let  faixa;

//             if (nota <0 ||  nota >100){
                
    
//             } else if (nota>90 && nota <=100){
                
//                 faixa= "90- 100"
//             }else if (nota>=80){
//                 faixa= "80- 89"
    
//             }else if (nota>=70){
//                 faixa= "70- 79"
    
//             }else if (nota>=60){
//                 faixa= "60- 69"

//            }
//             alert (`Sua nota está na faixa ${faixa}`);
//         }
    
//     definirNota ();



// ---------------------------------------------------------------------------------------------------
// Questão 8: Classificação com Nota Máxima e Mínima
// Contexto: O sistema precisa mostrar a nota máxima e mínima permitida para cada faixa de
// classificação. 
// Questão: Modifique a função para que, além da classificação, a nota máxima e
// mínima para a faixa correspondente à nota inserida sejam exibidas. Por exemplo, "Sua nota é
// A. A faixa de nota é de 91 a 100."

// function definirNota (){
//     const nota = parseInt (prompt('Nota do aluno (0 a 100'));
//     let  resultado;
//     let Maxima;
//     let Minima;
    
//     if (nota> 100){
//         resultado = 'A';
//         Maxima = 100
//         Minima = 91

//     }else if (nota>90){
//         resultado = 'B';
//         Maxima = 90
//         Minima = 81

//     }else if (nota>80){
//         resultado = 'C';
//         Maxima = 80
//         Minima = 71

//     }else if (nota>70){
//         resultado = 'D';
//         Maxima = 69
//         Minima = 51

//     }else {
//         resultado = 'F';
//         Maxima = 60
//         Minima = 0
// }
// alert (`Sua nota é ${resultado} a faixa de nota é ${Minima} e a ${Maxima}`);
// }

// definirNota ();



// -------------------------------------------------------------------------------------------------
// Questão 9: Classificação com Nota de Recuperação
// Contexto: Um sistema precisa informar se o aluno deve realizar uma prova de recuperação
// com base na nota obtida. 
// Questão: Adicione uma lógica à função para verificar se a nota é
// inferior a 60 e, se for o caso, exiba uma mensagem adicional informando que o aluno precisa
// fazer uma prova de recuperação.

// function definirNota (){
//         const nota = parseInt (prompt('Nota do aluno (0 a 100'));
        
//            let  resultado;
         
          
//             if (nota <0 ||  nota >100){
//                 resultado = 'Nota Invalida '+ nota;
    
//             } else if (nota>90 && nota <=100){
//                 resultado = 'Excelente! '+nota;
            
//             }else if (nota>=80){
//                 resultado = 'Bom! '+nota;
    
//             }else if (nota>=70){
//                 resultado = 'Satisfatorio! '+ nota;
    
//             }else if (nota<=60){
//                 resultado = "F precisa fazer recuperação"
              
//             }
//             alert (`Sua nota é ${resultado}`);
//         }
    
//     definirNota ();



// -------------------------------------------------------------------------------------------------
// Questão 10: Classificação com Sugestão de Melhoria
// Contexto: É importante fornecer sugestões de áreas para melhoria com base na nota do
// aluno. 
// Questão: Atualize a função para adicionar sugestões de melhoria personalizadas com
// base na faixa de nota obtida. As sugestões devem ajudar o aluno a identificar áreas específicas
// onde ele pode melhorar seu desempenho

// function definirNota (){
//     const nota = parseInt (prompt('Nota do aluno (0 a 100'));
    
//        let  resultado;
//        let  sugestão;
      
//         if (nota <0 ||  nota >100){
//             resultado = 'Nota Invalida '+ nota;

//         } else if (nota>90 && nota <=100){
//             resultado = 'Excelente! '+nota;
            
//         }else if (nota>=80){
//             resultado = 'Bom! '+nota;
//             sugestão = 'comecou a cair Nota'
//         }else if (nota>=70){
//             resultado = 'Satisfatorio! '+ nota;
//             sugestão = 'Está no limite a Nota'
//         }else if (nota<=60){
//             resultado = "F precisa fazer recuperação"
//             sugestão = 'Estude Muito'
//         }
//         alert (`Sua nota é ${resultado}, ${sugestão}`);
//     }

// definirNota ();