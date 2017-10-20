using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Numbers_In_Reversed_Order
{
    class Program
    {
        static void Main(string[] args)
        {
            string number = Console.ReadLine();
            string reversedNumber = NumberInReversedOrder(number);
            Console.WriteLine(reversedNumber);
        }

        static string NumberInReversedOrder(string number)
        {
            char[] reversedNumber = number.ToCharArray();
            Array.Reverse(reversedNumber);
            return new string (reversedNumber);
        }
    }
}
