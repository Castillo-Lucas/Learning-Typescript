//----------------- Objetos y Tipos Personalizados---------------

//Si se crea un objeto se debe definir el tipo de dato de cada una de las propiedades antes de inicar el objeto.
//En el siguiente caso tanto se estable como opcional las propiedades "age" y "getName", y este ultimo se lo delcara como una funcion que va a recibir un string

let flash:{ name:string, age?:number, powers:string[], getName?: () => string } = {//No es necesario declarar los tipos de objetos en un orden definido como si lo es en una funcion.
    name: "Barry Alen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"]
}

flash={
    name: "Flash Reverso",
    //age: 48, En este caso no se declara el "age" y esta bien ya que en un principio no fue necesario declarar los tipos de objetos en un orden definido como si lo es en una funcion.
    powers: ["Solamente super velocidad"],
    getName(){
        return this.name
    }
}

//-- Problema con la definición en línea
//Podemos tener el siguiente objeto pero tenemos que volver a declarar todos los tipos de datos. Esto se puede solucionar con los Tipos de Datos Personalizados
let superman:{ name:string, age?:number, powers:string[], getName?: () => string } = {//No es necesario declarar los tipos de objetos en un orden definido como si lo es en una funcion.
    name: "Clark Kent",
    age: 35,
    powers: ["Super velocidad", "Super fuerza"]
}

//-- Tipos de Datos Personalizados
//Podemos reemplazar la declaracion de los tipos de datos cuando se incia un array por la palabra reserva de TS llamada "type"
type hero = { 
    name:string,
    age?:number,
    powers:string[],
    getName?: () => string 
}

//Y ahora podemos llamar a "flas" y "superman" y declarar que son arrgeglo de tipo "hero".
flash: hero = {
    name: "Barry Alen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"]
}

superman: hero = {
    name: "Clark Kent",
    age: 35,
    powers: ["Super velocidad", "Super fuerza"]
}

//-- Multiples tipos permitidos
