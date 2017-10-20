using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Triple_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            long[] arr = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            long count = 0;

            for (long i = 0; i < arr.Length; i++)
            {
                for (long j = i + 1; j < arr.Length; i++)
                {
                    for (long k = 0; k < arr.Length; k++)
                    {
                        if (arr[i] + arr[j] == arr[k])
                        {
                            Console.WriteLine($"{arr[i]} + {arr[j]} == {arr[k]}");
                            count++;
                            break;
                        }
                    }
                }
            }
            if (count == 0)
            {
                Console.WriteLine("No");
            }
        }
    }
}
