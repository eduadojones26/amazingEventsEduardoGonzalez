 export function pintarcard(array, div) {
    div.innerHTML = ''; // Limpiar contenido previo
    array.forEach(event => targetaCliente(event, div));
}

export function targetaCliente(event, divPadre) {
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "15rem";
    newCard.innerHTML = `
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text cardText">${event.description}.</p>
            <div class="container d-flex flex-row-reverse justify-content-between">
            <a href="/pages/details.html?value=${event._id}" class="btn btn-primary">Go Details</a>
                <p>Price: ${event.price}</p>
            </div>
        </div>`;
    divPadre.appendChild(newCard);
}

export function pintarche(events, categoria) {
    let uniqueCategories = Array.from(new Set(events.map(event => event.category)));
    uniqueCategories.forEach(category => {
        let newChe = document.createElement("div");
        newChe.innerHTML = `
            <div class="container d-flex justify-content-between">
                <div class="container align-content-start flex-wrap">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
                        <label class="form-check-label" for="${category}">
                            ${category}
                        </label>
                    </div>
                </div>
            </div>`;
        categoria.appendChild(newChe);
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener("change", () => filtrarTarjetas(events));
    });

    let searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", () => filtrarTarjetas(events));
}

export function filtrarTarjetas(events) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.id);

    let searchInput = document.getElementById("searchInput");
    let searchTerm = searchInput.value.trim().toLowerCase();

    let targetas = document.getElementById("targetas");
    targetas.innerHTML = "";

    let emptySearchMessage = document.getElementById("emptySearchMessage");
    let foundResults = false;

    events.forEach(event => {
        let matchesCategory = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(event.category);
        let matchesSearchTerm = event.name.toLowerCase().includes(searchTerm) || event.description.toLowerCase().includes(searchTerm);

        if (matchesCategory && matchesSearchTerm) {
            targetaCliente(event, targetas);
            foundResults = true;
        }
    });

    emptySearchMessage.style.display = foundResults ? "none" : "block";
}
