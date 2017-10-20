using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Reverse_Array_Of_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] items = input.Split(' ');

            for (int i = items.Length - 1; i >= 0; i--)
            {
                Console.Write(items[i]);
                Console.Write(" ");
            }
        }
    }
}
