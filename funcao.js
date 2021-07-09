function mudarimagem(link, nome) {
  if (nome == "Patentes") {
    document.getElementById("myimg").src = `${link}`;
  } else if (nome == "Armamentos") {
    document.getElementById("myimg").src = `${link}`;
  }
}


let personagens = [
  { nome: "Brimstone", img: "img/agentes/Brimstone.jpg" },
  { nome: "Cypher", img: "img/agentes/cypher.jpg" },
  { nome: "Jett", img: "img/agentes/jett.jfif" },
  { nome: "Omen", img: "img/agentes/omen.jpg" },
  { nome: "Phoenix", img: "img/agentes/phoenix.jpg" },
  { nome: "Sage", img: "img/agentes/sege.jpg" },
  { nome: "Sova", img: "img/agentes/sova.jpg" },
  { nome: "Viper", img: "img/agentes/viper.jpg" },
  { nome: "Raze", img: "img/agentes/raze.jpg" },
  { nome: "Killjoy", img: "img/agentes/killjoy.jpeg" },
];

let ul = document.createElement("ul");
ul.className = "lista";
let listadeagentes = document.getElementById("listadeagentes");
let item = "";

for (let i = 0; i < personagens.length; i++) {
    item += `
  <li class='item'>
  <p class='nome'>${personagens[i].nome}</p>
    <ul>
    <img class='imagemAgente' src="${personagens[i].img}">
    </ul>
  </li>`;
}
ul.innerHTML = item;
listadeagentes.appendChild(ul);
