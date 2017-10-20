using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Geometry_Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            string geometryFigure = Console.ReadLine();
            double area = CalculateArea(geometryFigure);
            Console.WriteLine($"{area:F2}");
        }

        static double CalculateArea(string geometryFigure)
        {
            double result = 0;

            if (geometryFigure == "triangle")
            {
                double side = double.Parse(Console.ReadLine());
                double heigth = double.Parse(Console.ReadLine());
                result = (side * heigth) / 2;
            }
            else if (geometryFigure == "rectangle")
            {
                double width = double.Parse(Console.ReadLine());
                double heigth = double.Parse(Console.ReadLine());
                result = width * heigth;
            }
            else if (geometryFigure == "square")
            {
                double side = double.Parse(Console.ReadLine());
                result = side * side;
            }
            else if (geometryFigure == "circle")
            {
                double radius = double.Parse(Console.ReadLine());
                result = Math.PI * radius * radius;
            }
            return result;
        }
    }
}
