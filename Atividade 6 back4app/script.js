const olTarefas = document.getElementById("olTarefas");
const createList = (data) => {
  olTarefas.innerHTML = "";
  const tarefas = data.results;
  tarefas.forEach((tarefa) => {
    const text = document.createTextNode(`${tarefa.descricao} `);
    const li = document.createElement("li");
    li.appendChild(text);
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = tarefa.concluida;
    cb.disabled = true;
    li.appendChild(cb);
    olTarefas.appendChild(li);
  });
};
const getTarefas = async () => {
  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/MyCustomClassName",
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "q95OdCC8RIJY6QAcUYLRfSrej5zCXtzzXQ49IcFO", // possivel erro
          "X-Parse-REST-API-Key": "MVsD7AlZunjfJVe8QMteVCmR5hWyuZgP4kLT7y8S", // possivel erro
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    const data = await response.json();
    createList(data);
  } catch (error) {
    console.log(error);
  }
};
window.onload = getTarefas;

// analisar o codigo do exemplo 7 e trazer para minha tarefa