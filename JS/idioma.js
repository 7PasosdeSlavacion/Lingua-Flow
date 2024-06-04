    const guardarIdiomaEnLocalStorage = (idioma) => {
        localStorage.setItem('idioma', idioma);
      };
      
      const cargarIdiomaDesdeLocalStorage = () => {
        const idiomaGuardado = localStorage.getItem('idioma');
        if (idiomaGuardado) {
          changeLanguage(idiomaGuardado);
        }
      };
      
      const changeLanguage = async (language) => {
        const requestJson = await fetch(`./JSON/${language}.json`);
        const texts = await requestJson.json();
      
        for (const textChange of textsChange) {
          const section = textChange.dataset.section
          const value = textChange.dataset.value
      
          textChange.innerHTML = texts[section][value];
        }
      
        guardarIdiomaEnLocalStorage(language);
      };
      
      const flagsElement = document.getElementById("flags");
      const textsChange = document.querySelectorAll("[data-section]");
      
      flagsElement.addEventListener("click", (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
      });
      
      document.addEventListener('DOMContentLoaded', () => {
        cargarIdiomaDesdeLocalStorage();
      });
      
