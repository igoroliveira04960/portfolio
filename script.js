const projetos = [
  {
    nome: "Meu Portfólio",
    descricao: "Primeiro site que desenvolvi"
  },
  {
    nome: "Página de Teste",
    descricao: "Projeto simples para praticar HTML e CSS"
  },
  {
    nome: "Exercícios de JavaScript",
    descricao: "Testes básicos que fiz durante os estudos"
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
