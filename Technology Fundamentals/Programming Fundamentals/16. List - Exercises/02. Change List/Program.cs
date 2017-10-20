using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Change_List
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            string command = Console.ReadLine();

            while (command != "Even" && command != "Odd")
            {
                var splittedCommand = command.Split(' ');
                var currentCommand = splittedCommand[0];
                int item = int.Parse(splittedCommand[1]);

                if (currentCommand == "Delete")
                {
                    list.RemoveAll(x => x == item);
                }
                else if (currentCommand == "Insert")
                {
                    int index = int.Parse(splittedCommand[2]);
                    list.Insert(index, item);
                }
                command = Console.ReadLine();
            }

            if (command == "Even")
            {
                list.RemoveAll(x => x % 2 != 0);
            }
            else if (command == "Odd")
            {
                list.RemoveAll(x => x % 2 == 0);
            }

            Console.WriteLine(String.Join(" ", list));
        }
    }
}
