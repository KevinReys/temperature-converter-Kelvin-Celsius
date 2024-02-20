function convert() {
    var kelvin = parseFloat(document.getElementById('kelvinInput').value);
    var celsius = kelvin - 273.15;
    document.getElementById('kelvinResult').innerText = 'Temperatura em Celsius: ' + celsius.toFixed(2);
}