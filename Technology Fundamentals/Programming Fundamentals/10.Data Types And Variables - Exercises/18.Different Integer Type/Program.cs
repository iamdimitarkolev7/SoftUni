using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18.Different_Integer_Type
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = Console.ReadLine();

            try
            {
                long number = long.Parse(n);

                Console.WriteLine("{0} can fit in: ", number);
                if (number <= sbyte.MaxValue && number >= sbyte.MinValue)
                {
                    Console.WriteLine("* sbyte");
                }
                if (number <= byte.MaxValue && number >= byte.MinValue)
                {
                    Console.WriteLine("* byte");
                }
                if (number <= short.MaxValue && number >= short.MinValue)
                {
                    Console.WriteLine("* short");
                }
                if (number <= ushort.MaxValue && number >= ushort.MinValue)
                {
                    Console.WriteLine("* ushort");
                }
                if (number <= int.MaxValue && number >= int.MinValue)
                {
                    Console.WriteLine("* int");
                }
                if (number <= uint.MaxValue && number >= uint.MinValue)
                {
                    Console.WriteLine("* uint");
                }
                if (number <= long.MaxValue && number >= long.MinValue)
                {
                    Console.WriteLine("* long");
                }
            }
            catch
            {
                Console.WriteLine("{0} can't fit in any type", n);
            }
        }
    }
}
