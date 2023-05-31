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
//-- Strings
//-- Tipo de Any
//-- Arrays
//-- Tuples / Tuplas
//-- Enum / Enumeraciones
//-- Void / Vacios
//-- Never
//-- Null
//-- Undefined
