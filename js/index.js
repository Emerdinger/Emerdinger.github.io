const subtitulo = document.querySelector('.subtitulo-portafolio');
const ms = 'Aquí encontrarás todos mis proyectos actuales';
let printe = '';
let n = 0;
let naux = 0

function imprimir() {
    if (ms.length > n) {
        setTimeout(function () {
            printe += ms[n]
            subtitulo.innerHTML = printe + '|';
            n++
            imprimir();
        }, 200);
    } else {
        setTimeout(() => {
            imprimirInverso();
        }, 5000)
    }
}

function imprimirInverso() {
    if (printe != '') {
        setTimeout(function () {
            printe = printe.slice(0, -1);
            subtitulo.innerHTML = printe + '|';
            imprimirInverso();
        }, 50);
    } else {
        setTimeout(() => {
            n = 0
            imprimir();
        },1000);
    }
}

imprimir()
