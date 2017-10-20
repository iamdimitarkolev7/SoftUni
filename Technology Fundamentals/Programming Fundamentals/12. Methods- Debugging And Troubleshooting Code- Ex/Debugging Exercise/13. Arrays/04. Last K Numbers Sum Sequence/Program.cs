using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Last_K_Numbers_Sum_Sequence
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());

            long[] seq = new long[n];
            
            seq[0] = 1;
            for (int i = 1; i < n; i++) 
            {
                long result = 0;
                for (int j = i - 1; j >= i - k && j >= 0; j--)
                {
                    result = result + seq[j];
                }
                seq[i] = result;
            }
            Console.WriteLine(String.Join(" ", seq));
        }
    }
}
