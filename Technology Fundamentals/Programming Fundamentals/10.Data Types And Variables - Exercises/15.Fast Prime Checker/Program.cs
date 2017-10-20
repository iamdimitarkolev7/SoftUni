using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.Fast_Prime_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int counter = 0;
            for (int i = 2; i <= n; i++)
            {
                bool isTrue = true;
                {
                    for (int j = 2; j <= Math.Sqrt(i); j++)
                    {
                        while (i % j == 0) 
                        {
                            isTrue = false;
                            break;
                        }
                    }
                    Console.WriteLine($"{i} -> {isTrue}");
                }
            }
        }
    }
}
