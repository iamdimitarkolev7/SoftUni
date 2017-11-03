using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _01.Extract_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var pattern = @"[\w-._]+@[\w-]+(\.[\w-]+)+";
            var matchedInput = Regex.Matches(input, pattern);

            foreach (Match m in matchedInput)
            {
                var match = m.ToString();

                if (!(match.StartsWith("-") || match.StartsWith(".") || match.StartsWith("_") 
                      || match.EndsWith("-") || match.EndsWith(".") || match.EndsWith("_")))
                {
                    Console.WriteLine(m);
                }
            }
        }
    }
}
