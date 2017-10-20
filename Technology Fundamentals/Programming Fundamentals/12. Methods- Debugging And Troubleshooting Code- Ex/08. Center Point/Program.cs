using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Center_Point
{
    class Program
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());

            string pointCloserToTheCentre = CenterPoint(x1, y1, x2, y2);
            Console.WriteLine(pointCloserToTheCentre);
        }

        static string CenterPoint(double x1, double y1, double x2, double y2)
        {
            string distance = "";
            double distance1 = CalculateDistance(x1, y1, 0, 0);
            double distance2 = CalculateDistance(x2, y2, 0, 0);

            if (distance1 <= distance2)
            {
                distance = $"({x1}, {y1})";
            }
            else
            {
                distance = $"({x2}, {y2})";
            }
            return distance;
        }

        static double CalculateDistance(double x1, double y1, double x2, double y2)
        {
            double distance = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));
            return distance;
        }
    }
}
