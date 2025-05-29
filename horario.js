document.addEventListener("DOMContentLoaded", () => {
  const celdas = document.querySelectorAll("#tabla-horario td");

  celdas.forEach(celda => {
    celda.addEventListener("click", () => {
      const texto = prompt("¿Qué materia quieres agregar aquí?");
      if (texto !== null) {
        celda.textContent = texto;
      }
    });
  });
});
const botonDescargar = document.getElementById("descargar-btn");

botonDescargar.addEventListener("click", () => {
  const tabla = document.querySelector(".tabla-container");

  html2canvas(tabla).then(canvas => {
    const link = document.createElement("a");
    link.download = "mi_horario.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
