//como hacer destructuring en objetos anidados

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
    medidas:{
        peso:"1kg",
        largo:"50cm",
        alto:"25cm",
        profundo:"5cm",
    },
}

const { nombre,precio,disponible,medidas:{ peso,largo,alto,profundo } } = producto1;


console.log(peso)

//crear un objeto con su nombre apellido edad y hobbies(es otro objeto)
//y desestructuren de manera individual cada llave

const persona = {
    nombre:"Diego",
    apellido:"Bonilla",
    edad:44,
    hobbies:{
        deporte:"karate",
        casa:"leer",
        trabajo:"programar"
    },
    hijos:true,
}