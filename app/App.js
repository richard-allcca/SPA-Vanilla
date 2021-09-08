import { Header } from "./components/content/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/posts/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infiniteScroll.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = "";

  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  // el router es logica
  Router();
  InfiniteScroll();
}
