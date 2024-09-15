
const button = document.getElementById("button");
const array = document.getElementById("array");
const media = document.getElementById("media");
let moda = 0
const array_numeros = []

document.getElementById('button').addEventListener('click', function() {
    
    const number1 = parseInt(document.getElementById("number").value);
    array_numeros.push(number1);
    
    array.textContent = array_numeros
    document.getElementById("number").value = ""

    moda += Number(number1)
    const media2 = moda/array_numeros.length 
    media.textContent = media2
    
});