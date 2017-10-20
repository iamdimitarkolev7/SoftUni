using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Temperature_Conversion
{
    class Program
    {
        static void Main(string[] args)
        {
            double degrees = double.Parse(Console.ReadLine());
            double celsius = FahrenheitToCelsius(degrees);
            Console.WriteLine($"{celsius:F2}");
        }
        static double FahrenheitToCelsius(double degrees)
        {
            return (degrees - 32) * 5 / 9;
        }
    }
}
