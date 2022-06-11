//object.keys object.values y object.entries

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

console.log(Object.keys(producto1))//nos va a devolvar un array con las llaves
console.log(Object.values(producto1))//nos va a devolvar un array con las valores
console.log(Object.entries(producto1))//nos va a devolvar un array con las parejas llave valor