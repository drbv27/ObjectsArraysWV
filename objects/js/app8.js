"use strict"

//existe otro metodo similar a freeze, que se llama Seal
//a difrencia de freeze, que no permite agregar, modificar ni eliminra propiedades, seal se comporta....

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

Object.seal(producto1);

//seal permite reasignar

producto1.nombre = "tablet"

console.log(producto1)

//pero no permite borrar ni agregar nuevas propiedades.

console.log(Object.isSealed(producto1))