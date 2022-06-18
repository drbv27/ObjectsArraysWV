//los arrays tmb tienen destructuring, no es tan comun usarlo pero veamoslo

const edades = [44,11,36,32,25];

const [diego,sofia,aide,mario,laura] = edades;

/* console.log(diego)
console.log(sofia)
console.log(aide)
console.log(mario)
console.log(laura) */

//podemos usarlo para sacar valores muy especificos y dejar el resto quieto

const [maria,juan,...otroArray] = edades
console.log(maria)
console.log(juan)
console.log(otroArray)