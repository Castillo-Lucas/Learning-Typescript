//----------------- Clases en Typescript ---------------

//-- Definicion de una clase basica y cordta en Typescript.
//Pdemos definir una clase de la siguiente manera:

class Avenger {
  //private name: string;  Todos los "private" se pueden obviar en declararlos aca ya que se puede delcarar directamente en el consturctor.
  //private team: string;
  //public realName?: string;
  static age: number = 35; //Al ser una propiedad estatica se debe declarar si o si aca

  constructor(
    public name: string,
    public team: string,
    public realName?: string
  ) {}

  protected bio() {
    //Al metodo "bio" si no le declaramos nada antes de declararlo entonces es publico, si queresmos que sea privado hay que declararle "private" antes.
    return `${this.name} esta en el equipo de ${this.team}!!!`;
  } //En caso de que se quiera heredar esta clase y este metodo, al metodo debemos declararle "protected" antes de inciar el mismo metodo.
}
const antman: Avenger = new Avenger("Antman", "Captain", "Scott Lang");

//-- Herencia, super y extend.
//En caso de que se quiera crear una nueva clase y que herede todas las propiedades del padre se lo debe hacer de la siguiente manera:
class Xmen extends Avenger {
  constructor(name: string, realName: string, public isMutan: boolean) {
    super(name, realName); //Es obligatorio delcarar el super cada vez que se hereda un constuctor
    console.log("Constructo Xman llamao");
  }

  //-- GET
  //Este metodo no recibo ningun valor pero siempre devuelve algo:
  get fullName() {
    return `${this.name} ${this.realName}`;
  }

  //-- SET
  //Este metodo recibo un valor, no devuelve nada pero siempre establece algun valor. Solo puede recibr un solo argumento
  set fullName(name: string) {
    //Se puede establecer cierta logica antes de establecer algo
    if (name.length < 3) {
      throw new Error("El nombre debe ser mayor a 3 letras");
    }
    this.name = name;
  }

  //-- METODO
  getBioDesdeXmen() {
    //Para poder heredar el metodo "bio" fue necesario declarar "protected" antes de inicar "bio"
    console.log(super.bio());
  }
}

const wolverine = new Xmen("Wolverine", "Logan", true);
/*Para poder acceder al metodo de la clase hijo, la que hereda, debemos llamaro asi:
  wolverine.getBioDesdeXmen()
*/

/*Para acceder al Get lo podemos hacer asi:
  console.log(wolverine.fullName)
*/

/*Para acceder al Set lo podemos hacer asi:
  wolverine.fullName='Lucas'
  console.log(wolverine.fullName)
*/

