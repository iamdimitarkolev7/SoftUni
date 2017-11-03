using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.LadyBugs
{
    class Program
    {
        static void Main(string[] args)
        {
            int fieldSize = int.Parse(Console.ReadLine());
            int[] bugs = Console.ReadLine()
                        .Split(' ')
                        .Select(int.Parse)
                        .ToArray();
            string command = Console.ReadLine();

            var result = new int[fieldSize];

            while (command != "end")
            {
                string[] splittedCommand = command
                                          .Split(' ')
                                          .ToArray();
                int startingIndex = int.Parse(splittedCommand[0]);
                string direction = splittedCommand[1];
                int endingIndex = int.Parse(splittedCommand[2]);

                int count = 0;
                int movement = Math.Abs(endingIndex - startingIndex);

                bool nothingHappens1 = (startingIndex < fieldSize || endingIndex < fieldSize || startingIndex > fieldSize - 1 || endingIndex > fieldSize - 1);
                bool nothingHappens2 = (count == bugs.Length);
                bool nothingHappens3 = ((direction == "right" && startingIndex + movement > fieldSize - 1) || (direction == "left" && startingIndex - movement < 0));

                for (int i = 0; i < bugs.Length; i++)
                {
                    if (startingIndex != bugs[i])
                    {
                        count++;
                    }
                }

                // in these 3 cases nothing should happen and we omit them 
                if (nothingHappens1 || nothingHappens2 || nothingHappens3)
                {
                    command = Console.ReadLine();
                    continue;
                }

                
            }
        }
    }
}