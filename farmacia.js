const dados = {
  1: {
    nome: "Drogaria Total - Farmácia do Cachucho I",
    endereco:
      "R. Siqueira Campos, 81 - Centro, Pederneiras - SP, 17280-000, Brasil",
    horario: "Segunda a Sexta: 08:00 - 20:00, Sábado: 08:00 - 18:00",
    lat: -22.3535312,
    long: -48.7764339,
    medicamentos: ["Paracetamol", "Dipirona", "Rivotril"]
  },

  2: {
    nome: "DROGASIL",
    endereco:
      "Av. Brasil, 1633 - JARDIM ALTOS DO ALVORADA, Pederneiras - SP, 17280-000, Brasil",
    horario: "Segunda a Sábado: 24h, Domingo: 7:00 - 23:00",
    lat: -22.3444907,
    long: -48.7934459,
    medicamentos: ["Ibuprofeno", "Amoxicilina"]
  },

  3: {
    nome: "Farmácia Multidrogas",
    endereco:
      "R. Prudente de Morais, 650 - Centro, Pederneiras - SP, 17280-000, Brasil",
    horario:
      "Segunda a Sexta: 07:00 - 20:00, Sábado: 08:00 - 18:00",
    lat: -22.3453847,
    long: -48.762909,
    medicamentos: ["Losartana", "Omeprazol"]
  },

  4: {
    nome: "Cidade Nova Farma",
    endereco:
      "R. Santa Rita de Cássia - Cidade Nova, Pederneiras - SP, 17285-572, Brasil",
    horario:
      "Segunda a Sexta: 08:00 - 19:00",
    lat: -22.3211671,
    long: -48.8021603,
    medicamentos: ["Neosaldina", "AAS"]
  },

  5: {
    nome: "Farmácia Pia Mater",
    endereco:
      "Av. Nossa Sra. Aparecida, 1222 - Jd Modelo, Pederneiras - SP, 17280-000, Brasil",
    horario: "Segunda a Sexta: 08:00 - 20:00",
    lat: -22.3616114,
    long: -48.7700551,
    medicamentos: ["Xarope Vick", "Dorflex"]
  },
};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const info = dados[id];
const numId = Number(id);
const imagens = {
  1: "imagens/cachucho.png",
  2: "imagens/DROGASIL.png",
  3: "imagens/Bertoline.png",
  4: "imagens/CDN.png",
  5: "imagens/PiaMater.png",
};
const img = document.getElementById("farmacia-img");
img.src = imagens[numId];

document.getElementById("nome").textContent = info.nome;
document.getElementById("endereco").textContent = info.endereco;
document.getElementById("horario").textContent = info.horario;

document.getElementById(
  "mapa"
).src = `https://www.google.com/maps/?q=${info.lat},${info.long}&output=embed`;

const lista = document.getElementById("lista-remedios");

lista.innerHTML = "";

info.medicamentos.forEach(remedio => {
  const li = document.createElement("li");
  li.textContent = remedio;
  lista.appendChild(li);
});
