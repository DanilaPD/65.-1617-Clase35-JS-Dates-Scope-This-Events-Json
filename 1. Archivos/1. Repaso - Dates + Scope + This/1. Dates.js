//? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
//? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//? https://www.w3schools.com/jsref/jsref_obj_date.asp

const newDate = new Date();

console.log(newDate);
console.log(typeof newDate);

const now = Date.now();
console.log(now);
//? Con el https://www.epochconverter.com/
// Abrimos el "epochconverter" y le pasamos el dato que nos salió en la terminal.

//? https://www.epochconverter.com/programming/#javascript

//* Formas más legibles de hacer fechas:

const newDate2 = Date.parse("Mar 16, 2022");
console.log(newDate2);

//* Nos va a devolver lo mismo realmente, pero es más exacto:

const newDate3 = Date.UTC(2022, 2, 16, 19, 59, 20, 500);
console.log(newDate3);

//! Buena fórmula: console.log(Math.floor(new Date().getTime()/1000.0))

//* Fecha legible para humanos:

const newDate4 = Date(2022, 2, 16, 19, 59, 20, 500);
console.log(newDate4);

const date5 = new Date();
const today = date5.getDate();
console.log(today);