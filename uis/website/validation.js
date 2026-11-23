// Validación del formulario de inscripción a formación corporativa de Nexova Solutions.
// No envía datos a ningún servidor: valida en el navegador y muestra un resumen al usuario.

(function () {
  "use strict";

  var formulario = document.getElementById("formulario-inscripcion");
  if (!formulario) return;

  var resumen = document.getElementById("resumen-errores");
  var exito = document.getElementById("mensaje-exito");

  var SECTORES = ["tecnologia", "retail", "servicios-financieros", "otro"];
  var SEDES = ["valencia", "miami"];
  var TEMATICAS = ["liderazgo", "comunicacion", "gestion-de-equipos"];
  var MODALIDADES = ["curso", "taller", "webinar"];

  function texto(id) {
    var campo = document.getElementById(id);
    return campo ? campo.value.trim() : "";
  }

  function pintarError(idCampo, idError, mensaje) {
    var campo = document.getElementById(idCampo);
    var destino = document.getElementById(idError);
    if (destino) destino.textContent = mensaje;
    if (campo) {
      if (mensaje) {
        campo.setAttribute("aria-invalid", "true");
        campo.classList.add("border-red-600");
      } else {
        campo.removeAttribute("aria-invalid");
        campo.classList.remove("border-red-600");
      }
    }
  }

  function limpiarErrores() {
    var mensajes = formulario.querySelectorAll("p[role='alert']");
    for (var i = 0; i < mensajes.length; i++) mensajes[i].textContent = "";
    var invalidos = formulario.querySelectorAll("[aria-invalid='true']");
    for (var j = 0; j < invalidos.length; j++) {
      invalidos[j].removeAttribute("aria-invalid");
      invalidos[j].classList.remove("border-red-600");
    }
    if (resumen) resumen.textContent = "";
    if (exito) {
      exito.textContent = "";
      exito.classList.add("hidden");
    }
  }

  var SOLO_LETRAS = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/;
  var ALFANUMERICO = /^[A-Za-z0-9]+$/;
  var CORREO = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

  function validarTexto(idCampo, idError, etiqueta, minimo, maximo, soloLetras) {
    var valor = texto(idCampo);
    if (valor === "") {
      pintarError(idCampo, idError, "Indica " + etiqueta + ".");
      return false;
    }
    if (valor.length < minimo || valor.length > maximo) {
      pintarError(idCampo, idError, etiqueta.charAt(0).toUpperCase() + etiqueta.slice(1) + " debe tener entre " + minimo + " y " + maximo + " caracteres.");
      return false;
    }
    if (soloLetras && !SOLO_LETRAS.test(valor)) {
      pintarError(idCampo, idError, "Usa solo letras, espacios, guiones o apóstrofos en " + etiqueta + ".");
      return false;
    }
    pintarError(idCampo, idError, "");
    return true;
  }

  function validarSeleccion(idCampo, idError, etiqueta, permitidos) {
    var valor = texto(idCampo);
    if (permitidos.indexOf(valor) === -1) {
      pintarError(idCampo, idError, "Selecciona " + etiqueta + ".");
      return false;
    }
    pintarError(idCampo, idError, "");
    return true;
  }

  function validarNumero(idCampo, idError, etiqueta, minimo, maximo) {
    var valor = texto(idCampo);
    if (valor === "") {
      pintarError(idCampo, idError, "Indica " + etiqueta + ".");
      return false;
    }
    var numero = Number(valor);
    if (!isFinite(numero) || Math.floor(numero) !== numero) {
      pintarError(idCampo, idError, etiqueta.charAt(0).toUpperCase() + etiqueta.slice(1) + " debe ser un número entero.");
      return false;
    }
    if (numero < minimo || numero > maximo) {
      pintarError(idCampo, idError, etiqueta.charAt(0).toUpperCase() + etiqueta.slice(1) + " debe estar entre " + minimo + " y " + maximo + ".");
      return false;
    }
    pintarError(idCampo, idError, "");
    return true;
  }

  function validarCif() {
    var valor = texto("empresa-cif");
    if (valor === "") {
      pintarError("empresa-cif", "error-empresa-cif", "Indica el CIF o número de identificación fiscal.");
      return false;
    }
    if (!ALFANUMERICO.test(valor) || valor.length < 8 || valor.length > 15) {
      pintarError("empresa-cif", "error-empresa-cif", "El CIF debe tener entre 8 y 15 caracteres, solo letras y números.");
      return false;
    }
    pintarError("empresa-cif", "error-empresa-cif", "");
    return true;
  }

  function validarCorreo() {
    var valor = texto("contacto-email");
    if (valor === "") {
      pintarError("contacto-email", "error-contacto-email", "Indica un correo electrónico.");
      return false;
    }
    if (!CORREO.test(valor)) {
      pintarError("contacto-email", "error-contacto-email", "El correo debe tener el formato nombre@empresa.com.");
      return false;
    }
    pintarError("contacto-email", "error-contacto-email", "");
    return true;
  }

  function validarTelefono() {
    var valor = texto("contacto-telefono");
    var digitos = valor.replace(/[^0-9]/g, "");
    if (valor === "") {
      pintarError("contacto-telefono", "error-contacto-telefono", "Indica un teléfono de contacto.");
      return false;
    }
    if (digitos.length < 9 || digitos.length > 15) {
      pintarError("contacto-telefono", "error-contacto-telefono", "El teléfono debe tener entre 9 y 15 dígitos.");
      return false;
    }
    pintarError("contacto-telefono", "error-contacto-telefono", "");
    return true;
  }

  function validarFecha() {
    var valor = texto("programa-fecha");
    if (valor === "") {
      pintarError("programa-fecha", "error-programa-fecha", "Indica una fecha preferida de inicio.");
      return false;
    }
    var elegida = new Date(valor + "T00:00:00");
    if (isNaN(elegida.getTime())) {
      pintarError("programa-fecha", "error-programa-fecha", "La fecha no es válida.");
      return false;
    }
    var hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (elegida <= hoy) {
      pintarError("programa-fecha", "error-programa-fecha", "La fecha de inicio debe ser posterior a hoy.");
      return false;
    }
    pintarError("programa-fecha", "error-programa-fecha", "");
    return true;
  }

  function validarSede() {
    var marcada = formulario.querySelector("input[name='sede_nexova']:checked");
    var destino = document.getElementById("error-sede-nexova");
    if (!marcada || SEDES.indexOf(marcada.value) === -1) {
      if (destino) destino.textContent = "Selecciona la sede de Nexova que te atiende.";
      return false;
    }
    if (destino) destino.textContent = "";
    return true;
  }

  function validarConsentimiento() {
    var casilla = document.getElementById("consentimiento");
    var destino = document.getElementById("error-consentimiento");
    if (!casilla || !casilla.checked) {
      if (destino) destino.textContent = "Debes autorizar el tratamiento de los datos para enviar la solicitud.";
      return false;
    }
    if (destino) destino.textContent = "";
    return true;
  }

  function validarTodo() {
    var resultados = [
      validarTexto("empresa-nombre", "error-empresa-nombre", "la razón social de la empresa", 2, 120, false),
      validarCif(),
      validarSeleccion("empresa-sector", "error-empresa-sector", "el sector de actividad", SECTORES),
      validarNumero("empresa-empleados", "error-empresa-empleados", "el número de empleados", 1, 100000),
      validarSede(),
      validarTexto("contacto-nombre", "error-contacto-nombre", "el nombre", 2, 60, true),
      validarTexto("contacto-apellidos", "error-contacto-apellidos", "los apellidos", 2, 80, true),
      validarTexto("contacto-cargo", "error-contacto-cargo", "el cargo en la empresa", 2, 80, false),
      validarCorreo(),
      validarTelefono(),
      validarSeleccion("programa-tematica", "error-programa-tematica", "la temática del programa", TEMATICAS),
      validarSeleccion("programa-modalidad", "error-programa-modalidad", "la modalidad", MODALIDADES),
      validarNumero("programa-participantes", "error-programa-participantes", "el número de participantes", 1, 500),
      validarFecha(),
      validarTexto("programa-objetivos", "error-programa-objetivos", "los objetivos de la formación", 20, 600, false),
      validarConsentimiento()
    ];
    var fallos = 0;
    for (var i = 0; i < resultados.length; i++) if (!resultados[i]) fallos++;
    return fallos;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limpiarErrores();
    var fallos = validarTodo();

    if (fallos > 0) {
      if (resumen) {
        resumen.textContent = fallos === 1
          ? "Hay 1 campo con errores. Revisa el mensaje marcado en rojo."
          : "Hay " + fallos + " campos con errores. Revisa los mensajes marcados en rojo.";
      }
      var primero = formulario.querySelector("[aria-invalid='true']");
      if (primero && primero.focus) primero.focus();
      return;
    }

    var empresa = texto("empresa-nombre");
    var participantes = texto("programa-participantes");
    if (exito) {
      exito.textContent = "Solicitud validada. Hemos registrado la inscripción de " + participantes + " participante(s) de " + empresa + ". El equipo de Formación Corporativa te responderá al correo indicado.";
      exito.classList.remove("hidden");
    }
    formulario.reset();
  });

  var campos = formulario.querySelectorAll("input, select, textarea");
  for (var k = 0; k < campos.length; k++) {
    campos[k].addEventListener("blur", function () {
      if (resumen && resumen.textContent !== "") validarTodo();
    });
  }
})();
