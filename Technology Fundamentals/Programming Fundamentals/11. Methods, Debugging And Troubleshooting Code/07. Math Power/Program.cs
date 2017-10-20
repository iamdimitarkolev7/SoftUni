using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Math_Power
{
    class Program
    {
        static void Main(string[] args)
        {
            double number = double.Parse(Console.ReadLine());
            int power = int.Parse(Console.ReadLine());

            double mathPower = MathPower(number, power);
            Console.WriteLine(mathPower);
        }

        static double MathPower(double number, int power)
        {
            double sum = 1;
            for (int i = 1; i <= power; i++)
            {
                sum *= number;
            }
            return sum;
        }
    }
}
