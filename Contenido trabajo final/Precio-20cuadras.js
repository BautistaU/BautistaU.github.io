function calculaPrecioTotal(precio) {
var impuestos = 1.16;
var gastosEnvio = 100;
var precioTotal = (precio * impuestos) + gastosEnvio;
alert ("su total a pagar: " + precioTotal)
}
calculaPrecioTotal(50);