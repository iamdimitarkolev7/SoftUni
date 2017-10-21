using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Circle_Intersection
{
    class Program
    {
        static void Main(string[] args)
        {
            var circle1 = Console.ReadLine().Split(' ');
            var circle2 = Console.ReadLine().Split(' ');

            Circle firstCircle = new Circle()
            {
                X = double.Parse(circle1[0]),
                Y = double.Parse(circle1[1]),
                Radius = double.Parse(circle1[2])
            };

            Circle secondCircle = new Circle()
            {
                X = double.Parse(circle2[0]),
                Y = double.Parse(circle2[1]),
                Radius = double.Parse(circle2[2])
            };

            bool yesOrNo = Intersect(firstCircle, secondCircle);

            if (yesOrNo == true)
            {
                Console.WriteLine("Yes");
            }

            else
            {
                Console.WriteLine("No");
            }
        }

        static bool Intersect(Circle firstCircle, Circle secondCircle)
        {
            bool theyIntersect = false;
            var distanceBetweenTwoCircles = Math.Sqrt(Math.Pow(secondCircle.X - firstCircle.X, 2) + Math.Pow(secondCircle.Y - firstCircle.Y, 2));

            if (distanceBetweenTwoCircles <= firstCircle.Radius + secondCircle.Radius)
            {
                theyIntersect = true;
            }

            return theyIntersect;
        }
    }

    class Circle
    {
        public double Center { get; set; }
        
        public double Radius { get; set; }

        public double X { get; set; }

        public double Y { get; set; }
    }
}
