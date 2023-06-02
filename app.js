"use strict";
//----------------- Funciones y Objetos ---------------
//-- Funciones básicas
//Se debe declarar que tipo de dato retorna la funcion
const hero = "batman";
function returnName() {
    return hero;
}
const heroName = returnName(); //El tipo de dato de esta variable es igual al tipo de dato de la funcion que se llama, en este caso es un String.
const activarBatiSeñal = () => {
    return "Bati señal activada";
};
//-- Parámetros obligatorios de las funciones
//Cada vez que se recibe un parametro en una funcion se debe declara el tipo de dato que se recibe
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
const superName = fullName("Tony", "Stark");
//-- Parámetros opcionales de las funciones
/*Si bien todos los parametros declarados son obligatorios, tambien podemos condicionar algun parametro para que
sea opcional colocando un signo de interrogacion "?" luego del parametro y antes de la declaracion del tipo de dato*/
const hisName = (firstName, lastName) => {
    return `${firstName} ${lastName || ""}`;
};
const hisSuperName = hisName("Tony");
//-- Parámetros por defecto
/*Los parametros por defecto deben ir todos juntos al principio y al ultimo se deben colocar los paramentros opcionales salvo que en el mismo parametro
se declaren el valor de parametro*/
const spideDetail = (heroName, levelPower, firstName, lastName, isGood = true) => {
    return `El super heroe es ${heroName} y su poder esta al ${levelPower}%. Su nombre real es ${firstName} ${lastName || "(...sin datos)"} y la verdad que ${isGood === true ? "es bueno" : "no es tan bueno"} en lo que hace.`;
};
const spiderman = spideDetail("Spiderman", 100, "Peter");
const spiderman2 = spideDetail("Spiderman", 100, "Peter", "Parker", false);
console.log(spiderman);
console.log(spiderman2);
//-- Parámetros REST
//Esto no es ni mas ni menos que el Rest Operator, podemos tomar los parametros restantes siguientes al parametro obligatorio y mandarlos a llamar.
const fullSupermanName = (firstName, ...restoDeNombres //Viene como un arreglo de strings
) => {
    return `${firstName} ${restoDeNombres.join(" ")}`;
};
const supermanName = fullSupermanName("Clark", "Joseph", "Kent");
console.log(supermanName);
//-- Tipo función.
//------- TAREA----
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const aSumar = sumar(1, 2);
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman(true);
// Rest?
const unirheroes = (...personas) => {
    return `Superheories unidos: ${personas.join(", ")}`;
};
const sepheroes = unirheroes("Batman", "Catwoman", "Robin");
console.log(sepheroes);
