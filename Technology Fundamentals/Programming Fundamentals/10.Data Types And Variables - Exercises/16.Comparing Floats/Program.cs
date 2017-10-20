using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16.Comparing_Floats
{
    class Program
    {
        static void Main(string[] args)
        {
            float a = float.Parse(Console.ReadLine());
            float b = float.Parse(Console.ReadLine());

            float eps = 0.000001f;
            bool isTrue = false;
            decimal difference = Math.Abs((decimal)a -(decimal)b);

            if ((decimal)difference >= (decimal)eps)
            {
                Console.WriteLine(isTrue);
            }
            else
            {
                isTrue = true;
                Console.WriteLine(isTrue);
            }
        }
    }
}
