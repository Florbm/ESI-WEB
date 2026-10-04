// Array de objetos

const colores = [
    {
        nombre: "Rojo",
        significado: "Pasión, energía y fuerza",
        color: "#e74c3c",
    },
    {
        nombre: "Azul",
        significado: "Confianza, tranquilidad y seguridad",
        color: "#3498db",
    },
    {
        nombre: "Verde",
        significado: "Naturaleza, crecimiento y equilibrio",
        color: "#2ecc71",
    },
    {
        nombre: "Amarillo",
        significado: "Alegría, optimismo y creatividad",
        color: "#f1c40f",
    }

]

// Capturar el id (elemento html)



const contenedor =  document.getElementById("lista-colores")

//console.log(contenedor)

// Recorrer el array de objetos MAP

colores.map(function(color){
    contenedor.innerHTML += `
        <div class="color" style="background-color: ${color.color} ;" >
                <h2>${color.nombre}</h2>
                <p>${color.significado}</p>
        </div>
    `
})







