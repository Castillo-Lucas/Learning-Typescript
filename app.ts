//----------------- Interfaces ---------------
//-- Las Interfaces son lo mismo que los types con la diferencia que el primero es extendible

interface hero {
  name: string;
  age?: number;
  powers: string[];
  getName?: () => string;
}

//Y ahora podemos llamar a "flash" y "superman" y declarar que son arreglo de tipo "hero".
let flash: hero = {
  name: "Barry Alen",
  age: 24,
  powers: ["Super velocidad", "Viajar en el tiempo"],
};

let superman: hero = {
  name: "Clark Kent",
  age: 35,
  powers: ["Super velocidad", "Super fuerza"],
};

//-- Estructuras de Interfaces complejas
/*Cuando tenemos interfaces/objetos que tienen valores con mas de un nivel es recomendable que al segundo nivel 
se lo declare a travez de una nueva interface*/
interface client {
  name: string;
  age?: number;
  adress: Adress; //En este caso al haber segundo nivel es necesario crear una nueva interfaz donde se delcara todo.
}

interface Adress {
  //Se declara nueva interface para "adress" de "client"
  id: number;
  zip: number;
  city: string;
}

const clientOne: client = {
  name: "Lucas",
  age: 32,
  adress: {
    id: 25,
    zip: 5020,
    city: "Cordoba",
  },
};

const clientTwo: client = {
  name: "Romina",
  age: 36,
  adress: {
    id: 25,
    zip: 5020,
    city: "Cordoba",
  },
};

