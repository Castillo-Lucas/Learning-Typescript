//-----------------Tipos de datps en TS ---------------

//-- Inferir tipos y modo estricto
//Si creo las siguientes variables pasa lo siguiente

const a = 10; //TS me indica que esta variable es 10, no va a ser modificable por que es una constante.
let b = 10; //TS me indica que es un Number pero no me defina el vario ya que es un let.

//Para ello, y para no dejar variables a libreinterpretacion es recomentable hacer las variables de la siguiente manera:

const c: number = 10; //TS interpreta que esto es un number
let d: number = 20; //TS interpreta que esto es un string

//-- Booleans
//A los booleanos lo podemos declarar de la siguiente manera
let isSuperman: boolean = true;
let isBatman: boolean = false;

isSuperman = isBatman ? false : true; //Si so si hay que asignarle un booleano como reaultado por que si no marca error

//-- Numbers
const firstNumber: number = 10;
let secondNumber: number = 20;

//-- Strings
//Podemos delcarar strings de las siguientes tres maneras:
const batman: string = 'Batman';
const linternaVerde: string = "Linterna Verde";
const Ironman: string = `Ironman`;

//-- Any
//Esto sirve para usar que el dato que se usar sea de cualquier tipo. Hay que evitar de usarlo.
let avenger: any = 'Dr Strange';
avenger = true; //Luego puede convertirse en un booleano
avenger = 123; //Y tambien puede convertirse en un number

//-- Arrays
//Se pueden definir los tipos de arreglos, estos pueden ser de un solo tipo o combinados.
const conteo: number[] = [1, 2, 3, 4, 5, 6];
const palabras: string[] = ['letra', 'casa', 'cosa'];
const convinado: (number | string | boolean)[] = [12, 'doce', true]

//-- Tuples / Tuplas
//Sirve para determinar el tipo de dato de un arreglo segun la posicion del mismo.
const hero: [string, number, boolean, string] = ['Spider-man', 100, true, 'Tela Araña']

//Luego podemos asignarles otro valor pero respetando lo establecido:
hero[0] = 'Captain America';
hero[1] = 150;
hero[2] = false;
hero[3] = 'Mucha fuerza';

//-- Enum / Enumeraciones
//Podemos determinar cierto rango de valores:
enum AudioLevel { //Open Upper Case
    min = 1,
    medium = 5,
    max = 10
}

let currentAudio = AudioLevel.max

//-- Void / Vacios
//TS interpreta que no hay un valor de retorno, lo cual se puede usar para una funcion vacía.
function batman(): void {
    return;
}

const superman = (): void => {
    return;
}

//-- Never
//Sirve para determinar una funcion que va a terminar con un error
const error = (msg: string): (never | number) => {

    if (false) { 
        throw new Error(msg) 
    }

    return 1;
}

error('Auxilio')

//-- Null

//-- Undefined
