using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Master_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++)
            {
                if (ContainsEvenDigits(i) && SumOfDigits(i) && IsPalindrome(i))
                {
                    Console.WriteLine(i);
                }
            }
        }
        static bool ContainsEvenDigits(int num)
        {
            bool evenDigit = false;
            while (num > 0)
            {
                if ((num % 10) % 2 == 0)
                {
                    evenDigit = true;
                }
                num = num / 10;
            }
            return evenDigit;
        }

        static bool SumOfDigits(int num)
        {
            int sum = 0;
            bool sumDevisableBy7 = false;
            while (num > 0)
            {
                sum = sum + (num % 10);
                num /= 10;
            }
            if (sum % 7 == 0)
            {
                sumDevisableBy7 = true;
            }
            return sumDevisableBy7;
        }

        static bool IsPalindrome(int num)
        {
            string digits = "" + num;

            for (int i = 0; i < digits.Length / 2; i++)
            {
                if (digits[i] != digits[digits.Length - i - 1])
                {
                    return false;
                }
            }
            return true;
        }
    }
}

