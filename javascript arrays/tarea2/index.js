let nota =null;

while (nota == null) {
    nota = prompt('Ingrese un número del 0 al 10');
    if (Number.isNaN(+nota)) {
        nota = null;
    } 
    if (nota < 0 || nota > 10) {
        nota = null;
        alert('Número erróneo');
    }
}

if (+nota == 0 || +nota == 1 || +nota == 2) {
    alert('Muy deficiente');
}
if (+nota == 3 || +nota == 4) {
    alert('Insuficiente');
}
if (+nota == 5 || +nota == 6) {
    alert('Suficiente');
}
if (+nota == 7) {
    alert('Bien');
}
if (+nota == 8 || +nota == 9) {
    alert('Notable');
}
if (+nota == 10) {
    alert('Sobresaliente');
}
