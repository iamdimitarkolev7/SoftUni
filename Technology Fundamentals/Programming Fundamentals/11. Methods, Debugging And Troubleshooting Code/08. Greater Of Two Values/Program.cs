using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Greater_Of_Two_Values
{
    class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine();
            
            if (type == "int")
            {
                int max = CompareIntegers();
                Console.WriteLine(max);
            }
            else if (type == "char")
            {
                char max = CompareChars();
                Console.WriteLine(max);
            }
            else if (type == "string")
            {
                string max = CompareStrings();
                Console.WriteLine(max);
            }

        }

        static int CompareIntegers()
        {
            int first = int.Parse(Console.ReadLine());
            int second = int.Parse(Console.ReadLine());

            int max = 0;

            if (first >= second)
            {
                max = first;
            }
            else
            {
                max = second;
            }

            return max;
        }

        static char CompareChars()
        {
            char first = char.Parse(Console.ReadLine());
            char second = char.Parse(Console.ReadLine());

            char max = default(char);

            if (first >= second)
            {
                max = first;
            }
            else
            {
                max = second;
            }

            return max;
        }

        static string CompareStrings()
        {
            string first = Console.ReadLine();
            string second = Console.ReadLine();

            string max = default(string);

            if (first.CompareTo(second) >= 0)
            {
                max = first;
            }
            else
            {
                max = second;
            }

            return max;
        }
    }
}
