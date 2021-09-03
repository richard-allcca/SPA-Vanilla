import api from "../../../helpers/wp_api.js";

export function Title() {
  const $div = document.createElement("div");
  const $h1 = document.createElement("h1");
  const $h2 = document.createElement("h2");

  $h1.innerHTML = "SPA con Vanilla JS";
  $h2.innerHTML = `
  <a href="${api.DOMAIN}" target="_blank" rel="noopener">
  ${api.NAME.toUpperCase()}
  </a>`;
  $div.appendChild($h1);
  $div.appendChild($h2);

  return $div;
}
