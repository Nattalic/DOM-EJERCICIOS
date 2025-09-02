// Paso 1: Selecciona el botón con document.getElementById
const btn = document.getElementById("btnColor")

let pinkMode = true 

// Paso 2: Agrega un event listener al botón para detectar el click
btn.addEventListener('click', () => {
    const body = document.querySelector("body") // Paso 3: Cambia el color de fondo de body dinámicamente
    body.style = `background-color : ${pinkMode ? 'pink' : 'white'}` 
    pinkMode = !pinkMode // !true = false      !false = true  
})

