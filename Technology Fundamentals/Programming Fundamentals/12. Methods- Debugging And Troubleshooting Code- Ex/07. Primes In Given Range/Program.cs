using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Primes_In_Given_Range
{
    class Program
    {
        static void Main(string[] args)
        {
            int startNum = int.Parse(Console.ReadLine());
            int endNum = int.Parse(Console.ReadLine());
            FindPrimesInRange(startNum, endNum);
        }

        static void FindPrimesInRange(int startNum, int endNum)
        {
            if (startNum < 2)
            {
                startNum = 2;
            }
            bool firstPrime = true;

            for (int i = startNum; i <= endNum; i++)
            {
                bool prime = true;
                for (int devisor = 2; devisor <= Math.Sqrt(endNum); devisor++)
                {
                    if (i % devisor == 0)
                    {
                        prime = false;
                        break;
                    }
                }
                if (firstPrime == true && prime == true)
                {
                    Console.Write(i);
                    firstPrime = false;
                }
                else if (prime)
                {
                    Console.Write(", ");
                    Console.Write(i);
                }
            }
        }
    }
}
