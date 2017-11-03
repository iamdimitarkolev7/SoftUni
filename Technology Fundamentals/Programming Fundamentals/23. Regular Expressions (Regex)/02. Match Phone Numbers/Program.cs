using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _02.Match_Phone_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string phoneNumbers = Console.ReadLine();

            string pattern = @"\+359(-|\s)2\1\d{3}\1\d{4}";
            var matches = Regex.Matches(phoneNumbers, pattern);

            var validPhoneNumbers = matches
                                    .Cast<Match>()
                                    .Select(a => a.Value.Trim())
                                    .ToArray();

            Console.WriteLine(String.Join(", ", validPhoneNumbers));
            
        }
    }
}
