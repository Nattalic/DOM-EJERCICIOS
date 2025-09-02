// Paso 1: Inicializa una variable para el valor del contador
let contador = 0

// Paso 2: Selecciona los botones y el span
const decrementar = document.getElementById("decrementar")
const incrementar = document.getElementById("incrementar")
const spanValor  = document.getElementById("valor")


// Paso 3: Agrega listeners a los botones para modificar el valor
incrementar.addEventListener('click', () => {
    contador +=1 
    spanValor.textContent = contador
})



decrementar.addEventListener('click', () => {
    if (contador > 0) { //solo resta si el contador es mayor que cero por ende nunca llegara a numeros negativos
        contador -= 1
        spanValor.textContent = contador
    }
})

// Paso 4: Asegúrate de que el valor no sea negativo