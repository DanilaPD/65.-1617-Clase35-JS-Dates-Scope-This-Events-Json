//? https://www.w3schools.com/js/js_this.asp

const telefono = {
  marca: "Samsung",
  nucleos: 8,
  precio: 50000,
  memoria: "6gb",
  tamaño: "large",
  camaras: 3,
  promo: function () {
    const precioPromo =
      `¡Conseguí tu celu por solo $${(this.precio / 1.2).toFixed(2)}! ¡Antes al ${Object.keys(this)[2]} de $${this.precio}!`;
    console.log(precioPromo);
  },
};

telefono.promo();
console.log(telefono.camaras);