using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace conversor.de.temperatura.bussines
{
    public class ConverterTemperaturas : IConverterTemperaturas
    {
        public decimal CelsiusParaFahrenheit(decimal celsius)
        {
            decimal fahrenheit = (celsius * 1.8m) + 32;
            return fahrenheit;
        }

        public decimal CelsiusParaKelvin(decimal celsius)
        {
            decimal kelvin = celsius + 273.15m;
            return kelvin;
        }
    }
}
