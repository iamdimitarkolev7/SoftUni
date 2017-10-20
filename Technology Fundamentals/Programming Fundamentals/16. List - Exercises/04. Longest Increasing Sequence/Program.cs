using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Longest_Increasing_Sequence
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> listOfNumbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> listOfIncreasingNumbers = new List<int>();


            for (int i = 0; i < listOfNumbers.Count; i++)
            {
                int len = 0;
                int currentMinNumber = listOfNumbers[i];
                for (int j = 0; j < listOfNumbers.Count; i++)
                {
                    if (currentMinNumber > listOfNumbers[j])
                    {
                        listOfNumbers[j] = currentMinNumber;
                        len++;
                        if (currentMinNumber < listOfNumbers[j])
                        {
                            listOfIncreasingNumbers.Add(listOfNumbers[j]);
                        }
                    }
                    
                }
            }
        }
    }
}
