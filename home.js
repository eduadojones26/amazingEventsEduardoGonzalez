import * as funcionesTotales from "./modules.js"

const urlbase = "https://aulamindhub.github.io"
const urlevetos = urlbase + "/amazing-api/events.json"
fetch(urlevetos)
.then(response => response.json())
.then(datos => {
    let events = datos.events;
    let targetas = document.getElementById("targetas");
    let categoria = document.getElementById("categoria");

    // Pintar todas las tarjetas 
    funcionesTotales.pintarcard(events, targetas);
    // Pintar checkboxes
    funcionesTotales.pintarche(events, categoria);
})

function detalle(id) {
    window.location.href = `http://127.0.0.1:5500/details.html?value=${id}`;
}

let categoria = document.getElementById("categoria");

