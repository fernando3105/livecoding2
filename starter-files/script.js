// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

//Se borra el onkeypress="handleKeyEnter(event)" de la linea 
//<input id="input" class="input" type="text" onkeypress="handleKeyEnter(event)" value="" required />
//del html

//Se crea la funcion fetchAnswer
async function fetchAnswer() {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        document.getElementById("answer").innerHTML = data.answer.toUpperCase();
    } catch (error) {
        document.getElementById("error").innerText = "Error al obtener la respuesta";
    }
}

//Se crea el addEventListener
document.getElementById("button").addEventListener("click", () => {
    // No olvidar poner const o let
    // No usar const para variables que se vayan a modificar
    let el = document.getElementById("input");
    const question = el.value.trim();
    if(question !== ""){
        fetchAnswer();
        setTimeout(() => {
            el.value = "";
            document.getElementById("answer").innerText = ""; 
        },5000 )
    }
});
