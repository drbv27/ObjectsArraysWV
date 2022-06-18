// el .map() soluciona el problema de guardado de forEch, map me permite guardar un nuevo array y forEach NO

const carrito = [
    {nombre:"Monitor de Pulgadas",precio:130},
    {nombre:"Tablet 8 pulgadas",precio:200},
    {nombre:"Teclado wireless",precio:30},
    {nombre:"audifonos",precio:100},
    {nombre:"Mouse",precio:20},
    {nombre:"smartphone",precio:20},
]

const nuevoCarrito = carrito.map(function(producto){
    return `Articulo: ${producto.nombre} Precio:${producto.precio}`
})
const nuevoCarrito2 = carrito.forEach(function(producto){
    return `Articulo: ${producto.nombre} Precio:${producto.precio}`
})

console.log(nuevoCarrito)
console.log(nuevoCarrito2)