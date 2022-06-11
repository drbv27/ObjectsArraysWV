// como unir 2 objetos

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

const medidas = {
    peso:"1kg",
    largo:"40cm",
}

//la forma antigua de unir objetos es un object method assign

const resultado =  Object.assign(producto1,medidas)
console.log(producto1)
console.log(medidas)
console.log(resultado)

//ojo asign modifica el primer objeto....