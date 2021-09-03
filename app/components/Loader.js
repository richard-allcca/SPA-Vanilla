export function Loader() {
  const $loader = document.createElement("img");

  $loader.classList.add("loader");
  $loader.alt = "Cargando...";
  $loader.src = "app/assets/Spinner-1s-244px.svg";

  return $loader;
}
