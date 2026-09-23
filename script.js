
const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

let intervalo = null;

function exibirDataHora() {
    const agora = new Date();

    document.getElementById("dia").value =
        String(agora.getDate()).padStart(2, "0");

    document.getElementById("mes").value =
        String(agora.getMonth() + 1).padStart(2, "0");

    document.getElementById("ano").value =
        agora.getFullYear();

    document.getElementById("nomeMes").value =
        meses[agora.getMonth()];

    document.getElementById("hora").value =
        String(agora.getHours()).padStart(2, "0");

    document.getElementById("minuto").value =
        String(agora.getMinutes()).padStart(2, "0");

    document.getElementById("segundo").value =
        String(agora.getSeconds()).padStart(2, "0");

    document.getElementById("diaSemana").value =
        diasSemana[agora.getDay()];
}

function iniciarRelogio() {
    if (intervalo !== null) {
        return;
    }

    exibirDataHora();

    intervalo = setInterval(exibirDataHora, 1000);

    document.getElementById("status").textContent =
        "◷ Relógio funcionando ◷";
}

function pararRelogio() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }

    document.getElementById("status").textContent =
        "♡ Relógio parado ♡";
}
