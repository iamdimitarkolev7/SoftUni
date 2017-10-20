using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Multiply_Even_By_Odds
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = Math.Abs(int.Parse(Console.ReadLine()));

            int multiply = GetMultiplyOfEvenAndOdds(number);
            Console.WriteLine(multiply);
        }

        static int GetMultiplyOfEvenAndOdds(int number)
        {
            int evenSum = GetSumOFEvenDigits(number);
            int oddSum = GetSumOFOddDigits(number);

            return evenSum * oddSum;
        }

        static int GetSumOFEvenDigits(int number)
        {
            int sum = 0;
            
            while (number > 0)
            {
                int lastDigit = number % 10;
                if (lastDigit % 2 == 0)
                {
                    sum += lastDigit;
                }
                number = number / 10;
            }
            return sum;
        }

        static int GetSumOFOddDigits(int number)
        {
            int sum = 0;

            while (number > 0)
            {
                int lastDigit = number % 10;
                if (lastDigit % 2 != 0)
                {
                    sum += lastDigit;
                }
                number = number / 10;
            }
            return sum;
        }
    }
}
