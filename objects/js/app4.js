//un objeto tambien puede tener otro objeto adentro de este

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
    medidas:{
        peso:"1kg",
        largo:"50cm",
        alto:"25cm",
        profundo:"5cm",
    },
}


console.log(producto1)
console.log(producto1.medidas)
console.log(producto1.medidas.peso)