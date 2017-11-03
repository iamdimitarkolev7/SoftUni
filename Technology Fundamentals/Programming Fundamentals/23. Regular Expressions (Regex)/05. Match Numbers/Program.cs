using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _05.Match_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var pattern = @"(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))";
            var matches = Regex.Matches(input, pattern);

            var results = matches
                          .Cast<Match>()
                          .Select(x => x.Value.Trim())
                          .ToArray();

            Console.WriteLine(String.Join(" ", results));
        }
    }
}
