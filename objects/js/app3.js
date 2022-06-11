//veamos como asignar variables a las propiedades de un objeto

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

//const nombre = producto1.nombre;
//esta es la forma mas intuitiva, pero es la menos optima

//existe una forma moderna que llego con ES6 que se llama Object Destructuring, al ppio puede ser compleja, pero despues se vuelve mas natural (cuando lo practican)

const { nombre,precio,disponible } = producto1


console.log(nombre)
console.log(precio)
console.log(disponible)