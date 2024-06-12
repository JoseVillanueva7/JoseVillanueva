const conversiones = [
    { tipo: 'temperatura', opciones: ['Celsius a Fahrenheit', 'Fahrenheit a Celsius'] },
    { tipo: 'volumen', opciones: ['Litros a Centímetros cúbicos', 'Centímetros cúbicos a Litros'] },
    { tipo: 'longitud', opciones: ['Metros a Kilómetros', 'Kilómetros a Metros'] }
];

document.getElementById('tipo-conversion').addEventListener('change', actualizarOpciones);
document.getElementById('convertir').addEventListener('click', realizarConversion);

function actualizarOpciones() {
    const tipoIndex = document.getElementById('tipo-conversion').value - 1;
    const opciones = conversiones[tipoIndex].opciones;
    const conversionSelect = document.getElementById('conversion');
    conversionSelect.innerHTML = '';
    opciones.forEach((opcion, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index + 1;
        optionElement.textContent = opcion;
        conversionSelect.appendChild(optionElement);
    });
}

function realizarConversion() {
    const tipoIndex = document.getElementById('tipo-conversion').value - 1;
    const conversionIndex = document.getElementById('conversion').value - 1;
    const valor = parseFloat(document.getElementById('valor').value);
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(valor)) {
        resultadoElement.textContent = "El valor ingresado no es válido.";
        return;
    }

    let resultado;
    if (tipoIndex === 0) { 
        if (conversionIndex === 0) {
            resultado = (valor * 9/5) + 32; 
            resultadoElement.textContent = `${valor} grados Celsius equivalen a ${resultado.toFixed(2)} grados Fahrenheit.`;
        } else {
            resultado = (valor - 32) * 5/9; 
            resultadoElement.textContent = `${valor} grados Fahrenheit equivalen a ${resultado.toFixed(2)} grados Celsius.`;
        }
    } else if (tipoIndex === 1) {
        if (conversionIndex === 0) {
            resultado = valor * 1000; 
            resultadoElement.textContent = `${valor} litros equivalen a ${resultado.toFixed(2)} centímetros cúbicos.`;
        } else {
            resultado = valor / 1000; 
            resultadoElement.textContent = `${valor} centímetros cúbicos equivalen a ${resultado.toFixed(2)} litros.`;
        }
    } else if (tipoIndex === 2) { 
        if (conversionIndex === 0) {
            resultado = valor / 1000; 
            resultadoElement.textContent = `${valor} metros equivalen a ${resultado.toFixed(2)} kilómetros.`;
        } else {
            resultado = valor * 1000; 
            resultadoElement.textContent = `${valor} kilómetros equivalen a ${resultado.toFixed(2)} metros.`;
        }
    }
}


actualizarOpciones();