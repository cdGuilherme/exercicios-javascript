"use strict";

// Exercício 2
function potenciaMathPow() {
    let baseX = Number(window.prompt("Digite a base x: "));
    let expoenteY = Number(window.prompt("Digite o expoente y: "));
    let resultado = Math.pow(baseX, expoenteY);
    console.log("O resultado de " + baseX + "^" + expoenteY + " = " + resultado);
    alert("O resultado de " + baseX + "^" + expoenteY + " = " + resultado);
}
