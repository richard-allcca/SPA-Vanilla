// import api from "../helpers/wp_api.js";
import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./posts/PostCard.js";

export function Router() {
  const d = document;
  const w = window;
  const $posts = d.getElementById("posts");

  let { hash } = location;

  // $posts.innerHTML = null; //! esto aun me falta ver si es necesario

  if (!hash || hash === "#/") {
    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((el) => (html += PostCard(el)));
        // console.log(html);
        $posts.insertAdjacentHTML("beforeend", html);
        // d.querySelector("loader").display = "none";
      },
    });
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "busqueda";
  } else if (hash === "#/contacto") {
    $posts.innerHTML = "contacto";
  } else {
    $posts.innerHTML = "Post seleccionado";
  }
}
