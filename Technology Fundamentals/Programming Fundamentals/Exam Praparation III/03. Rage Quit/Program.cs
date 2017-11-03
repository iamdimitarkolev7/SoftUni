namespace _03.Rage_Quit
{
    using System;
    using System.Linq;
    using System.Text;
    using System.Text.RegularExpressions;

    public class RageQuit
    {
        public static void Main()
        {
            var text = Console.ReadLine();

            var regex = new Regex(@"([\D]+)([\d]+)");

            var resultString = GetResultString(text, regex);

            Console.WriteLine($"Unique symbols used: {resultString.Distinct().Count()}");
            Console.WriteLine(GetResultString(text, regex));
        }

        public static string GetResultString(string text, Regex regex)
        {
            var matches = regex.Matches(text);

            var resultString = new StringBuilder();

            foreach (Match match in matches)
            {
                var symbols = match.Groups[1].Value;
                var number = int.Parse(match.Groups[2].ToString());

                var currentResult = string.Concat(Enumerable.Repeat(symbols, number));
                resultString.Append(currentResult);
            }

            return resultString.ToString().ToUpper();
        }
    }
}