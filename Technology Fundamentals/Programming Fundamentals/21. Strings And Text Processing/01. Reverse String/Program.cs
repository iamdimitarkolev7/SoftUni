using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Reverse_String
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();

            char[] array = text.ToCharArray();
            string result = String.Empty;

            for (int i = array.Length - 1; i > -1; i--)
            {
                result += array[i];
            }

            Console.WriteLine(result);
        }
    }
}
