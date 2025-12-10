const dados ={
    1: {
        nome: "Drogaria Total - Farmácia do Cachucho I",
        endereco: "R. Siqueira Campos, 81 - Centro, Pederneiras - SP, 17280-000, Brasil",
        horario: "Segunda a Sexta: 08:00 - 20:00, Sábado: 08:00 - 18:00",
        lat: -22.3535312,
        long: -48.7764339
    },

    2: {
        nome: "DROGASIL",
        endereco: "Av. Brasil, 1633 - JARDIM ALTOS DO ALVORADA, Pederneiras - SP, 17280-000, Brasil",
        horario: "Segunda a Sábado: 24h, Domingo: 7:00 - 23:00",
        lat: -22.3444907,
        long: -48.7934459
    },

    3: {
        nome: "Farmácia Multidrogas",
        endereco: "R. Prudente de Morais, 650 - Centro, Pederneiras - SP, 17280-000, Brasil",
        horario: "Segunda a Sexta: 07:00 - 20:00, Sábado: 08:00 - 18:00, Domingo: 08:00 - 12:00",
        lat: -22.3453847,
        long: -48.762909
    },

    4: {
        nome: "Cidade Nova Farma",
        endereco: "R. Santa Rita de Cássia - Cidade Nova, Pederneiras - SP, 17285-572, Brasil",
        horario: "Segunda a Sexta: 08:00 - 19:00, Sábado: 08:00 - 18:00, Domingo: 09:00 - 13:00",
        lat: -22.3211671,
        long: -48.8021603
    },

    5: {
        nome: "Farmácia Pia Mater",
        endereco: "Av. Nossa Sra. Aparecida, 1222 - Jd Modelo, Pederneiras - SP, 17280-000, Brasil",
        horario: "Segunda a Sexta: 08:00 - 20:00, Sábado: 08:00 - 18:00",
        lat: -22.3616114,
        long: -48.7700551
    }

}

document.querySelectorAll(".farmacia-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      window.location.href = `farmacia.html?id=${id}`;
    });
});
  