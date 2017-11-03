using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _02.Extract_Sentence_By_Keyword
{
    class Program
    {
        static void Main(string[] args)
        {
            var keyWord = Console.ReadLine();
            var input = Console.ReadLine();

            var matches = Regex.Split(input, @"[\.\!\?]");

            foreach (var match in matches)
            {
                var splittedMatch = Regex.Split(match, @"[^A-Za-z]");

                foreach (var word in splittedMatch)
                {
                    if (word == keyWord)
                    {
                        Console.WriteLine(match.TrimStart().TrimEnd());
                    }
                }
            }
        }
    }
}
