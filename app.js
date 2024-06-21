let numerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumero();
console.log(numeroSecreto);
let intentos = 1;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //No acertó
        if (numeroUsuario >= numeroSecreto) {
            asignarTexto('p', 'El numero es menor');
            limpiarEspacio();
        } else if (numeroUsuario <= numeroSecreto) {
            asignarTexto('p', 'El numero es mayor');
            limpiarEspacio();
        }
        intentos++;
    }
    return;
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya se sorteó todo
    if (numerosSorteados.length == numeroMaximo) {
        asignarTexto('p', 'Ya se sortearon todos los numeros posibles...')
    }
        //si el numero generado está en la lista
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumero();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}

function limpiarEspacio() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del numero secreto');
    asignarTexto('p', `Indica un numero del 1-${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarEspacio();
    //indicar el p
    condicionesIniciales();
    //devolver el disabled
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

asignarTexto('h1', 'Juego del numero secreto');
asignarTexto('p', `Indica un numero del 1-${numeroMaximo}`);