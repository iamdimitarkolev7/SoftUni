using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Extract_Middle_1_2_Or_3_Element
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int[] arrayToExtract = new int[array.Length];
            int count = 0;

            for (int i = 0; i < array.Length; i++)
            {
                arrayToExtract[i] = array[i];
            }

            if (array.Length == 1)
            {
                Console.WriteLine("{" + $"{arrayToExtract[0]}" + "}");
            }
            else if (array.Length % 2 == 0)
            {
                Console.Write("{");
                for (int i = 0; i < arrayToExtract.Length; i++)
                {
                    if (i == array.Length / 2 - 1 || i == array.Length / 2)
                    {
                        Console.Write($"{arrayToExtract[i]}");
                        count++;
                        if (count < 2)
                        {
                            Console.Write(", ");
                        }
                        else
                        {
                            break;
                        }
                    }
                }
                Console.Write("}");
                Console.WriteLine();
            }
            else
            {
                Console.Write("{");
                for (int i = 0; i < arrayToExtract.Length; i++)
                {
                    if (i == array.Length / 2 - 1 || i == array.Length / 2 || i == array.Length / 2 + 1)
                    {
                        Console.Write($"{arrayToExtract[i]}");
                        count++;
                        if (count < 3)
                        {
                            Console.Write(", ");
                        }
                        else
                        {
                            break;
                        }
                    }
                }
                Console.Write("}");
                Console.WriteLine();
            }
        }
    }
}
