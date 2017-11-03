using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            /*DateTime input = DateTime.Parse(Console.ReadLine());
            int steps = int.Parse(Console.ReadLine()) % 86400;
            int stepsPerSecond = int.Parse(Console.ReadLine()) % 86400;

            int timeSpendWalking = steps * stepsPerSecond;

            DateTime result = input.AddSeconds(timeSpendWalking);
            Console.WriteLine("Time Arrival: {0:HH:mm:ss}", result);*/

            /*
                string[] timeInput = Console.ReadLine().Split(':');
                int hours = int.Parse(timeInput[0]) * 3600;
                int minutes = int.Parse(timeInput[1]) * 60;
                int seconds = int.Parse(timeInput[2]);
                int totalInputInSeconds = hours + minutes + seconds;

                BigInteger steps = int.Parse(Console.ReadLine());
                BigInteger secPerStep = int.Parse(Console.ReadLine());

                BigInteger totalTimeInSeconds = (steps * secPerStep) + totalInputInSeconds;

                BigInteger arriveHour = (totalTimeInSeconds / 3600) % 24;
                BigInteger arriveMinute = (totalTimeInSeconds / 60) % 60;
                BigInteger arriveSecond = totalTimeInSeconds % 60;

                Console.WriteLine($"Time Arrival: {arriveHour:00}:{arriveMinute:00}:{arriveSecond:00}");
           */

            DateTime input = DateTime.Parse(Console.ReadLine());
            int steps = int.Parse(Console.ReadLine()) % 86400;
            int stepsPerSec = int.Parse(Console.ReadLine()) % 86400;

            int timeSpentWalking = steps * stepsPerSec;

            DateTime result = input.AddSeconds(timeSpentWalking);

            Console.WriteLine($"Time Arrival: {result:HH:mm:ss}");
        }
    }
}
