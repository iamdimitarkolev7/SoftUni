using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Append_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> list = Console.ReadLine().Split(' ').ToList();
            list.Reverse();
            var result = new List<string>();

            foreach(var items in list)
            {
                List<string> numbers = items.Split(' ').ToList();
                foreach(var num in numbers)
                {
                    if (num != "|")
                    {
                        result.Add(num);
                    }
                }
            }
            
            Console.WriteLine(String.Join(" ", result));
        }
    }
}
