using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Fold_And_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine()
                        .Split(' ')
                        .Select(int.Parse)
                        .ToArray();

            int k = numbers.Count() / 4;

            var leftSide = numbers
                           .Skip(0)
                           .Take(k)
                           .Reverse()
                           .ToList();

            leftSide.InsertRange(leftSide.Count(), numbers.Skip(numbers.Count() - k)
                    .Take(k)
                    .Reverse());

            var middleNimbers = numbers.Skip(k)
                                .Take(k * 2)
                                .ToList();

            var sum = middleNimbers.Zip(leftSide, (x, y) => x + y);

            Console.WriteLine(String.Join(" ", sum));
        }
    }
}
