using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Endurance_Race
{
    class Program
    {
        static void Main(string[] args)
        {
            var drivers = Console.ReadLine()
                         .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                         .Select(x => x.Trim())
                         .ToList();
            var zones = Console.ReadLine()
                       .Split(' ')
                       .Select(double.Parse)
                       .ToList();
            var checkPoint = Console.ReadLine()
                             .Split(' ')
                             .Select(int.Parse)
                             .ToList();

            foreach (var driver in drivers)
            {
                double startingFuel = driver[0];
                int reachedPossition = 0;
                
                for (int j = 0; j < zones.Count; j++)
                {
                    bool isTrue = false;

                    for (int k = 0; k < checkPoint.Count; k++)
                    {
                        if (j == checkPoint[k])
                        {
                            isTrue = true;
                            break;
                        }
                    }
                    // checking isTrue
                    if (isTrue)
                    {
                        startingFuel += zones[j];
                    }
                    else
                    {
                        startingFuel -= zones[j];
                    }
                    // checking startingFuel
                    if (startingFuel > 0)
                    {
                        reachedPossition++;
                    }
                    else
                    {
                        Console.WriteLine($"{driver} - reached {reachedPossition}");
                        break;
                    }
                }

                if (startingFuel > 0)
                {
                    Console.WriteLine($"{driver} - fuel left {startingFuel:F2}");
                }
            }
        }
    }
}
