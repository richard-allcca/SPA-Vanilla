export function SearchForm() {
  const d = document;
  const $form = d.createElement("form");
  const $input = d.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "buscar...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  // mantener el contenido de busqueda en el input
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  // evento para eliminar el contenido del input
  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!$input.value) localStorage.removeItem("wpSearch");
  });

  //  evento para hacer la busqueda
  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;

    e.preventDefault();

    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
