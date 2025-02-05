/* weather.js */
$(document).ready(function () {
    // Function to convert Fahrenheit to Celsius.
    function convertFtoC(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }
    
    // Button click event for temperature conversion.
    $("#convertTemp").click(function () {
      let fTemp = parseFloat($("#tempF").val());
      if (isNaN(fTemp)) {
        $("#celsiusOutput").text("Please enter a valid number for Fahrenheit.");
        $("#kelvinOutput").text("");
        return;
      }
      
      let cTemp = convertFtoC(fTemp);
      let kTemp = (function (celsius) {
        return celsius + 273.15;
      })(cTemp);
      
      $("#celsiusOutput").text("Temperature in Celsius: " + cTemp.toFixed(2) + "°C");
      $("#kelvinOutput").text("Temperature in Kelvin: " + kTemp.toFixed(2) + "K");
    });
  });
  