const projetos = [
  {
    nome: "meu portfólio",
    descricao: "primeiro site que eu desenvolvi"
  },
  {
    nome:  "Página de Teste"",
    descricao: "Teste simples que fiz durante os estudos""
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
