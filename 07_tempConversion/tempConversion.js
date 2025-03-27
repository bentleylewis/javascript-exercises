const convertToCelsius = function(fahrenheitInput) {
  return parseFloat(((fahrenheitInput-32) * (5/9)).toFixed(1));

  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusInput) {
  return parseFloat((celsiusInput * (9/5) +32).toFixed(1));



  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
