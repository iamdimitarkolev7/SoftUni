using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _13.Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            BigInteger factorial = Factorial(number);
            Console.WriteLine(factorial);
        }
        
        static BigInteger Factorial(int number)
        {
            BigInteger result = 1;
            for (int i = 1; i <= number; i++) 
            {
                result = result * (BigInteger)i;
            }
            return result;
        }
    }
}
