function convertirTemperatura() {
    let unidad;
    do {
        unidad = prompt("Seleccione la unidad de temperatura:\n1. Celsius\n2. Fahrenheit");
    } while (unidad !== "1" && unidad !== "2");

    if (unidad === "1") {
        const celsius = parseFloat(prompt("Ingrese los grados Celsius:"));
        if (!isNaN(celsius)) {
            const fahrenheit = celsius * 9/5 + 32;
            prompt(celsius + " grados Celsius equivalen a " + fahrenheit.toFixed(2) + " grados Fahrenheit.");
        }
    } else if (unidad === "2") {
        const fahrenheit = parseFloat(prompt("Ingrese los grados Fahrenheit:"));
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            prompt(fahrenheit + " grados Fahrenheit equivalen a " + celsius.toFixed(2) + " grados Celsius.");
        } else {
            prompt("El valor ingresado no es válido.");
        }
    }
}

convertirTemperatura();
