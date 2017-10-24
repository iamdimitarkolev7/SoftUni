using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Count_Substring_Occurences
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine().ToLower();
            string substring = Console.ReadLine().ToLower();

            int count = 0;
            int index = text.IndexOf(substring);

            while (index != -1)
            {
                count++;
                index = text.IndexOf(substring, index + 1);
            }

            Console.WriteLine(count);
        }
    }
}
