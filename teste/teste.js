const olTarefas = document.getElementById("olTarefas");

const createList = (data) => {
  olTarefas.innerHTML = "";
  const tarefas = data.results;

  if (!tarefas || tarefas.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhuma tarefa encontrada.";
    olTarefas.appendChild(li);
    return;
  }

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
          "X-Parse-Application-Id": "q95OdCC8RIJY6QAcUYLRfSrej5zCXtzzXQ49IcFO", // possível erro
          "X-Parse-REST-API-Key": "MVsD7AlZunjfJVe8QMteVCmR5hWyuZgP4kLT7y8S", // possível erro
        },
      }
    );

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

 // correção da atividade 7 ( verificar )
