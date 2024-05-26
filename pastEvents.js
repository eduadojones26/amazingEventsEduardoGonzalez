const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};

let events = data.events

let targetas = document.getElementById("targetas")


let pasado = [];

for (let i = 0; i < events.length; i++) {
    if (data.currentDate > events[i].date) {
        pasado.push(events[i]);
    }
}

pintarcard(pasado, targetas);

function pintarcard(array, div) {
    div.innerHTML = ''; // Limpiar contenido previo
    array.forEach(event => targetaCliente(event, div));
}

// Crear tarjeta individual
function targetaCliente(event, divPadre) {
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "15rem";
    newCard.innerHTML = `
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}.</p>
            <div class="container d-flex flex-row-reverse justify-content-between">
                <a href="#" onclick="detalle('${event._id}')" class="btn btn-primary">Go Details</a>
                <p>Price: ${event.price}</p>
            </div>
        </div>`;
    divPadre.appendChild(newCard);
}

function detalle(id) {
    window.location.href = `http://127.0.0.1:5500/details.html?value=${id}`;
}

let categoria = document.getElementById("categoria");
pintarche(pasado, categoria);

function pintarche(pasado, categoria) {
    let uniqueCategories = Array.from(new Set(pasado.map(event => event.category)));
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
        checkbox.addEventListener("change", () => filtrarTarjetas(pasado));
    });

    let searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", () => filtrarTarjetas(pasado));
}

function filtrarTarjetas(pasado) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.id);

    let searchInput = document.getElementById("searchInput");
    let searchTerm = searchInput.value.trim().toLowerCase();

    let targetas = document.getElementById("targetas");
    targetas.innerHTML = "";

    let emptySearchMessage = document.getElementById("emptySearchMessage");
    let foundResults = false;

    pasado.forEach(event => {
        let matchesCategory = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(event.category);
        let matchesSearchTerm = event.name.toLowerCase().includes(searchTerm) || event.description.toLowerCase().includes(searchTerm);

        if (matchesCategory && matchesSearchTerm) {
            targetaCliente(event, targetas);
            foundResults = true;
        }
    });

    emptySearchMessage.style.display = foundResults ? "none" : "block";
}


/*function pintarcard(pasado, targetas) {
    for (let i = 0; i < pasado.length; i++) {
        targetaCliente(pasado[i], targetas);
    }
}

function targetaCliente(targeta, targetas) {
    let newCard = document.createElement("div");
    newCard.innerHTML = `
    <div class="card" style="width: 15rem;">
        <img src="${targeta.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${targeta.name}</h5>
            <p class="card-text">${targeta.description}.</p>
            <div class="container d-flex flex-row-reverse justify-content-between">
                <a href="details.html" class="btn btn-primary">Go Details</a>
                <p>price: ${targeta.price}</p>
            </div>
        </div>
    </div>`;
    targetas.appendChild(newCard);
}

let categoria = document.getElementById("categoria");

pintarche(pasado, categoria);

function pintarche(pasado, categoria) {
    let uniqueCategories = new Set(pasado.map(event => event.category));
    for (let category of uniqueCategories) {
        let newChe = document.createElement("div");
        newChe.innerHTML =` 
        <div class="container d-flex justify-content-between">
            <div class="container align-content-start flex-wrap">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="#" id="${category}">
                    <label class="form-check-label" for="${category}">
                        ${category}
                    </label>
                </div>
            </div>
        </div>`;
        categoria.appendChild(newChe);
        let checkbox = newChe.querySelector(`input[type="checkbox"]`);
        checkbox.addEventListener("change", function() {
            filtrarTarjetas(pasado);
        });
    }
}

function filtrarTarjetas(pasado) {
    let checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
    let categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.id);
    
    let targetas = document.getElementById("targetas");
    targetas.innerHTML = ""; 
    
    for (let event of pasado) {
        if (categoriasSeleccionadas.includes(event.category)) {
            targetaCliente(event, targetas);
        }
    }
}*/
