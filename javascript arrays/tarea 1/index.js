const edad = prompt('ponga su edad prro');
let texto = 'usted es';
if (edad >= 18) {
    texto = texto + ' adulto. Puede conducir e ir preso, felicidades.'
}
if (edad < 18) {
    texto = texto + ' menor. Vaya a tomar el bondi'
}
document.write (texto)