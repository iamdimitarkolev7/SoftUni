using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Text_Filter
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] banWords = Console.ReadLine()
                                   .Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                   .ToArray();
            string input = Console.ReadLine();

            foreach (var banWord in banWords)
            {
                if (input.Contains(banWord))
                {
                    input = input.Replace(banWord, new string('*', banWord.Length));
                }
            }

            Console.WriteLine(input);
        }
    }
}
