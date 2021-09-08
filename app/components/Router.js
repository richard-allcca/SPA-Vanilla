// import api from "../helpers/wp_api.js";
import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./posts/PostCard.js";
import { SelectPost } from "./posts/SelectPost.js";
import { SearchCard } from "./posts/SearchCard.js";
import { ContactForm } from "./form_contact/ContacForm.js";

export async function Router() {
  const d = document;
  // const w = window;
  const $main = d.getElementById("main");

  let { hash } = location;

  // $main.innerHTML = null; //! esto aun me falta ver si es necesario
  // console.log(api.POSTS);

  // =================================================================
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts[0].id);
        let html = "";
        posts.forEach((el) => (html += PostCard(el)));
        $main.insertAdjacentHTML("beforeend", html);
      },
    });
    // =================================================================
  } else if (hash.includes("#/search")) {
    let search = localStorage.getItem("wpSearch");

    if (!search) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}/${search}`,
      cbSuccess: (posts) => {
        let html = "";
        if (posts.length === 0) {
          html = `
          <p class="error">
            No existen resultados de búsqueda para el término
            <mark>${search}</mark>
          </p>
          `;
        } else {
          posts.forEach((el) => (html += SearchCard(el)));
        }
        $main.insertAdjacentHTML("beforeend", html);
      },
    });
    // =================================================================
  } else if (hash === "#/contacto") {
    $main.insertAdjacentElement("beforeend", ContactForm());
    // =================================================================
  } else {
    let id = localStorage.getItem("wp-id");
    // console.log(`${api.POST}/${id}`);
    await ajax({
      url: `${api.POST}/${id}`,
      cbSuccess: (post) => {
        $main.insertAdjacentHTML("beforeend", SelectPost(post));
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
