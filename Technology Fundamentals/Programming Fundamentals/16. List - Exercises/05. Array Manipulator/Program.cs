using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> listOfNumbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            var commandInput = Console.ReadLine().Split(' ');

            while (commandInput[0] != "print")
            {
                var currentCommand = commandInput[0];

                if (currentCommand == "add")
                {
                    var index = int.Parse(commandInput[1]);
                    var element = int.Parse(commandInput[2]);

                    listOfNumbers.Insert(index, element);
                }
                else if (currentCommand == "addMany")
                {
                    var index = int.Parse(commandInput[1]);
                    var elements = commandInput.Skip(2).Take(commandInput.Count()).Select(int.Parse).ToList();

                    listOfNumbers.InsertRange(index, elements);
                }
                else if (currentCommand == "contains")
                {
                    var element = int.Parse(commandInput[1]);

                    Console.WriteLine(listOfNumbers.IndexOf(element));
                }
                else if (currentCommand == "remove")
                {
                    var index = int.Parse(commandInput[1]);

                    listOfNumbers.RemoveAt(index);
                }
                else if (currentCommand == "shift")
                {
                    var position = int.Parse(commandInput[1]);
                    for (int i = 0; i < position; i++)
                    {
                        var shiftedElement = listOfNumbers[i];
                        listOfNumbers.Remove(listOfNumbers[i]);
                        listOfNumbers.Add(shiftedElement);
                    }
                }
                else if (currentCommand == "sumPairs")
                {
                    var secondaryList = new List<int>();

                    for (int i = 0; i < listOfNumbers.Count; i += 2)
                    {
                        secondaryList.Add(listOfNumbers[i] + listOfNumbers[i + 1]);
                    }

                    if (listOfNumbers.Count % 2 != 0)
                    {
                        secondaryList.Add(listOfNumbers.Last());
                    }

                    listOfNumbers = secondaryList;
                }
                commandInput = Console.ReadLine().Split(' ');
            }

            Console.WriteLine($"[{String.Join(", ", listOfNumbers)}]");
        }
    }
}
