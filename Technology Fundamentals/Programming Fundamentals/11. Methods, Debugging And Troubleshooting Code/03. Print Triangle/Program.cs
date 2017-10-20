using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Print_Triangle
{
    class Program
    {
        static void Main(string[] args)
        {
            int end = int.Parse(Console.ReadLine());
            PrintTriangle(1, end);
        }

        static void PrintTriangle(int start, int end)
        {
            for (int i = start; i <= end; i++)
            {
                for (int j = start; j <= i; j++)
                {
                    Console.Write(j + " ");
                }
                Console.WriteLine();
            }
            for (int i = end; i > start; i--) 
            {
                for (int j = start; j < i ; j++)  
                {
                    Console.Write(j + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
