let operador;
let operando1;
let operando2;
let visor = document.getElementById('visor');

function adicionarNumero(numero){
    visor.value += numero;
}

function adicionarOperador(novoOperador){
    operador = novoOperador;
    operando1 = parseFloat(visor.value);
    visor.value = '';
}

function limparVisor(){
    visor.value = '';
}

function calcular(){
    operando2 = parseFloat(visor.value);
    let resultado;
    switch (operador){
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case '*':
            resultado = operando1 * operando2;
            break;
        case '/':
            resultado = operando1 / operando2;
            break;
    }
    visor.value = resultado;
}
function apagarNumero(){
        
    var input = document.getElementById("visor");
        var valor = input.value;
    if (valor.length > 0 && !isNaN(valor[valor.length - 1])) {
            input.value = valor.substring(0, valor.length - 1);
        }
      }
function adicionarHello(){
        const input = document.getElementById('visor');
        input.value = 'Olá usuario'

        setTimeout(() => {
            input.value = '';
          }, 3000
          );
}


    
