import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function InifiniteScroll() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let query = localStorage.getItem("wpSearch"),
    apiUrl,
    Component; //* High Order Component

  //? dependiendo de la variable es el contenido que se va a cargar
  //? esta function tiene que ser async por el await del ajax
  w.addEventListener("scroll", async (e) => {

    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
    //? obtenemos (distancia del top, px del vh, total del scroll)
      // console.log(scrollTop, clientHeight, scrollHeight, hash);
      { hash } = w.location;

    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++; //asigna nuevo valor para mostrar contenido adicional

      if (!hash || hash === "#/") {
        //? si esta en home carga más post normal
        apiUrl = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
      } else if (hash.includes("#/search")) {
        //? si esta en la pagina de busqueda le pasamos el query
        apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      await ajax({
        url: apiUrl,
        success: (posts) => {
          //* metodo del profe
          // let html = "";
          // posts.forEach(el => html += PostCard(el));
          // $main.innerHTML = html;
          //* mi metodo refactorizado
          //? renderizamos los post con el components superior "Component" q guarda PostCard o SearchCard
          posts.forEach((el) => {
            // console.log(Component(el));
            // $main.innerHTML = Component(el)
            $main.insertAdjacentHTML("beforeend", Component(el));
          });
        },
      });
    }
  });
}
