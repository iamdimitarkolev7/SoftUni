using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Calculate_Rectangle_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double heigth = double.Parse(Console.ReadLine());
            double area = RectangleArea(width, heigth);

            Console.WriteLine(area);
        }

        static double RectangleArea(double width, double heigth)
        {
            return width * heigth;
        }
    }
}
