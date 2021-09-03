import { Header } from "./components/content/Header.js";
import { Loader } from "./components/Loader.js";
import { Posts } from "./components/posts/Posts.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("main");

  $root.innerHTML = "";

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  // el router es logica
  Router();
}
