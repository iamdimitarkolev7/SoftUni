using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Character_Multiplier
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').ToArray();

            var firstCharacters = input[0].ToCharArray();
            var secondCharacters = input[1].ToCharArray();

            var biggerLength = firstCharacters.Length;
            var smallerLength = 0;
            var difference = 0;

            if (firstCharacters.Length != secondCharacters.Length)
            {
                biggerLength = Math.Max(firstCharacters.Length, secondCharacters.Length);
                smallerLength = Math.Min(firstCharacters.Length, secondCharacters.Length);

                difference = biggerLength - smallerLength;
            }

            int totalSum = 0;
            int multiplication = 1;

            if (difference == 0)
            {
                for (int i = 0; i < biggerLength; i++)
                {
                    multiplication = (int)firstCharacters[i] * (int)secondCharacters[i];
                    totalSum += multiplication;
                }
            }

            else
            {
                if (smallerLength == firstCharacters.Length)
                {
                    var sum1 = 0;
                    var sum2 = 0;

                    for (int i = 0; i < firstCharacters.Length; i++)
                    {
                        multiplication = (int)firstCharacters[i] * (int)secondCharacters[i];
                        sum1 += multiplication;
                    }

                    for (int j = secondCharacters.Length - difference; j < secondCharacters.Length; j++)
                    {
                        sum2 += (int)secondCharacters[j];
                    }

                    totalSum = sum1 + sum2;
                }

                else
                {
                    var sum1 = 0;
                    var sum2 = 0;

                    for (int i = 0; i < secondCharacters.Length; i++)
                    {
                        multiplication = (int)firstCharacters[i] * (int)secondCharacters[i];
                        sum1 += multiplication;
                    }

                    for (int j = firstCharacters.Length - difference; j < firstCharacters.Length; j++)
                    {
                        sum2 += (int)firstCharacters[j];
                    }

                    totalSum = sum1 + sum2;
                }
            }

            Console.WriteLine(totalSum);
        }
    }
}
