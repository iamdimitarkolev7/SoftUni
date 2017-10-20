using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Prime_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            long n = long.Parse(Console.ReadLine());
            string isPrime = IsPrime(n);
            Console.WriteLine(isPrime);
        }

        static string IsPrime(long n)
        {
            string prime = "True";
            if (n == 0 || n == 1)
            {
                prime = "False";
            }
            else
            {
                for (long i = 2; i <= Math.Sqrt(n); i++)
                {
                    if (n % i == 0)
                    {
                        prime = "False";
                    }
                }
            }
            return prime;
        }
    }
}
