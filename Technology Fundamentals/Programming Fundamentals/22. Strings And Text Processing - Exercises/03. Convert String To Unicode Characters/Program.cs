using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Convert_String_To_Unicode_Characters
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            char[] array = input.ToCharArray();

            var totalResult = "";

            for (int i = 0; i < array.Length; i++)
            {
                var result = "\\u" + ((int)array[i]).ToString("x4");
                totalResult += result;
            }

            Console.WriteLine(totalResult);
        }
    }
}
