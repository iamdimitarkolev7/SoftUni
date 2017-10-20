using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Vowel_Or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Console.ReadLine();
            if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u")
                Console.WriteLine("vowel");
            else if (a == "0" || a == "1" || a == "2" || a == "3" || a == "4" || a == "5" || a == "6" || a == "7" || a == "8" || a == "9")
                Console.WriteLine("digit");
            else
                Console.WriteLine("other");
        }
    }
}
