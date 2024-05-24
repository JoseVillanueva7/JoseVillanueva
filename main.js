function convertir() {
    const conversiones = {
        temperatura: ['Celsius a Fahrenheit', 'Fahrenheit a Celsius'],
        volumen: ['Litros a Centímetros cúbicos', 'Centímetros cúbicos a Litros'],
        longitud: ['Metros a Kilómetros', 'Kilómetros a Metros']
    };

    const tipo = prompt("Seleccione el tipo de conversión:\n1. Temperatura\n2. Volumen\n3. Longitud");

    let opciones;
    switch (tipo) {
        case '1':
            opciones = conversiones.temperatura;
            break;
        case '2':
            opciones = conversiones.volumen;
            break;
        case '3':
            opciones = conversiones.longitud;
            break;
        default:
            alert("Opción inválida.");
            return;
    }

    const conversion = prompt("Seleccione la conversión:\n1. " + opciones[0] + "\n2. " + opciones[1]);

    let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
    if (isNaN(valor)) {
        alert("El valor ingresado no es válido.");
        return;
    }

    let resultado;
    if (tipo === '1') { 
        if (conversion === '1') {
            resultado = (valor * 9/5) + 32; 
            alert(valor + " grados Celsius equivalen a " + resultado.toFixed(2) + " grados Fahrenheit.");
        } else if (conversion === '2') {
            resultado = (valor - 32) * 5/9; 
            alert(valor + " grados Fahrenheit equivalen a " + resultado.toFixed(2) + " grados Celsius.");
        } else {
            alert("Opción de conversión inválida.");
        }
    } else if (tipo === '2') { 
        if (conversion === '1') {
            resultado = valor * 1000; 
            alert(valor + " litros equivalen a " + resultado.toFixed(2) + " centímetros cúbicos.");
        } else if (conversion === '2') {
            resultado = valor / 1000; 
            alert(valor + " centímetros cúbicos equivalen a " + resultado.toFixed(2) + " litros.");
        } else {
            alert("Opción de conversión inválida.");
        }
    } else if (tipo === '3') { 
        if (conversion === '1') {
            resultado = valor / 1000;
            alert(valor + " metros equivalen a " + resultado.toFixed(2) + " kilómetros.");
        } else if (conversion === '2') {
            resultado = valor * 1000; 
            alert(valor + " kilómetros equivalen a " + resultado.toFixed(2) + " metros.");
        } else {
            alert("Opción de conversión inválida.");
        }
    }
}


window.onload = convertir;