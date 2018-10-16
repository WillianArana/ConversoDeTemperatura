using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace conversor.de.temperatura.bussines
{
    public class ConverterTemperaturas
    {
        public double CelsiusParaFahrenheit(double celsius)
        {
            double fahrenheit = (celsius * 1.8) + 32;
            return fahrenheit;
        }
    }
}
