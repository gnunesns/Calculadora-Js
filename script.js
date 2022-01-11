// // Tipos de funções 

// // Declarativa
// function funcao() { // Declarando a função 
//     console.log("Olá jovem");
// }
// funcao(); // chamando a funçao

// // expressão de função 
// // com nomeação 
// var funcao = function funcao(params) {
//     console.log('Hii jovem')

// }
// funcao();

// // arrow function
// var funcao = () => {
//     console.log('Sou uma arrow function')
// }
// funcao();

function calculadora(){
    const operacao = prompt(
        'Escolha uma opção: \n 1 - Soma: (+) \n 2 - Subtração: (-) \n 3 - Multiplicação: (*) \n 4 - Divisão real: (/) \n 5 - Divisão inteira: (%) \n 6 - Potenciação: (**) \n'
    )

    if (!!operacao || operacao >=7) {
        alert('Erro - operação ivalida!')
        calculadora();   
    } else{

        let numero1 = Number(prompt('Insira o primeiro valor:'));
        let numero2 = Number(prompt('Insira o segundo valor:')); 
        let resultado;
    
        if (!!numero1 || !!numero2) {
        alert('Erro - Parametro invalido!')
        calculadora();   
        }  else{
             function soma(){
                 resultado = numero1 + numero2;
                 alert(`${numero1} + ${numero2} = ${resultado}`)
                 novaOperacao();
            }
            function subtracao(){
                resultado = numero1 - numero2;
                alert(`${numero1} - ${numero2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao(){
                resultado = numero1 * numero2;
                alert(`${numero1} * ${numero2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoReal(){
                resultado = numero1 / numero2;
                alert(`${numero1} / ${numero2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = numero1 % numero2;
                alert(`O resto da divisão ${numero1} e ${numero2} é igual a ${resultado}`)
                novaOperacao();
            }
            function potenciacao(){
                resultado = numero1 ** numero2;
                alert(`${numero1} elevado a  ${numero2}ª é igual a ${resultado}`)
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operaçao?:\n 1 - Sim\n 2 - Não')
                
                if (opcao == 1) {
                   calculadora();   
                } else if (opcao == 2) {
                   alert('Até mais!')  
                } else{
                   alert('Digite uma opção valida.')
                   novaOperacao();
                }  
            }   
    
       
            if(operacao ==1){
               soma();
           } else if (operacao == 2){
               subtracao();
           } else if (operacao == 3){
               multiplicacao();
           } else if (operacao == 4){
               divisaoReal();
           } else if (operacao == 5){
               divisaoInteira();
           } else if (operacao == 6){
               potenciacao();
           }
          
       
            // switch (operacao) {
            //     case 1:
            //         soma();
            //         break;
            //     case 2:
            //          subtracao();
            //          break;
            //     case 3:
            //         multiplicacao();
            //         break;
            //     case 4:
            //         divisaoReal();
            //         break;
            //     case 5:
            //         divisaoInteira();
            //         break;
            //     case 6:
            //         potenciacao();
            //         break;             
            //     default:
            //         break;   
        }    //     }    
        
    }    
        
}
calculadora();
