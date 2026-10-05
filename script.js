
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


// EXIBIR DATA E HORA


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



// BOTÃO EXIBIR
function iniciarRelogio() {

    // Se já estiver funcionando,
    // não cria outro relógio
    if (intervalo !== null) {
        return;
    }

    // Mostra a data e hora imediatamente
    exibirDataHora();

    // Atualiza a cada 1 segundo
    intervalo = setInterval(exibirDataHora, 1000);

    // Altera o status
    document.getElementById("status").textContent =
        "◷ Relógio funcionando ◷";
}


// BOTÃO PAUSAR


function pausarRelogio() {

    // Verifica se o relógio está funcionando
    if (intervalo !== null) {

        // Para a atualização
        clearInterval(intervalo);

        // Libera a variável
        intervalo = null;

        // Altera o status
        document.getElementById("status").textContent =
            "Ⅱ Relógio pausado Ⅱ";
    }
}



// BOTÃO LIMPAR

function limparRelogio() {

    // Para o relógio
    if (intervalo !== null) {

        clearInterval(intervalo);

        intervalo = null;
    }

    // Limpa DATA
    document.getElementById("dia").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("ano").value = "";

    // Limpa MÊS
    document.getElementById("nomeMes").value = "";

    // Limpa HORA
    document.getElementById("hora").value = "";
    document.getElementById("minuto").value = "";
    document.getElementById("segundo").value = "";

    // Limpa DIA DA SEMANA
    document.getElementById("diaSemana").value = "";

    // Volta o status
    document.getElementById("status").textContent =
        "♡ Relógio parado ♡";
}
