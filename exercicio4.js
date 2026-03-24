"use strict";

// Exercício 4
function totalPagamento() {
    let valorProduto = Number(document.getElementById("valor-produto").value);
    let qtdDesejada = Number(document.getElementById("qtd-desejada").value);
    let formaPagamento = document.querySelector('input[name="forma-pagamento"]:checked').value;
    let totalBruto = valorProduto * qtdDesejada;
    let desconto;
    let totalLiquido;
    let strFormaPagamento;

    // if (totalBruto >= 1000) {
    //     desconto = totalBruto * 0.1;
    // }

    // Calculando o desconto e atribuindo a forma de pagamento para ser exibida utilizando string
    switch (formaPagamento) {
        case "pix":
            desconto = totalBruto * 0.1;
            strFormaPagamento = "Pix";
            break;
        case "debito":
            desconto = totalBruto * 0.05;
            strFormaPagamento = "Débito";
            break;
        case "credito":
            desconto = 0;
            strFormaPagamento = "Crédito";
            break;
    }

    // Exibe os números com 2 casas decimais
    totalLiquido = (totalBruto - desconto).toFixed(2);
    desconto = desconto.toFixed(2);

    document.getElementById("resultado-pagamento").innerText =
        "O valor total a pagar é de R$" + totalLiquido + ";\n" + "O desconto aplicado foi de R$" + desconto + ";\n" + "A forma de pagamento escolhida é: " + strFormaPagamento;
}
