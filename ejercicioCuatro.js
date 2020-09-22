//Algoritmo que lea tres números distintos y nos diga cual de ellos es el mayor 
//(recuerda usar la estructura condicional Si y los operadores lógicos)

let numeroUno = 2;
let numeroDos = 3;
let numeroTres = 6;

if (numeroUno > numeroDos && numeroUno > numeroTres){
    console.log ("numero uno es mayor:" + " " + numeroUno + " " + ">" + " " + numeroDos + " " + "Y" + " " + numeroUno + " " + ">" + " " + numeroTres);
}
else if (numeroDos > numeroUno && numeroDos > numeroTres){
    console.log ("numero dos es mayor:" + " " + numeroDos + " " + ">" + " " + numeroUno + " " + "Y" + " " + numeroDos + " " + ">" + " " + numeroTres);
}
else{
    console.log ("numero tres es mayor:" + " " + numeroTres + " " + ">" + " " + numeroUno + " " + "Y" + " " + numeroTres + " " + ">" + " " + numeroDos);
}