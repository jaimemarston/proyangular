var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var name = '';
// js es6
var myVar2 = "";
var myName = "Luis";
// Bloque If
// var es global
// let es local
var count = 0;
if (true) {
    var count_1 = 1;
    console.log(count_1); // var: 1 let: 1
}
console.log(count); // var: 1 let: 0
// typescript
var myAny = "";
var myString = "";
var myNumber = 0; // Double, Integer, Float
var myBoolean = true; // true false
var myListAny = ["Luis", true, 12];
var myListString = ["A", "B"];
var myListNumber = [0, 2];
var myListBoolean = [true, false];
var myObject = { name: "Luis", lastname: "Vilcarromero" };
var myObject2 = { name: "Luis" };
var myUser = { name: "Luis" };
var myBit;
var myDate = new Date();
// Clases como tipo de dato
// Herencia
var Medic = /** @class */ (function () {
    function Medic() {
    }
    Medic.prototype.getPosition = function () {
        return 'Medico';
    };
    return Medic;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    // metodos
    Person.prototype.getFullname = function () {
        return this.name;
    };
    return Person;
}(Medic));
var myPerson = new Person("Luis");
myPerson.getPosition();
// funciones
// es5
function myFunction() {
}
var myFunction2 = function () {
};
// es6+
var myArrowFunction = function () {
};
var isValid = function (numero) { return numero > 5; };
