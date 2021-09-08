export async function ajax(props) {
  // no usamos {error} para generar un error generico
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // d.querySelector(".loader").style.display = "none";
      cbSuccess(json);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un Error al acceder a la API";

      document.getElementById("main").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${message}</p>
        </div>`;
      // document.querySelector(".loader").style.display = "none";
      // console.log(err);
    });
  // document.querySelector(".loader").style.display = "none";
}
