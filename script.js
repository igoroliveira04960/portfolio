const projetos = [
  {
    nome: "Calculadora",
    descricao: "Calculadora simples feita com JavaScript"
  },
  {
    nome: "Lista de Tarefas",
    descricao: "App para adicionar e remover tarefas"
  },
  {
    nome: "Página de Login",
    descricao: "Interface de login simples"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(div);
});
