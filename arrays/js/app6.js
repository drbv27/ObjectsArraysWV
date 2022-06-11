//para adicionar elementos a un array es mejor usar la sintaxis moderna de spread operator
//pero necesitamos una variable auxiliar....que a las final es mucho mejor

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

//para añadir elementos a un array con spread operator

let carritoCopia = [...carrito,producto1]
carritoCopia = [...carritoCopia,producto2]
carritoCopia = [...carritoCopia,producto3]


console.log(carritoCopia)

//una nota al final