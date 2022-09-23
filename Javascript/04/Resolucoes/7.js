const rl = require("readline-sync");

const turnoInicial = Math.round(Math.random()) === 0 ? "X" : "O";

let proximoTurno = turnoInicial;

const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

let turnos = 1;

do {
    console.clear();

    for (let indexTabuleiro in tabuleiro) {
        console.log(tabuleiro[indexTabuleiro]);
      };

    console.log("\n");

    let linha = rl.questionInt(
        `Jogador ${proximoTurno}, escolha a linha a ser jogada: `
    );
    let coluna = rl.questionInt(
        `Jogador ${proximoTurno}, escolha a coluna a ser jogada: `
    );


    while (linha < 1 ||
        linha > 3 ||
        coluna < 1 ||
        coluna > 3 ||
        tabuleiro[linha - 1][coluna - 1]) {
        console.log("Jogada inválida");

        linha = rl.questionInt(
            `Jogador ${proximoTurno}, escolha a linha a ser jogada: `
        );
        coluna = rl.questionInt(
            `Jogador ${proximoTurno}, escolha a coluna a ser jogada: `
        );
    }

    tabuleiro[linha - 1][coluna - 1] = proximoTurno; //jogada;
    turnos++;

    if ((tabuleiro[0][0] === proximoTurno &&
        tabuleiro[0][1] === proximoTurno &&
        tabuleiro[0][2] === proximoTurno) ||
    (tabuleiro[1][0] === proximoTurno &&
        tabuleiro[1][1] === proximoTurno &&
        tabuleiro[1][2] === proximoTurno) ||
    (tabuleiro[2][0] === proximoTurno &&
        tabuleiro[2][1] === proximoTurno &&
        tabuleiro[2][2] === proximoTurno) ||
    (tabuleiro[0][0] === proximoTurno &&
        tabuleiro[1][0] === proximoTurno &&
        tabuleiro[2][0] === proximoTurno) ||
    (tabuleiro[0][1] === proximoTurno &&
        tabuleiro[1][1] === proximoTurno &&
        tabuleiro[2][1] === proximoTurno) ||
    (tabuleiro[0][2] === proximoTurno &&
        tabuleiro[1][2] === proximoTurno &&
        tabuleiro[2][2] === proximoTurno) ||
    (tabuleiro[0][0] === proximoTurno &&
        tabuleiro[1][1] === proximoTurno &&
        tabuleiro[2][2] === proximoTurno) ||
    (tabuleiro[0][2] === proximoTurno &&
        tabuleiro[1][1] === proximoTurno &&
        tabuleiro[2][0] === proximoTurno)) {
        console.clear();

        for (let indexTabuleiro in tabuleiro) {
            console.log(tabuleiro[indexTabuleiro]);
          };

        console.log(`Jogador ${proximoTurno} você ganhou!!!`);
        break;
    }

    if (turnos > 9) {
        console.clear();
        console.log("Deu velha");

        for (indexTabuleiro in tabuleiro) {
            for (indexColuna in tabuleiro[indexTabuleiro]) {
                tabuleiro[indexTabuleiro][indexColuna] = "";
            }
        }
        turnos = 1;
    }

    proximoTurno = proximoTurno === "X" ? "O" : "X";
} while (true);
