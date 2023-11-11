function calculadora(operacion, a, b) {
    switch (operacion) {
      case "suma":
        return a + b;
      case "resta":
        return a - b;
      case "multiplicacion":
        return a * b;
      case "division":
        if (b === 0) {
          return "Error: No se puede dividir por cero";
        }
        return a / b;
      default:
        return "Operación no válida";
    }
  }