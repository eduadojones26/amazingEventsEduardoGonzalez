import * as funcionesTotales from "/scrips/modules/functions.js"

const urlbase = "https://aulamindhub.github.io"
const urlevetos = urlbase + "/amazing-api/events.json"
fetch(urlevetos)
.then(response => response.json())
.then(datos => {
    let events = datos.events;
    let targetas = document.getElementById("targetas");
    let categoria = document.getElementById("categoria");
    let futuro = [];

    for (let i = 0; i < events.length; i++) {
        if (datos.currentDate < events[i].date) {
            futuro.push(events[i]);
        }
    }
    // Pintar todas las tarjetas 
    funcionesTotales.pintarcard(futuro, targetas);
    // Pintar checkboxes
    funcionesTotales.pintarche(futuro, categoria);
})

function detalle(id) {
    window.location.href = `http://127.0.0.1:5500/details.html?value=${id}`;
}

let categoria = document.getElementById("categoria");
