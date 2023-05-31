//----------------- TYPESCRIPT ---------------

//-- PRIMERAS VARIABLES
//Podemos declarar las primeras variables de la siguiente manera:
const msg: string = "Holas mundos, soy Lucas";

console.log(msg);

/*Una vez escrito el codigo en TS se debe transpilar para que se traduzca a JS.Para ello, debemos insertar 
el siguinete comando en consola:

    tsc app

 Esto va a crear un archivo llamado app.js donde pondra todo el codigo JS. Poro otro lado, en HTML, se debe 
 insertar el siguiente script:

 <script src="app.js"></script>
*/

//-- TSCONFIG.JSON
/*Dentro de la carpeta del proyecto se debe escribir el siguiente comando en consola:

    tsc --init

 Esto va a crear un archivo llamado tsconfig.json donde estaran indicadas todas las configuraciones de TS.
 En este archivo vamos a configurar el objetivo, el archivo de salida y que tan esctricto sea TS.

 Teniendo este archivo creado ya no sera necesario hacer el "tsc app" si no que simplemente sera necesario
  escribir en consola:

    tsc
*/

//--- WATCH MODE
/*Esta herramiento de TS es como un LiveServer pero que transpila constantemente declarado en TS. Para poder
usarlo se debe escribir el siguiente comando en consola:

    tsc --watch

O si no:

    tsc --w

Luego se debe cerrar la terminal con la "X" y no con el icono del "tacho de basura" por que 
termina la operacion. 

*/
