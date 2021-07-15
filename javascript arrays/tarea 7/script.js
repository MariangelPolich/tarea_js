/*Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma :
 (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

const número = prompt("Ingrese un número no mayor a 50")

for ( let x = número; x >= 1; x--) {
    for (let y = 1; y <= x; y++){
    document.write(x)
}
document.write('<br>')
}
