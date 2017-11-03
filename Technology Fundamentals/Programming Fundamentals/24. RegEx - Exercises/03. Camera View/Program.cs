using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _03.Camera_View
{
    class Program
    {
        static void Main(string[] args)
        {
            var tokens = Console.ReadLine()
                          .Split(' ')
                          .Select(int.Parse)
                          .ToArray();

            var elementsToSkip = tokens[0];
            var elementsToTake = tokens[1];

            var input = Console.ReadLine();

            var results = new List<string>();
            var regex =new Regex(@"\|<(\w+)");
            var matches = regex.Matches(input);

            foreach (Match match in matches)
            {
                var convertedString = string.Concat(
                                      match.ToString()
                                      .Skip(elementsToSkip + 2)
                                      .TakeWhile(x => x != '|')
                                      .Take(elementsToTake));
                results.Add(string.Concat(convertedString));
            }

            Console.WriteLine(String.Join(", ", results));
        }
    }
}