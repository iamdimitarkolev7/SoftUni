using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Largest_3_Nums
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = Console.ReadLine()
                       .Split(' ')
                       .Select(int.Parse)
                       .ToList();

            var result = list
                         .OrderByDescending(x => x)
                         .Take(3)
                         .ToList();

            Console.WriteLine(String.Join(" ", result));
        }
    }
}
