//*  https://developer.wordpress.org/rest-api/reference/

const NAME = "css-tricks",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`, // endopoint toda la info
  PER_PAGE = 6,
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  SEARCH,
  PER_PAGE,
  page,
};

// para usar el infiniteScroll debes usar la variable "PER-PAGE" de la documentation
// asignarla a "POST" y "SEARCH"
