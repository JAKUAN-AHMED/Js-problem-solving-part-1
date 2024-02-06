/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. */

function ConvertCelsiusToFahrenheit(celsius)
{
    return (9/5*celsius) + 32;
}
const result=ConvertCelsiusToFahrenheit(50);
console.log(result);