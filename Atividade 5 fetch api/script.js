const olPersonagens = document.getElementById("olPersonagens");
const btPrevious = document.getElementById("btPrevious");
const btNext = document.getElementById("btNext");

const createList = (url, data) => {
  const personagens = data.results;
  const page = new URL(url).searchParams.get("page") || 1;
  olPersonagens.innerHTML = "";
  olPersonagens.start = `${(page - 1) * 10 + 1}`;

  personagens.forEach((personagem) => {
    const text = document.createTextNode(
      `${personagem.name} - ${personagem.birth_year}`
    );
    const li = document.createElement("li");
    li.appendChild(text);
    olPersonagens.appendChild(li);
  });

  btPrevious.disabled = !data.previous;
  btNext.disabled = !data.next;

  btPrevious.onclick = () => data.previous && fetchList(data.previous);
  btNext.onclick = () => data.next && fetchList(data.next);
};


const fetchList = (url) => {
  if (!url) return;

  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        alert("Erro ao acessar o servidor: " + response.status);
        throw new Error("Erro encontrado: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      createList(url, data);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = () => fetchList(`https://swapi.dev/api/planets/?page=1`);
