//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. 
//En el caso de ser 0, debe visualizar “el número no es par ni impar” (para que un numero sea par, 
//se debe dividir entre dos y que su resto sea 0)

let numero = 19;

if (numero % 2 == 0){
    console.log(numero + " es par");
}
else{
    console.log(numero + " es impar");
}