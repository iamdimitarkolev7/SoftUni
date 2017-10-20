using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.Variable_In_Hexidecimal_Format
{
    class Program
    {
        static void Main(string[] args)
        {
            string hexidecimalSymbol = Console.ReadLine();

            Console.WriteLine(Convert.ToInt32(hexidecimalSymbol, 16));
        }
    }
}
