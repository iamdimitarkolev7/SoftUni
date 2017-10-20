using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Randomize_Words
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ');
            var random = new Random();

            for (int i = 0; i < input.Length; i++)
            {
                var firstIndex = random.Next(0, input.Length);
                var secondIndex = random.Next(0, input.Length);

                var changer = input[firstIndex];
                input[firstIndex] = input[secondIndex];
                input[secondIndex] = changer;
            }

            Console.WriteLine(string.Join($"{Environment.NewLine}", input));
        }
    }
}
