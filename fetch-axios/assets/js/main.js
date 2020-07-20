//fetch("pessoas.json")
//  .then((resposta) => resposta.json())
//  .then((json) => carregaElementosNaPagina(json));

axios("pessoas.json").then((resposta) =>
  carregaElementosNaPagina(resposta.data)
);

function carregaElementosNaPagina(pessoas) {
  const table = document.createElement("table");

  table.appendChild(createTHead(pessoas[0]));
  table.appendChild(createTBody(pessoas));
  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}

function createTHead(pessoa) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  for (let key in pessoa) {
    const td = document.createElement("td");
    td.innerText = key.toUpperCase();
    tr.appendChild(td);
  }
  thead.appendChild(tr);
  return thead;
}

function createTBody(pessoas) {
  const tbody = document.createElement("tbody");
  for (let pessoa of pessoas) {
    const tr = document.createElement("tr");
    for (let key in pessoa) {
      const td = document.createElement("td");
      td.innerText = pessoa[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  return tbody;
}
