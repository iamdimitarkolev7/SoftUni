using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Cube_Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            double side = double.Parse(Console.ReadLine());
            string parameter = Console.ReadLine();

            double result = CubeProperty(side, parameter);
            Console.WriteLine($"{result:F2}");
        }
        static double CubeProperty(double side, string parameter)
        {
            double result = 0;

            if (parameter == "face")
            {
                result = Math.Sqrt(2 * side * side);
            }
            else if (parameter == "space")
            {
                result = Math.Sqrt(3 * side * side);
            }
            else if (parameter == "volume")
            {
                result = side * side * side;
            }
            else if (parameter == "area")
            {
                result = 6 * side * side;
            }

            return result;
        }
    }
}
