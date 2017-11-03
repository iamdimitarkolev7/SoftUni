using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _06.Replace_A_Tag
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            var result = String.Empty;
            
            while (input != "end")
            {
                Regex regex = new Regex(@"<a\shref=(.+?)>(.+?)<\/a>");
                result = regex.Replace(input, "[URL href=$1]$2[/URL]");
                Console.WriteLine(result);

                input = Console.ReadLine();
            }
        }
    }
}
