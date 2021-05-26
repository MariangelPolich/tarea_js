const edad = prompt('ponga su edad prro');
let texto = 'usted es';
if (Number.isNaN(+edad)) {
    alert("Ingrese un número válido");
} else if (edad >= 18) {
    texto = texto + ' adulto. Puede conducir e ir preso, felicidades.';
    document.write (texto)
}

