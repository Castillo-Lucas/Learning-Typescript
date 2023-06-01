"use strict";
//-----------------Tipos de datps en TS ---------------
//-- Inferir tipos y modo estricto
//Si creo las siguientes variables pasa lo siguiente
const a = 10; //TS me indica que esta variable es 10, no va a ser modificable por que es una constante.
let b = 10; //TS me indica que es un Number pero no me defina el vario ya que es un let.
//Para ello, y para no dejar variables a libreinterpretacion es recomentable hacer las variables de la siguiente manera:
const c = 10; //TS interpreta que esto es un number
let d = 20; //TS interpreta que esto es un string
//-- Booleans
//A los booleanos lo podemos declarar de la siguiente manera
let isSuperman = true;
let isBatman = false;
isSuperman = isBatman ? false : true; //Si so si hay que asignarle un booleano como reaultado por que si no marca error
//-- Numbers
const firstNumber = 10;
let secondNumber = 20;
//-- Strings
//Podemos delcarar strings de las siguientes tres maneras:
const batman = "Batman";
const linternaVerde = "Linterna Verde";
const Ironman = `Ironman`;
//-- Any
//Esto sirve para usar que el dato que se usar sea de cualquier tipo. Hay que evitar de usarlo.
let avenger = "Dr Strange";
avenger = true; //Luego puede convertirse en un booleano
avenger = 123; //Y tambien puede convertirse en un number
//-- Arrays
//Se pueden definir los tipos de arreglos, estos pueden ser de un solo tipo o combinados.
const conteo = [1, 2, 3, 4, 5, 6];
const palabras = ["letra", "casa", "cosa"];
const convinado = [12, "doce", true];
//-- Tuples / Tuplas
//Sirve para determinar el tipo de dato de un arreglo segun la posicion del mismo.
const hero = [
    "Spider-man",
    100,
    true,
    "Tela Araña",
];
//Luego podemos asignarles otro valor pero respetando lo establecido:
hero[0] = "Captain America";
hero[1] = 150;
hero[2] = false;
hero[3] = "Mucha fuerza";
//-- Enum / Enumeraciones
//Podemos determinar cierto rango de valores:
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 1] = "min";
    AudioLevel[AudioLevel["medium"] = 5] = "medium";
    AudioLevel[AudioLevel["max"] = 10] = "max";
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.max;
//-- Void / Vacios
//TS interpreta que no hay un valor de retorno, lo cual se puede usar para una funcion vacía.
function batman2() {
    return;
}
const superman = () => {
    return;
};
//-- Never
//Sirve para determinar una funcion que va a terminar con un error
const error = (msg) => {
    if (false) {
        throw new Error(msg);
    }
    return 1;
};
error("Auxilio");
//-- Null
const incompleto = undefined;
//-- Undefined
const nulo = null;
//--------- TAREA -----
// Tipos
const batman3 = "Bruce";
const superman2 = "Clark";
const existe = false;
// Tuplas
const parejaHeroes = [batman3, superman2];
const villano = ["Lex Lutor", 5, true];
// Arreglos
const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var PowerLevel;
(function (PowerLevel) {
    PowerLevel[PowerLevel["flash"] = 5] = "flash";
    PowerLevel[PowerLevel["Superman"] = 100] = "Superman";
    PowerLevel[PowerLevel["Batman"] = 1] = "Batman";
    PowerLevel[PowerLevel["Acuaman"] = 0] = "Acuaman";
})(PowerLevel || (PowerLevel = {}));
const fuerzaFlash = PowerLevel.flash;
const fuerzaSuperman = PowerLevel.Superman;
const fuerzaBatman = PowerLevel.Batman;
const fuerzaAcuaman = PowerLevel.Acuaman;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
const poder = "100";
const largoDelPoder = poder.length;
console.log(largoDelPoder);
