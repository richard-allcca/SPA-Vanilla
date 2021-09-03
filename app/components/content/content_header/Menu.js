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
  <a href="https://aprendejavascript.org" 
  rel="no-opener noreferrer" target="_blank" >Aprende JS</a>
  `;
  return $nav;
}
