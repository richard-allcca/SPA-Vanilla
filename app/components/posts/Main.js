export function Main() {
  const $posts = document.createElement("main");
  $posts.id = "main";

  if (!location.hash.includes("search")) $posts.classList.add("grid-fluid");

  $posts.classList.add("post-find");

  return $posts;
}
