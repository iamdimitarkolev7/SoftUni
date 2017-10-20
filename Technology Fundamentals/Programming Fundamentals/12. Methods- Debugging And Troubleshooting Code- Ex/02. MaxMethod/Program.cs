using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.MaxMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 0, b = 0;
            int c = int.Parse(Console.ReadLine());
            int d = GetMax(a, b);
            if (d >= c)
                Console.WriteLine(d);
            else
                Console.WriteLine(c);
        }

        static int GetMax(int a, int b)
        {
            a = int.Parse(Console.ReadLine());
            b = int.Parse(Console.ReadLine());

            if (a >= b)
            {
                return a;
            }
            else
            {
                return b;
            }
        }
    }
}
