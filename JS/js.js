document.addEventListener("DOMContentLoaded", function () {
  var navbarItems = document.querySelectorAll(".header .navbar ul li");

  navbarItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var dropdown = this.querySelector("ul");
      if (dropdown) {
        dropdown.style.display = "block";
      }
    });

    item.addEventListener("mouseleave", function () {
      var dropdown = this.querySelector("ul");
      if (dropdown) {
        setTimeout(function () {
          dropdown.style.display = "none";
        }, 300); // Ajusta el tiempo de espera en milisegundos (300 = 0.3 segundos)
      }
    });
  });
});

const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  document.querySelector(".cuenta").classList.add("ocultar");
  document.querySelector(".acciones").classList.romove("ocultar");
} else {
  document.querySelector(".cuenta").classList.remove("ocultar");
  document.querySelector(".acciones").classList.add("ocultar");
}

const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
  alert("Hasta Pronto!");
  localStorage.removeItem("login_success");
  window.location.href = "index.html";
});

function enviar(id) {
  switch (id) {
    case "cuenta":
      window.location.href = "/usuario.html";
      break;

    case "principal":
      window.location.href = "/index.html";
      break;

    case "basico":
      window.location.href = "/BASICO/index.html";
      break;

    case "intermedio":
      window.location.href = "/INTERMEDIO/index.html";
      break;

    case "1.1":
      window.location.href = "/BASICO/TEST/personal-pronouns.html";
      break;

    case "1.2":
      window.location.href = "/BASICO/TEST/possessive.html";
      break;

    default:
      window.location.href = "/error.html";
      break;
  }
}

const input_buscar = document.getElementById("busqueda");

input_buscar.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    var termino = document.getElementById("busqueda").value.toLowerCase();

    var paginaHTML = termino + ".html";
    var http = new XMLHttpRequest();
    http.open('HEAD', paginaHTML, false);
    http.send();

    if (http.status != 404) {
      window.location.href = paginaHTML;
    } else {
      buscarEnTexto(termino);
    }
  }
});


function buscar() {
  // Obtener el término de búsqueda
  var termino = document.getElementById("busqueda").value.toLowerCase();

  // Verificar si existe una página HTML con el nombre especificado
  var paginaHTML = termino + ".html";
  var http = new XMLHttpRequest();
  http.open('HEAD', paginaHTML, false);
  http.send();

  if (http.status != 404) {
    // Si existe la página HTML, redirigir a ella
    window.location.href = paginaHTML;
  } else {
    // Si no existe la página HTML, buscar el término en el texto de la página actual
    buscarEnTexto(termino);
  }
}

function buscarEnTexto(termino) {
  // Buscar el término en el texto de la página actual
  var contenido = document.body.textContent.toLowerCase();
  if (contenido.includes(termino)) {
    // Si se encuentra el término, hacer scroll hasta el primer resultado
    var elementos = document.getElementsByTagName('*');
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].textContent.toLowerCase().includes(termino)) {
        elementos[i].scrollIntoView();
        break;
      }
    }
  } else {
    // Si no se encuentra el término, mostrar un mensaje
    console.log("No se encontraron resultados en la página actual.");
  }
}













