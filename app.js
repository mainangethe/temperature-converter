const celcius_input = document.querySelector('#celcius > input');
const fahrenheit_input = document.querySelector('#fahrenheit > input');
const kelvin_input = document.querySelector('#kelvin > input');

resetFields = () => {
  celcius_input.value = "";
  fahrenheit_input.value = "";
  kelvin_input.value = "";
}
ceclciusToFahrenheitAndKelvin = () => {
  if (celcius_input.value != "") {
    const celciusTemperature = parseFloat(celcius_input.value);
    const convertedToFahrenheit = celciusTemperature * (9 / 5) + 32;
    const convertedToKelvin = celciusTemperature + 273.15;
    fahrenheit_input.value = convertedToFahrenheit.toFixed(2);
    kelvin_input.value = convertedToKelvin.toFixed(2);
  }
  else {
    resetFields();
  }
}

fahrenheitToCelciusAndKelvin = () => {
  if (fahrenheit_input.value != "") {
    const fahrenheitTemperature = parseFloat(fahrenheit_input.value);
    const convertedToCelcius = (fahrenheitTemperature -32) * (5 / 9);
    const convertedToKelvin = (fahrenheitTemperature + 459.67) * (5 / 9);
    celcius_input.value = convertedToCelcius.toFixed(2);
    kelvin_input.value = convertedToKelvin.toFixed(2);
  }
  else {
    resetFields();
  }
}

kelvinToCelciusAndFahrenheit = () => {
  if (kelvin_input.value != "") {
    const kelvinTemperature = parseFloat(kelvin_input.value);
    const convertedToCelcius = kelvinTemperature - 273.15;
    const convertedToFahrenheit = (kelvinTemperature  - 273) * (9 / 5) + 32;
    celcius_input.value = convertedToCelcius.toFixed(2);
    fahrenheit_input.value = convertedToFahrenheit.toFixed(2);
  }
  else {
    resetFields();
  }
}

function main () {
  celcius_input.addEventListener('input', ceclciusToFahrenheitAndKelvin);
  fahrenheit_input.addEventListener('input', fahrenheitToCelciusAndKelvin);
  kelvin_input.addEventListener('input', kelvinToCelciusAndFahrenheit);

}

main();
