using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int reversedSum = 0;

            for (int i = 0; i < numbers.Count(); i++)
            {
                int reversed = 0;
                int digit = 0;
                while (numbers[i] > 0)
                {
                    digit = numbers[i] % 10;
                    reversed = (reversed * 10) + digit;
                    numbers[i] /= 10;
                }
                reversedSum += reversed;
            }
            Console.WriteLine(reversedSum);
        }
    }
}
