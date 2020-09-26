//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. 
//Diseñar un algoritmo para este propósito (recuerda que para calcular el porcentaje puedes hacer una regla de 3).

    let chicos = 10;
    let chicas = 15;
    
    let totalestudiantes = chicos + chicas;
    console.log("la cantidad total de estudiantes es: " + totalestudiantes);

    let porcentajechicas = (chicas * 100) / totalestudiantes;
    console.log("el porcentaje de chicas es: " + porcentajechicas);

    let porcentajechicos = (chicos * 100) / totalestudiantes;
    console.log("el porcentaje de chicas es: " + porcentajechicos);