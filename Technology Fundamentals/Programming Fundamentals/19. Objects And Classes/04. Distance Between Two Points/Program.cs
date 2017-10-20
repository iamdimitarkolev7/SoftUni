using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Distance_Between_Two_Points
{
    class Program
    {
        static void Main(string[] args)
        {
            Point x = ReadPoint(Console.ReadLine());
            Point y = ReadPoint(Console.ReadLine());

            var distance = CalculatePoint(x, y);

            Console.WriteLine(distance);
        }

        static double CalculatePoint(Point p1, Point p2)
        {
            int deltaX = p1.X - p2.X;
            int deltaY = p1.Y - p2.Y;

            return Math.Sqrt(deltaX * deltaX + deltaY * deltaY);
        }

        static Point ReadPoint(string input)
        {
            int[] coordinates = input.Split(' ').Select(int.Parse).ToArray();
            return new Point() { X = coordinates[0], Y = coordinates[1] };
        }
    }

    class Point
    {
        public int X { get; set; }
        public int Y { get; set; }
    }
}
