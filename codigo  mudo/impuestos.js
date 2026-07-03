function calcularImpuesto(salario, tasa, region) {
    // Validaciones básicas
    if (isNaN(salario) || isNaN(tasa)) {
        return "❌ Ingresa valores válidos";
    }

    // Calculamos el impuesto como porcentaje del salario
    let impuesto = salario * (tasa / 100);

    // Resultado base
    let resultado = salario - impuesto;

    // Ajuste especial para El Salvador
    if (region === "SV") {
        resultado += 13;
    }

    // Redondeamos a 2 decimales
    return resultado.toFixed(2);
}

