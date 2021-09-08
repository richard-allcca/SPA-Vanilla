# Estructura de SPA
1. Estructura de Archivos
  1. carpeta del proyecto - spa
2. SPA 
   1. Archivo index.html
   2. carpeta app
      1. carpeta assets
         1. loader
         2. favicon
         3. styles
      2. carpeta components
      3. carpeta helpers
   3. Archivo App.js
   4. Archivo index.js
3. PROCESO 
   1. index.html
   2. estilos iniciales (reseto, enlaces, img)
   3. helpers - wp_api.js  - difinir constantes para rutas
   4. helpers - ajax.js  - funcion de peticiones
   5. components - header - title, postCard, loader
   6. components - Post - PostCard 
   7. components - Router
      1. Home
      2. Select Post - Importante el video 153 

# scroll infinito
1. agregamos la const PER_PAGE 
2. agregamos la variable page
3. reiniciamos page en el evento del hash en index
4. creamos la funcion InfiniteScroll en helpers y la ejecutamos en App

//*  https://developer.wordpress.org/rest-api/reference/

const NAME = 'css-tricks',
  DOMAIN = `HTTPS://${NAME}.COM`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,// endopoint toda la info
  PER_PAGE = 6,
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&search=`;

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
  page
}
