let suma = 0
let num = prompt("ponga números")

while (num !== null) {
    if (Number.isNaN(+num)) {
        alert("no e un número eso");
        num = prompt("ponga otro número");
    } 
    else {
        suma = suma + +num;
        num = prompt("ponga otro número");
    }
}
document.write(suma);
