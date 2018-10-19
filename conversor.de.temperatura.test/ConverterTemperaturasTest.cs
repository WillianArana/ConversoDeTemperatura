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
            var celsius = 0m;
            var resultadoEsperado = 32m;

            var converter = new ConverterTemperaturas();

            var resultadoObtido = converter.CelsiusParaFahrenheit(celsius);

            string mensagem = $"Erro na conversão de { celsius }°C para fahrenheit. \nEsperado = { resultadoEsperado }°F \nObtido = { resultadoObtido }°F";

            Assert.That(resultadoObtido, Is.EqualTo(resultadoEsperado), mensagem);
        }
    }
}
