using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using conversor.de.temperatura.bussines;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace conversor.de.temperatura.api.Controllers
{
    public class ConverterTemperaturasController : Controller
    {
        private readonly ConverterTemperaturas converter;
        public ConverterTemperaturasController()
        {
            converter = new ConverterTemperaturas();
        }
        
        // GET: /ConverterTemperaturas/
        public string Index()
        {
            return string.Empty;
        }

        [HttpGet("ConverterTemperaturas/ParaFahrenheit/{celsius}")]
        public decimal ParaFahrenheit(decimal celsius)
        {
            return converter.CelsiusParaFahrenheit(celsius);
        }
    }
}
