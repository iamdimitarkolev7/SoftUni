using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _14.Trailing_Zeros_Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int numberOfTrailingZeros = NumberOfTrailingZeros(num);

            Console.WriteLine(numberOfTrailingZeros);
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

        static int NumberOfTrailingZeros(int number)
        {
            BigInteger lastDigit = 0;
            int counter = 0;
            BigInteger result = Factorial(number);
            do
            {
                lastDigit = result % 10;
                if (lastDigit == 0)
                {
                    counter++;
                }
                else
                {
                    break;
                }
                result /= 10;
            }
            while (lastDigit == 0 && result > 0);

            return counter;
        }
    }
}
