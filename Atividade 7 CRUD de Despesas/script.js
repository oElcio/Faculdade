const olDespesas = document.getElementById("olDespesas");
const inputDescricao = document.getElementById("inputDescricao");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");
const totalDespesasEl = document.getElementById("totalDespesas");

const baseURL = "https://parseapi.back4app.com/classes/Despesas";
const headers = {
  "X-Parse-Application-Id": "q95OdCC8RIJY6QAcUYLRfSrej5zCXtzzXQ49IcFO",
  "X-Parse-REST-API-Key": "MVsD7AlZunjfJVe8QMteVCmR5hWyuZgP4kLT7y8S",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

// Função para criar a lista de despesas (Revisar)
const createList = (data) => {
  olDespesas.innerHTML = "";
  let totalDespesas = 0;
  const despesas = data.results;

  despesas.forEach((despesa) => {
    const text = document.createTextNode(`${despesa.descricao}: R$ ${despesa.valor} `);
    const li = document.createElement("li");
    li.appendChild(text);

    // Criação do input para alterar o valor da despesa (Revisar)
    const inputValorDespesa = document.createElement("input");
    inputValorDespesa.type = "number";
    inputValorDespesa.value = despesa.valor;
    li.appendChild(inputValorDespesa);

    const btAtualizar = document.createElement("button");
    btAtualizar.innerHTML = "Atualizar";
    btAtualizar.onclick = () => handleBtAtualizarClick(btAtualizar, despesa, inputValorDespesa);
    li.appendChild(btAtualizar);

    const btRemover = document.createElement("button");
    btRemover.innerHTML = "Remover";
    btRemover.onclick = () => handleBtRemoverClick(btRemover, despesa);
    li.appendChild(btRemover);

    olDespesas.appendChild(li);

    // Somando o valor da despesa para exibir o total (Revisar)
    totalDespesas += despesa.valor;
  });

  // Exibir o somatório de todas as despesas (Revisar)
  totalDespesasEl.innerText = totalDespesas.toFixed(2);
};

// Função para adicionar despesa (Revisar)
const handleBtAdicionarClick = async () => {
  const descricao = inputDescricao.value.trim();
  const valor = parseFloat(inputValor.value);
  if (!descricao || isNaN(valor)) {
    alert("Por favor, preencha a descrição e o valor da despesa!");
    inputDescricao.focus();
    return;
  }
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: headersJson,
      body: JSON.stringify({ descricao: descricao, valor: valor }),
    });
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    inputDescricao.value = "";
    inputValor.value = "";
    inputDescricao.focus();
    getDespesas();
  } catch (error) {
    console.log(error);
  }
};

// Função para atualizar o valor da despesa (Revisar)
const handleBtAtualizarClick = async (btAtualizar, despesa, inputValorDespesa) => {
  const novoValor = parseFloat(inputValorDespesa.value);
  if (isNaN(novoValor)) {
    alert("O valor precisa ser numérico.");
    return;
  }
  try {
    btAtualizar.disabled = true;
    const response = await fetch(`${baseURL}/${despesa.objectId}`, {
      method: "PUT",
      headers: headersJson,
      body: JSON.stringify({ valor: novoValor }),
    });
    btAtualizar.disabled = false;
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    getDespesas();
  } catch (error) {
    console.log(error);
  }
};

// Função para remover despesa (Revisar)
const handleBtRemoverClick = async (btRemover, despesa) => {
  try {
    btRemover.disabled = true;
    const response = await fetch(`${baseURL}/${despesa.objectId}`, {
      method: "DELETE",
      headers: headers,
    });
    btRemover.disabled = false;
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    getDespesas();
  } catch (error) {
    console.log(error);
  }
};

// Função para buscar todas as despesas (Revisar)
const getDespesas = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: headers,
    });
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

window.onload = getDespesas;
btAdicionar.onclick = handleBtAdicionarClick;