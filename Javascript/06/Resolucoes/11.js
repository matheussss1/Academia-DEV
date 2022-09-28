function farenheitToCelcius(temperatura) {
  return (temperatura - 32) * (5 / 9);
}
function celsiusToFarenheit(temperatura) {
  return  temperatura * 1.8 + 32;
}


const mapTipoConversao = {
  "F": (number) => farenheitToCelcius(number),
  "C": (number) => celsiusToFarenheit(number),
}

function conversorTemperatura(temperatura, tipoDaTemperatura = 'C') {
  const safeCase = tipoDaTemperatura.toUpperCase();
  if (!Object.keys(mapTipoConversao).includes(safeCase)) {
    return 0;
  }
  return mapTipoConversao[safeCase](temperatura);
}

console.log(conversorTemperatura(50,"c"));
console.log(conversorTemperatura(122,"f"));