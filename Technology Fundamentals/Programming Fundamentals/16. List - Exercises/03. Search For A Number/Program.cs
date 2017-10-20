using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Search_For_A_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> listOfIntegers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int[] arrayOfIntegers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int firstNumber = arrayOfIntegers[0];
            int secondNumber = arrayOfIntegers[1];
            int thirdNumber = arrayOfIntegers[2];

            var resultList = new List<int>();

            listOfIntegers = listOfIntegers.Skip(0).Take(firstNumber).ToList();
            listOfIntegers.RemoveRange(0, secondNumber);
            var result = listOfIntegers.Contains(thirdNumber) ? "YES!" : "NO!";

            Console.WriteLine(result); 
        }
    }
}
