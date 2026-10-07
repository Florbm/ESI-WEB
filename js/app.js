const conceptos = [
    {
        nombre: "Respeto",
        descripcion: "Escuchar y cuidar los límites de cada persona.",
        detalle: "Respetar es escuchar a otras personas, aceptar sus límites y reconocer que pueden pensar o sentir distinto. Implica cuidar cómo nos tratamos y no imponer nuestras decisiones.",

        imagen: "img/Respeto.jpg",
        alt: "Dos personas conversando y escuchándose",
        color: "#d9bce8"

    },
    {
        nombre: "Igualdad",
        descripcion: "Las mismas oportunidades, sin discriminación.",
        detalle: "La igualdad implica que todas las personas tengan las mismas oportunidades y reciban un trato justo. En el ámbito laboral, por ejemplo, significa que no se discrimine a nadie por su género, orientación sexual, raza o discapacidad.",
        imagen: "img/Igualdad.jpg",
        alt: "Manos diversas alrededor de un signo de igualdad",
        color: "#f6bea5"
    },
    {
        nombre: "Diversidad",
        descripcion: "Distintas identidades, el mismo valor.",
        detalle: "Las personas tenemos distintas identidades, orientaciones, historias y formas de expresarnos. Reconocer la diversidad significa aceptar y valorar estas diferencias, promoviendo un ambiente inclusivo y respetuoso para todos.",
        imagen: "img/Diversidad.jpg",
        alt: "Un grupo de personas con distintas apariencias",
        color: "#c8d8ad"
    },
    {
        nombre: "Derechos",
        descripcion: "Un trato digno y una vida libre de violencia.",
        detalle: "Todas las personas merecen que se respeten su dignidad, intimidad e identidad. Hablar de derechos también implica reconocer la importancia de la igualdad y la diversidad, asegurando que nadie sea discriminado o maltratado por ser quien es.",
        imagen: "img/Derechos.jpg",
        alt: "Varias manos sosteniendo un cartel",
        color: "#aed5e8"
    }
];

const contenedor = document.getElementById("lista-conceptos");

conceptos.forEach(function (concepto) {
    contenedor.innerHTML += `
        <a class="concepto" href="#${concepto.nombre}" style="background-color: ${concepto.color}">
           <img src="${concepto.imagen}" alt="${concepto.alt}">
        <h2>${concepto.nombre}</h2>
            <p>${concepto.descripcion}</p>
            <span class="ver-mas">Leer más ↓</span>
        </a>
    `;
});

const contenedorDetalles = document.getElementById("lista-detalles");


conceptos.forEach(function (concepto) {
    contenedorDetalles.innerHTML += `
        <section class="detalle" id="${concepto.nombre}">
            <h2>${concepto.nombre}</h2>
            <p>${concepto.detalle}</p>
        </section>
    `;
});