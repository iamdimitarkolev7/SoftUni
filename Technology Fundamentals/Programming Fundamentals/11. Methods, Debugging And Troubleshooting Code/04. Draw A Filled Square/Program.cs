using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Draw_A_Filled_Square
{
    class Program
    {
        static void PrintFilledSquare(int n)
        {
            Console.WriteLine(new string('-', 2 * n));
            for (int i = 1; i <= n - 2; i++) 
            {
                Console.Write("-");
                for (int j = 0; j <= n - 2;j++)
                {
                    Console.Write("\\/");
                }
                Console.WriteLine("-");
            }
            Console.WriteLine(new string('-', 2 * n));
        }
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            PrintFilledSquare(n);
        }
    }
}
