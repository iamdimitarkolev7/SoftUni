using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Sum_Big_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var number1 = Console.ReadLine();
            var number2 = Console.ReadLine();

            var array1 = number1.ToCharArray();
            var array2 = number2.ToCharArray();

            var maxLength = Math.Max(array1.Count(), array2.Count());
            var sum = 0;
            for (int i = 0; i < maxLength; i++)
            {
                sum = array1[array1.GetUpperBound(0) - i] + array2[array2.GetUpperBound(0) - i];
            }
        }
    }
}
