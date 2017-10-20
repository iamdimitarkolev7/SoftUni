using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            /*var inputLine = Console.ReadLine();
            string[] items = inputLine.Split(' ');
            int[] arr = items.Select(int.Parse).ToArray();
            Console.WriteLine(String.Join(" ", arr));*/

            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            Console.WriteLine(String.Join(" ", arr));
        }
    }
}
