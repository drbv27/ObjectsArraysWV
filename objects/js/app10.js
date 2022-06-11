// la forma moderna y mas conveniente de unir 2 objetos es con el famoso SPREAD OPERATOR o REST OPERATOR   ...

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

const medidas = {
    peso:"1kg",
    largo:"40cm",
}

const objetoUnion = {...producto1,...medidas}


console.log(producto1)
console.log(medidas)
console.log(objetoUnion)

// crear 3 objetos diferentes y unirlos con spread operator

