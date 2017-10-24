using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Palindromes
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine()
                           .Split(new char[] { ',', ' ', '.', ':', ';', '?', '!' }, StringSplitOptions.RemoveEmptyEntries)
                           .ToArray();
            List<string> palindromes = new List<string>();

            foreach (string word in words)
            {
                    string halfTheWord = word.Substring(0, word.Length / 2);
                    char[] reverse = word.ToCharArray();
                    Array.Reverse(reverse);
                    string reversedWord = new string(reverse);
                    string wordOtherHalf = reversedWord.Substring(0, reversedWord.Length / 2);

                if (halfTheWord == wordOtherHalf)
                {
                    if (!palindromes.Contains(word))
                    {
                        palindromes.Add(word);
                    }
                }
            }

            Console.WriteLine(String.Join(", ", palindromes.OrderBy(x => x)));
        }
    }
}
