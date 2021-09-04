// import api from "../helpers/wp_api.js";
import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./posts/PostCard.js";

export function Router() {
  const d = document;
  const w = window;
  const $amin = d.getElementById("main");

  let { hash } = location;

  // $amin.innerHTML = null; //! esto aun me falta ver si es necesario

  if (!hash || hash === "#/") {
    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((el) => (html += PostCard(el)));
        // console.log(html);
        $amin.insertAdjacentHTML("beforeend", html);
        // d.querySelector("loader").display = "none";
      },
    });
  } else if (hash.includes("#/search")) {
    $amin.innerHTML = "busqueda";
  } else if (hash === "#/contacto") {
    $amin.innerHTML = "contacto";
  } else {
    $amin.innerHTML = "Post seleccionado";
  }
}
