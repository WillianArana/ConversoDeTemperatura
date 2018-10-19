using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace conversor.de.temperatura.bussines
{
    public interface IConverterTemperaturas
    {
        decimal CelsiusParaFahrenheit(decimal celsius);
    }
}
