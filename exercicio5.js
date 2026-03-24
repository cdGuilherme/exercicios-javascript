"use strict";

// Exercício 5
function classificacaoNota() {
    let nota = Number(document.getElementById("nota").value);
    
    if (nota < 4) {
        document.getElementById("classificacao").innerText = "Reprovado";
    } else if (nota < 6) {
        document.getElementById("classificacao").innerText = "Em recuperação";
    } else {
        document.getElementById("classificacao").innerText = "Aprovado";
    }
}