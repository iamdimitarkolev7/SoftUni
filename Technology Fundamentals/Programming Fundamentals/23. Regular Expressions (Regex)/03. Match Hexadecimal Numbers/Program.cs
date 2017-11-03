using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Match_Hexadecimal_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string pattern = @"\b(?:0x)?[0-9A-F]+\b";
            MatchCollection matches = Regex.Matches(input, pattern);

            var validSolutions = matches
                                 .Cast<Match>()
                                 .Select(x => x.Value.Trim())
                                 .ToArray();

            Console.WriteLine(String.Join(" ", validSolutions));
        }
    }
}
