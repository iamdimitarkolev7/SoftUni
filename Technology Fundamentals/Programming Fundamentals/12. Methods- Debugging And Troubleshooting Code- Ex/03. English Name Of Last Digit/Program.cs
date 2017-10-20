using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.English_Name_Of_Last_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            long number = long.Parse(Console.ReadLine());

            string lastDigitName = LastDigitInString(number);
            Console.WriteLine(lastDigitName);
        }

        static string LastDigitInString(long number)
        {
            long lastDigit = Math.Abs(number % 10);
            string lastDigitName = default(string);
            
            switch(lastDigit)
            {
                case 0: lastDigitName = "zero";
                        break;
                case 1: lastDigitName = "one";
                    break;
                case 2: lastDigitName = "two";
                    break;
                case 3: lastDigitName = "three";
                    break;
                case 4: lastDigitName = "four";
                    break;
                case 5: lastDigitName = "five";
                    break;
                case 6: lastDigitName = "six";
                    break;
                case 7: lastDigitName = "seven";
                    break;
                case 8: lastDigitName = "eight";
                    break;
                case 9: lastDigitName = "nine";
                    break;
            }

            return lastDigitName;
        }
    }
}
