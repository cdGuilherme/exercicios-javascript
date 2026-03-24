"use strict";

// Exercício 3
function anoBissextoOuNao() {
    // Referência:
    // NOÉ, Marcos. Anos bissextos: como calcular? Mundo Educação. Disponível em: <https://mundoeducacao.uol.com.br/matematica/anos-bissextos.htm>. Acesso em: 24 mar. 2026.

    // Recebe o ano que o usuário digitou
    let ano = Number(document.getElementById("ano").value);

    // Verificação de input
    if (ano <= 0) {
        document.getElementById("resultado-ano-bissexto").innerText = "Por favor, digite um ano maior que 0.";
        return;
    }
    if (isNaN(ano)) {
        document.getElementById("resultado-ano-bissexto").innerText = "Por favor, informe um número válido.";
        return;
    }

    let dezenaAno = ano.toString().slice(-2); // Armazena os 2 últimos digitos do ano
    let bissexto; // booleano

    // O ano bissexto não pode terminar em 00
    if (dezenaAno == "00") {
        bissexto = false;
        // Exceto se a divisão por 400 for exata
        if (ano % 400 == 0) {
            bissexto = true;
        }
    } else {
        // O ano bissexto ocorre a cada quatro em quatro anos
        if (ano % 4 == 0) {
            bissexto = true;
        } else {
            bissexto = false;
        }
    }

    // Exibe o resultado
    if (bissexto) {
        document.getElementById("resultado-ano-bissexto").innerText = "O ano " + ano + " é bissexto.";
    } else {
        document.getElementById("resultado-ano-bissexto").innerText = "O ano " + ano + " NÃO é bissexto.";
    }
}
