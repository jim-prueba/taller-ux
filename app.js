const formulario = document.getElementById("form-biblioteca");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formulario.classList.add("validado");

  if (!formulario.checkValidity()) {
    mostrarMensaje("Revisa los campos obligatorios marcados en rojo.", "error");
    formulario.querySelector("input:invalid, select:invalid").focus();
    return;
  }

  mostrarMensaje("Guardando en la base de datos de la biblioteca...", "info");

  setTimeout(function () {
    mostrarMensaje("¡Listo! El libro ha sido registrado con éxito.", "exito");
    formulario.reset();
    formulario.classList.remove("validado");
  }, 1500);
});

formulario.addEventListener("reset", function (evento) {
  if (
    !confirm("¿Seguro que quieres limpiar todos los campos del formulario?")
  ) {
    evento.preventDefault();
    return;
  }
  mostrarMensaje("Formulario limpio. Puede empezar de nuevo.", "info");
});
