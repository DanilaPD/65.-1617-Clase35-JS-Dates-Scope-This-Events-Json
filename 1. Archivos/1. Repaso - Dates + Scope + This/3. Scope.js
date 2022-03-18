//? https://www.w3schools.com/js/js_scope.asp

{
  // Este es un bloque de código: Con "let" y "const" esas variables quedan encapsuladas, con "var", no, por lo cual, siempre vamos a poder acceder a ella, sin importar el "scope".
  var hola = 157;
  let chau = 5465;
}
// Va a funcionar:
console.log(hola);

// Va a tirar error:
//* console.log(chau);

const probandoScope = () => {
  let saludo = "¡Probando Scope dentro de una función!";
  return saludo;
  // Aunque sea un "var", el "function scope" ya existía. No puedo acceder directamente:
  var cosita = "cosas";
  return cosita;
};

// Podemos acceder a través de la función porque entramos a ese bloque de código:
console.log(probandoScope());

// Si llamo directamente a la variable, no puedo acceder a ella porque está dentro de la función, no afuera:
//* console.log(saludo); // Va a tirar error.

//* console.log(cosita); // Va a tirar error.