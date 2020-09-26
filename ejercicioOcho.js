//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. 
//Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.

    let valorCompra = 300000;
    let descuento = 0.50;

    let calcularDescuento = 300000 * descuento;
    let valorTotal = valorCompra - calcularDescuento;

    console.log("el valor de la compra es: " + valorCompra + ", y tiene un descuento del 15% : " + calcularDescuento + ", usted debe pagar: " + valorTotal);