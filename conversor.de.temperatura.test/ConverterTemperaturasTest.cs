using conversor.de.temperatura.bussines;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace conversor.de.temperatura.test
{
    [TestFixture]
    public class ConverterTemperaturasTest
    {
        [Test]
        public void ConvertendoCelsiusParaFahrenheit()
        {
            double celsius = 0;
            double fahrenheit = 32;

            var converter = new ConverterTemperaturas();

            var resultado = converter.CelsiusParaFahrenheit(celsius);

            string mensagem = $"Erro na conversão de {celsius}°C para fahrenheit. \nEsperado = {fahrenheit}°F \nObtido = {resultado}°F";

            Assert.That(resultado, Is.EqualTo(fahrenheit), mensagem);
        }

    }
}
