const conceptos = [
    {
        nombre: "Respeto",
        descripcion: "Escuchar y cuidar los límites de cada persona.",
        imagen: "img/Respeto.jpg",
        alt: "Dos personas conversando y escuchándose",
        color: "#d9bce8"
    },
    {
        nombre: "Igualdad",
        descripcion: "Las mismas oportunidades, sin discriminación.",
        imagen: "img/Igualdad.jpg",
        alt: "Manos diversas alrededor de un signo de igualdad",
        color: "#f6bea5"
    },
    {
        nombre: "Diversidad",
        descripcion: "Distintas identidades, el mismo valor.",
        imagen: "img/Diversidad.jpg",
        alt: "Un grupo de personas con distintas apariencias",
        color: "#c8d8ad"
    },
    {
        nombre: "Derechos",
        descripcion: "Un trato digno y una vida libre de violencia.",
        imagen: "img/Derechos.jpg",
        alt: "Varias manos sosteniendo un cartel",
        color: "#aed5e8"
    }
];

const contenedor = document.getElementById("lista-conceptos");

conceptos.forEach(function(concepto) {
    contenedor.innerHTML += `
        <a
            class="concepto"
            href="#detalle-${concepto.nombre.toLowerCase()}"
            style="background-color: ${concepto.color}"
        >
            <img src="${concepto.imagen}" alt="${concepto.alt}">
            <h2>${concepto.nombre}</h2>
            <p>${concepto.descripcion}</p>
            <span class="ver-mas">Leer más ↓</span>
        </a>
    `;
});