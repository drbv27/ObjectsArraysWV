//veamos como recorrer un array

//veamos como lo hariamos en un lenguaje tradicional (incluso en JS)

const carrito = [
    {nombre:"Monitor de Pulgadas",precio:130},
    {nombre:"Tablet 8 pulgadas",precio:200},
    {nombre:"Teclado wireless",precio:30},
    {nombre:"audifonos",precio:100},
    {nombre:"Mouse",precio:20},
    {nombre:"smartphone",precio:20},
]

//recorrer de forma tradicional
for(let i=0;i<carrito.length;i++){
    console.log(`Articulo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`)
}

//como lo hariamos con un forEach()
carrito.forEach(function(producto){
    console.log(`El Articulo ${producto.nombre} tiene un precio de ${producto.precio}`)
})