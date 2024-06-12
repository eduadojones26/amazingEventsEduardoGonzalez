let detalleEve = window.location.href;
detalleEve = new URL(detalleEve).searchParams.get("value");
console.log(detalleEve);

document.addEventListener("DOMContentLoaded", () => {
    const urlbase = "https://aulamindhub.github.io";
    const urlevetos = urlbase + "/amazing-api/events.json";

    fetch(urlevetos)
        .then(response => response.json())
        .then(datos => {
            console.log(datos); // Para verificar que los datos se carguen correctamente
            let events = datos.events;
            const params = new URLSearchParams(window.location.search);
            const eventId = params.get('value');

            const event = events.find(e => e._id == eventId);

            if (event) {
                displayEventDetails(event);
            } else {
                document.getElementById('cardeta').innerHTML = '<p>Event not found.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayEventDetails(event) {
    let cardeta = document.getElementById("cardeta");
    cardeta.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="card mb-3">
                    <img src="${event.image}" class="img-fluid rounded-start" alt="${event.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.description}</p>
                        <p class="card-text"><small class="text-muted">Date: ${event.date}</small></p>
                        <p class="card-text"><small class="text-muted">Place: ${event.place}</small></p>
                        <p class="card-text"><small class="text-muted">Capacity: ${event.capacity}</small></p>
                        <p class="card-text"><small class="text-muted">Price: ${event.price}</small></p>
                    </div>
                </div>
            </div>
        </div>`;
}

