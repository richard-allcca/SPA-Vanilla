export function Menu() {
  const $nav = document.createElement("nav");
  $nav.classList.add = "menu";
  $nav.innerHTML = `
  <a href="#/">Home</a>
  <span></span>
  <a href="#/search">Busqueda</a>
  <span></span>
  <a href="#/contacto">Contacto</a>
  <span></span>
  <a href="https://github.com/richard-allcca" 
  rel="no-opener noreferrer" target="_blank" >Repositorio en Git</a>
  `;
  return $nav;
}
