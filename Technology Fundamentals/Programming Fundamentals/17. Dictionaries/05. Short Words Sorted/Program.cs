using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Short_Words_Sorted
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine()
                        .ToLower()
                        .Split(new[] { '.', ',', ':', ';', '(', ')', '[', ']', '"', '\\', '/', '!', '?', ' ', '\'' }, StringSplitOptions.RemoveEmptyEntries)
                        .OrderBy(x => x)
                        .Where(x => x.Length < 5)
                        .Distinct()
                        .ToArray();

            Console.WriteLine(String.Join(", ", words));
        }
    }
}
