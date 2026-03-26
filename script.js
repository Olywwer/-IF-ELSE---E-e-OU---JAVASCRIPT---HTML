
const fundoIMC = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80";

function mostrarIMC() {
    const aposentadoria = document.getElementById("aposentadoria");
    const imc = document.getElementById("imc");

    aposentadoria.style.display = "none";
    imc.style.display = "block";
    imc.style.backgroundImage = `url('${fundoIMC}')`;
}

function mostrarAposentadoria() {
    const aposentadoria = document.getElementById("aposentadoria");
    const imc = document.getElementById("imc");

    imc.style.display = "none";
    aposentadoria.style.display = "block";
    aposentadoria.style.backgroundImage = `url('${fundoAposentadoria}')`;
}

function verificar() {
    const idade = Number(document.getElementById("idade").value);
    const contribuicao = Number(document.getElementById("contribuicao").value);
    const resultado = document.getElementById("resultadoAposentadoria");

    if (idade >= 65 || contribuicao >= 30) {
        resultado.innerText = "Você pode se aposentar.";
        resultado.className = "text-success text-center fw-bold mt-3";
    } else {
        resultado.innerText = "Você ainda não pode se aposentar.";
        resultado.className = "text-danger text-center fw-bold mt-3";
    }
}

function calcularIMC() {
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);
    const resultado = document.getElementById("resultadoIMC");

    if (!altura || !peso) {
        resultado.innerText = "Informe altura e peso válidos.";
        resultado.className = "text-danger text-center fw-bold mt-3";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc <= 24.9) classificacao = "Peso normal";
    else if (imc <= 29.9) classificacao = "Sobrepeso";
    else if (imc <= 34.9) classificacao = "Obesidade grau I";
    else if (imc <= 39.9) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III (mórbida)";

    resultado.innerText = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
    resultado.className = "text-white text-center fw-bold mt-3";
}