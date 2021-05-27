let palabra = ""
let texto;

while ((texto = prompt("ponga palabritas")) !== null) {
    if (palabra == "") {
        palabra = texto;
    } else {
        palabra = palabra + "-" + texto;
    }
}
document.write(palabra);

