using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Fibonacci_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            FibonacciNumbers(n);
        }

        static void FibonacciNumbers(int n)
        {
            int num1 = 0;
            int num2 = 1;
            int num3 = 1;
            for (int i = 0; i < n - 1; i++) 
            {
                if (n == 0) 
                {
                    Console.WriteLine("1");
                    return;
                }
                else
                {
                    num1 = num2;
                    num2 = num3;
                    num3 = num1 + num2;
                }
                
            }
            Console.WriteLine(num3);
        }
    }
}
