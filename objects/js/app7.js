//existen 2 metodos para blindar objetos....pero ambos metodos deben tener como primera instruccion:
"use strict";

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

console.log(producto1)

//object method o metodos de objetos
//llamamos la palabra reservada Object sintaxis de punto el metodo y dentro de parentesis el objeto
//el primero es freeze

Object.freeze(producto1)

//producto1.disponible = false;

console.log(producto1)

//freeze no permite que hagamos modificaciones a un objeto, tampoco borrar propiedades , ni asignar nuevas


console.log( Object.isFrozen(producto1))