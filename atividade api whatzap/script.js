function gravar() {
   let nome = document.getElementById("nome").value
   let endereço = document.getElementById("endereço").value
   let email = document.getElementById("email").value
   let telefone = document.getElementById("telefone").value

   localStorage.setItem("nome" , nome);
   localStorage.setItem("endereço" , endereço);
   localStorage.setItem("email" , email);
   localStorage.setItem("telefone" , telefone);

   alert("dados enviados com sucesso!");
   
}

function exibir(){
    let nome = localStorage.getItem("nome");
    let endereço = localStorage.getItem("endereço");
    let email = localStorage.getItem("email");
    let telefone = localStorage.getItem("telefone");

    if(nome && endereço && email && telefone){
        document.getElementById("dados-nome").querySelector("p").textContent=nome;
        document.getElementById("dados-endereço").querySelector("p").textContent=nome;
        document.getElementById("dados-email").querySelector("p").textContent=nome;
        document.getElementById("dados-telefone").querySelector("p").textContent=nome;
    } else {
        document.getElementById

    }
    function enviar(){
        let nome = localStorage.getItem("nome");
        let endereço = localStorage.getItem("endereço");
        let email = localStorage.getItem("email");
        let telefone = localStorage.getItem("telefone");

        let data = nome " + nome"/n"telefone: " + telefone"/n"
    }