export function SearchCard(props) {
  let { id, title, _embedded, url } = props;
  let slug = `#/${_embedded.self[0].slug}`;

  return `
    <article >
      <h2>${title}</h2>
      <p>
        <a href="${slug}" data-id="${id}">Ver Contenido</a>
      </p>
      <p>
        <a href="${url}" data-id="${id}" > Ver Publicación Original</a>
      </p>
    </article>
  `;
}
