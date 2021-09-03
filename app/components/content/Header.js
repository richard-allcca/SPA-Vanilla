import { Title } from "./content_header/Title.js";
import { Menu } from "./content_header/Menu.js";
import { SearchForm } from "./content_header/SearchForm.js";

export function Header() {
  const $header = document.createElement("header");

  $header.classList.add("header");
  $header.appendChild(Title());
  $header.appendChild(Menu());
  $header.appendChild(SearchForm());

  return $header;
}
