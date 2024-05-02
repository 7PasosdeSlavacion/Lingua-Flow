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
      window.location.href = "usuario.html";
      break;

    case "principal":
      window.location.href = "index.html";
      break;

    default:
      window.location.href = "error.html";
      break;
  }
}








