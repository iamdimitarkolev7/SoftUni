using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] nums = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            foreach (var num in nums)
            {
                Console.WriteLine($"{num} => {Math.Round(num, 0, MidpointRounding.AwayFromZero)}");
            }
        }
    }
}
