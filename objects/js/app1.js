// los objetos son una de las 2 piezas claves en JS
//sirven para unir informacion de diferente tipo pero que tienen algo en comun
//por ejmplo

const nombreProducto = "Monitor de 21 pulgadas";
const precio = 130;
const disponible = true;

//podemos reemplazar las variables, creando un objeto para toda esta informacion
/*
const producto1 = {
    // esto es lo que se conoce como OBJECT LITERAL
}

//LUEGP ´PODEMOS PONER CONJUNTOS DE LLAVE:VALOR (KEY:VALUE)

const producto1 = {
    nombre://esto se le llama llave (key) de objeto
}

//pero las llaves deben de tener un valor

const producto1 = {
    nombre:"Monitor de 21 pulgadas"// si lo notan dentro de los objetos los valores se asignan con : no con =
}
*/
//si desean agregar mas propiedades, solamente deben colocar comas para separar

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,//esta ultima no es obligatoria colocarla, pero es una buena practica
}

console.log(producto1)