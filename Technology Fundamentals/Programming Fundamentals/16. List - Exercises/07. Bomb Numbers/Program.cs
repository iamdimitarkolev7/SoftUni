using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> bombNumberAndPower = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int bombNumber = bombNumberAndPower[0];
            int power = bombNumberAndPower[1];

            for (int i = 0; i < numbers.Count(); i++) 
            {
                if (numbers[i] == bombNumber)
                {
                    if (power + i >= numbers.Count())
                    {
                        numbers.RemoveRange(i - power, power);
                        numbers.RemoveRange(numbers.IndexOf(bombNumber), numbers.Count - (i - power));
                    }

                    else if (i - power < 0)
                    {
                        numbers.RemoveRange(0, i + 1);

                        if (numbers.Count() > 0)
                        {
                            numbers.RemoveRange(0, power);
                        }
                    }

                    else 
                    {
                        numbers.RemoveRange(i - power, power * 2 + 1);
                    }
                }
            }

            Console.WriteLine(numbers.Sum());
        }
    }
}
