document.addEventListener("DOMContentLoaded", function () {
  var showButton = document.querySelector(".btn-header");
  var hideButton = document.getElementById("hidesignupForm");
  var signupSection = document.querySelector(".signup");

  // Añade un event listener al botón para abrir el formulario
  showButton.addEventListener("click", function () {
    signupSection.classList.remove("hidden"); // Elimina la clase "hidden" del formulario
  });

  // Añade un event listener al botón para ocultar el formulario
  hideButton.addEventListener("click", function () {
    signupSection.classList.add("hidden"); // Agrega la clase "hidden" al formulario
  });
});

const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const pass = document.querySelector('#password').value;

  const Users = JSON.parse(localStorage.getItem('users')) || []; 
  const isUserRegistered = Users.find(user => user.email === email);
  if (isUserRegistered){
    return alert('Usuario ya Registrado');
  }

  Users.push({name: name, email: email, password: pass});
  localStorage.setItem('users', JSON.stringify(Users));
  alert('Registro Exitoso');

    // Ocultar el formulario de registro y mostrar el formulario de inicio de sesión
    document.querySelector(".signup").classList.add("hidden");
    document.querySelector(".login").classList.remove("hidden");

});
