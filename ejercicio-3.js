// Paso 1: Selecciona el input y la lista
const input = document.querySelector("input")
const lista = document.getElementById("lista")


// Paso 2: Agrega un listener al input para detectar Enter (keyup o keydown)
input.addEventListener('keydown', (evento) => {
    if (evento.key === "Enter") { //si la tecla es si o si enter entonces....

        
        // Paso 3: Crea un nuevo <li> con el valor del input y agrégalo al ul
        const nuevoItem = document.createElement("li")
        nuevoItem.textContent = input.value

        lista.appendChild(nuevoItem)

        // Paso 4: Limpia el input después de agregar
        input.value = "" 
    }
})
