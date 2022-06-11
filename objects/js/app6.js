//si recuerdan una variable creada con CONST una vez definida no puede reasignarse su valor
/*
const producto = "Monitor";
producto="Tablet";
console.log(producto)
*/
//en el caso de lo objetos es un comportamiento diferente

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

console.log(producto1)

producto1.disponible = false;
producto1.precio = 200;
console.log(producto1)