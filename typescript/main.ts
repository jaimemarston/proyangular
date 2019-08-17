var name = '';

// js es6
let myVar2 = "";
const myName = "Luis";

// Bloque If
// var es global
// let es local

let count = 0; 

if (true) {
    let count = 1;
    console.log(count); // var: 1 let: 1
}

console.log(count); // var: 1 let: 0

// typescript
let myAny: any = "";
let myString: string = "";
let myNumber: number = 0; // Double, Integer, Float
let myBoolean: boolean = true; // true false

let myListAny: any[] = ["Luis", true, 12];
let myListString: string[] = ["A", "B"];
let myListNumber: number[] = [0, 2];
let myListBoolean: boolean[] = [true, false];

let myObject: object = {name: "Luis", lastname: "Vilcarromero"};
let myObject2: { name: string } = {name: "Luis"};

// Interface como tipo de dato
interface User {
    name: string;
    lastname?: string; // ? representa un atributo opcional
}

let myUser: User = {name: "Luis"};

// Tipos de datos personalizados
type bit = 0 | 1;

let myBit: bit;

let myDate: Date = new Date();

// Clases como tipo de dato
// Herencia
class Medic {
    getPosition() {
        return 'Medico'
    }
}
class Person extends Medic {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name
    }

    // metodos
    getFullname(): string {
        return this.name;
    }
}

let myPerson: Person = new Person("Luis")
myPerson.getPosition()

// funciones
// es5
function myFunction() {

}

var myFunction2 = function() {

}

// es6+
const myArrowFunction = (): void => {

}

const isValid = (numero: number): boolean => numero > 5;


