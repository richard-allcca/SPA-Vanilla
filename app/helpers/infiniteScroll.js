import { PostCard } from "../components/posts/PostCard.js";
import { SearchCard } from "../components/posts/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export function InfiniteScroll() {
  const d = document;
  const w = window;

  let query = localStorage.getItem("wpSearch");
  let apiUrl;
  let Component; // High Order Component

  w.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    let { hash } = w.location;

    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++;

      if (!hash || hash === "#/") {
        apiUrl = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
      } else if (hash.includes("#/search")) {
        apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      d.querySelector(".loader").style.display = "block";

      await ajax({
        url: apiUrl,
        cbSuccess: (post) => {
          let html = "";
          post.forEach((el) => (html += Component(el)));
          d.getElementById("main").insertAdjacentHTML("beforeend", html);
          d.querySelector(".loader").style.display = "none";
        },
      });
      // fin de scrollTop, clientHeight, scrollHeight
    }
    // fin de evento
  });
}
