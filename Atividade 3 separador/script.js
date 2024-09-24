function separarLetras() {
    const palavra = document.getElementById("palavra").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let letra of palavra) {
        let divLetra = document.createElement("div");
        divLetra.className = "letra";
        divLetra.textContent = letra;
        resultado.appendChild(divLetra);
    }
}