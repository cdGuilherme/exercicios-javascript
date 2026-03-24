"use strict";

// Exercício 1
function calcMediaAritmetica() {
    let num1 = Number(document.getElementById("media-num1").value);
    let num2 = Number(document.getElementById("media-num2").value);
    let media = (num1 + num2) / 2;
    document.getElementById("resultado-media").innerText = "Ma = (" + num1 + " + " + num2 + ") / 2 = " + media;
}
