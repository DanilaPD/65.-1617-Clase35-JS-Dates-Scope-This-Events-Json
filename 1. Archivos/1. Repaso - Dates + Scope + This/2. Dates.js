//? https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript
//! Todos los formatos de fecha de acuerdo al país.

const d = new Date();
console.log(d);

console.log(d.toLocaleDateString()); // Formato de la máquina en que estén.

const options = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric",
};

const toLocale = (date) => date.toLocaleDateString("es", options);

console.log(toLocale(d));