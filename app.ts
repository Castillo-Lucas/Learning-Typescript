//----------------- Depuración de errores y el archivo tsconfig.json ---------------

//-- ¿Que es el archivo tsconfig.json y para que nos puede servir?
//-- ¿Que es el archivo tsconfig.json y para que nos puede servir?
/*El archivo tsconfig.json sirve para confirurar la esctructura de trabajo de Typesript. Por ejemplo, si hacemos console.log
el navegador va a mostrar el mensaje pero va a hacer refencia al archivo .js y mostrar en que linea se declaro ese metodo. Pero
eso no nos sirve ya que estamos trabajando en Typescript, entonces, para poder solucionar este inconveniente debemos hacert una pequeña
configuracion en el arvhico tsconfig.json quitandole el comentario al siguiente comando

    "sourceMap": true,  

Esto va a permitir que al mostrar un mensaje en el navegador se muestre en que linea del archivo .ts se declaro. Otro punto para
tener en cuenta es que esto va a crear un archivo .map por cada archivo .ts que tengamos*/

//-- Remover comentarios en el archivo .js
/*Si hacemos comentarios en el archivo .ts se transpilan al archivo .js y se muestran en el mismo. Para evitar que esto pase debemos hacer
un pequeño cambio en el arvhico tsconfig.json descomentando el siguiente comando

    "removeComments": true, 

Ahora en el archivo .js no se van a ver los comentarios.
*/

//-- Incluir o excluir carpetas y/o archivos
/*Podemos excluir o incluir carpetas y archivos para que Typescript no haga nada o si. Para ello, debemos ir al final del 
archivo tsconfig.json y agregarle el "exclude" o el "include" y dentro de los mismos declara las carpetas o archivos 
que queremos excluir o inncluir 

            Completeness 
            "skipDefaultLibCheck": true,                      Skip type checking .d.ts files that are included with TypeScript.
            "skipLibCheck": true                              Skip type checking all .d.ts files.
        },
        "exclude":[
            "ejemplo",
            "ejemplo.ts"
        ],
        "include":[
            "node_modules"
        ],        
    }
*/

//-- Outfile / Archivo de salid
/*Cuando estamos trabajando en Vanila JS debemos tratar de que todo los archivos .ts y .js sean uno solo y elminar´
 todos los archivos .js y .map, no sucede lo mismo cuando trabajamos con React. Para lograr esto debemos descomentar
 el siguiente comando en el archivo tsconfig.json y agregarle el nombre del archivo de salida que en este caso se llamar "main.js"
 
  "outFile": "./main.js",  

Esto va a crear el arvhivo main.js y el arvhico main.js.map los cuales no debemos eliminarlos.

Es posible que se debe modificar el siguiente comando en el archivo tsconfig.json
  
  "module": "commonjs",

  Si hay algun error, se debe reemplazar "commonjs" por "amd"

*/
