//supongamos que tenemos una tienda online con varios productos y un carrito de compras

//supongamos los siguientyes productos

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

//para añadir al final del array usan el metodo push

carrito.push(producto1)
carrito.push(producto2)
//para adicionar al ppio existe otro metodo llamado unshift
carrito.unshift(producto3)

console.log(carrito)