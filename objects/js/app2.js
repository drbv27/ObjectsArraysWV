//veamos como acceder a las propiedades de un objeto

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

//supongamos que quiero acceder al precio
//para esto usamos la sintaxis de punto

console.log(producto1.precio)
console.log(producto1.nombre)
console.log(producto1.disponible)

//existe otra no tan comun...pero que en algun momento la van  necesitar
console.log(producto1["precio"]);

//añadir propiedades aun objeto....tambien utlizamos la sintaxis de punto

producto1.imagen = "imagen.jpg"

console.log(producto1)

//finalmente para eliminar propiedades 

delete producto1.disponible;

console.log(producto1)