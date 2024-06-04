document.addEventListener("DOMContentLoaded", function() {
    var showButton = document.querySelector(".span-open");
    var hideButton = document.getElementById("hideLoginForm");
    var loginSection = document.querySelector(".login");
  
    // Añade un event listener al elemento para mostrar el formulario
    showButton.addEventListener("click", function() {
      loginSection.classList.remove("hidden"); // Elimina la clase "hidden" del formulario
    });
  
    // Añade un event listener al botón para ocultar el formulario
    hideButton.addEventListener("click", function() {
      loginSection.classList.add("hidden"); // Agrega la clase "hidden" al formulario
    });
  });


  const loginForm = document.querySelector('#loginForm');
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#emailLogin').value;
    const password = document.querySelector('#passwordLogin').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser) {
      return alert('Usuario y/o contraseña incorectos')
    }
    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validUser))
    document.querySelector(".login").classList.add("hidden");
    document.querySelector(".cuenta").classList.remove("ocultar");
    document.querySelector(".acciones").classList.add("ocultar");
  })
  