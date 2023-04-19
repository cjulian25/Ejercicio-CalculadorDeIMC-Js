const pesoUsuario = document.getElementById('pesoUsuario')
const alturaUsuario = document.getElementById('alturaUsuario')
const botonCalcular = document.getElementById('calcular')
const botonReiniciar = document.getElementById('reiniciar')
const valorIMCUsuario = document.getElementById('imcUsuario')
const textoResultadoIMC = document.getElementById('textoResultadoIMC')
const child = document.getElementById('child')
let resultado = 0

botonCalcular.addEventListener(`click`, function() {
    if ((pesoUsuario.value == "") || (alturaUsuario.value == "")) {
        alert("Debes llenar los espacios en blanco")
    } else if ((pesoUsuario.value <= 0) || (pesoUsuario.value >= 700)) {
        alert("El valor del peso no esta en los rangos establecidos");
        pesoUsuario.value = "";
    } else {
        if ((alturaUsuario.value >= 50) & (alturaUsuario.value <= 300)) {
            resultado = ((pesoUsuario.value) / (alturaUsuario.value / 100) ** 2);
            valorIMCUsuario.innerText = `${resultado.toFixed(1)}`;
            if (resultado < 18.5) {
                textoResultadoIMC.innerText = 'Bajo peso';
                child.style.rotate = '-75deg';
            } else if ((resultado >= 18.5) & (resultado <= 24.9)) {
                textoResultadoIMC.innerText = 'Peso saludable';
                child.style.rotate = '-25deg';
            } else if ((resultado >= 25.0) & (resultado <= 29.9)) {
                textoResultadoIMC.innerText = 'Sobrepeso';
                child.style.rotate = '27deg';
            } else if (resultado > 30.0) {
                textoResultadoIMC.innerText = 'Obesidad';
                child.style.rotate = '78deg';
            }
        } else if ((alturaUsuario.value >= 0.50) & (alturaUsuario.value <= 3)) {
            resultado = (pesoUsuario.value / alturaUsuario.value ** 2);
            valorIMCUsuario.innerText = `${resultado.toFixed(1)}`;
            if (resultado < 18.5) {
                textoResultadoIMC.innerText = 'Bajo peso';
                child.style.rotate = '-75deg';
            } else if ((resultado >= 18.5) & (resultado <= 24.9)) {
                textoResultadoIMC.innerText = 'Peso saludable';
                child.style.rotate = '-25deg';
            } else if ((resultado >= 25.0) & (resultado <= 29.9)) {
                textoResultadoIMC.innerText = 'Sobrepeso';
                child.style.rotate = '27deg';
            } else if (resultado > 30.0) {
                textoResultadoIMC.innerText = 'Obesidad';
                child.style.rotate = '78deg';
            }
        } else {
            alert("El valor de la altura no esta en los rangos establecidos")
            alturaUsuario.value = "";
        }
    }
})

botonReiniciar.addEventListener(`click`, function() {
    pesoUsuario.value = "";
    alturaUsuario.value = "";
    valorIMCUsuario.innerText = "";
    textoResultadoIMC.innerText = "";
    child.style.rotate = '-90deg';
})