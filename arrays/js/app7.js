const carrito =[];

const producto1 ={
    nombre:"Monitor",
    precio:200,
}

const producto2 = {
    nombre:"Tablet 8",
    precio:100,
}

const producto3 = {
    nombre:"Parlantes BT",
    precio:270,
}
//veamos ahora como borrar elementos


carrito.push(producto1)
carrito.push(producto2)
carrito.push(producto3)

//para borrar el primer elemnto de un array .shift()
//carrito.shift();

//como borramos el ultimo elemento .pop()

carrito.pop()

//como usar .splice() para borrar un elemneto en otra posisicion
//carrito.splice(1,0)
//carrito.splice(1,2)


console.log(carrito)