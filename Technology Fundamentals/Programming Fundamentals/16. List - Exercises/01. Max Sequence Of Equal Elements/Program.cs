using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Max_Sequence_Of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int bestLen = 0;
            int bestNum = 0;
            int currentNumber = 0;

            for (int i = 0; i < list.Count; i++)
            {
                currentNumber = 0;
                for (int j = 0; j < list.Count; j++)
                {
                    if (list[i] == list[j])
                    {
                        currentNumber++;
                    }
                    if (currentNumber > bestLen)
                    {
                        bestLen = currentNumber;
                        bestNum = list[i];
                    }
                }
            }

            for (int i = 0; i < bestLen; i++)
            {
                Console.Write(bestNum + " ");
            }
        }
    }
}
