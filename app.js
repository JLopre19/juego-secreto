let numeroSecreto = 0;
let intentos = 0;
let maximoIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    //Si el número de usuario es el numero secreto
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p' , `Acertaste! Sólo te tomó ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else { 
        //CUANDO NO ACERTÓ:
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p' , 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p' , 'El número secreto es mayor');
        }
        intentos++;
        if (intentos > maximoIntentos) {
            asignarTextoElemento ('p',`yyyyy perdiste, jugaste más de ${maximoIntentos} intentos. El correcto era ${numeroSecreto}`); 
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector(`#valorUsuario`).value = ''; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
    // Si el númerp generado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto ();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //mensaje de inicio 
    condicionesIniciales ();
    //generar número aleatorio
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales (); 