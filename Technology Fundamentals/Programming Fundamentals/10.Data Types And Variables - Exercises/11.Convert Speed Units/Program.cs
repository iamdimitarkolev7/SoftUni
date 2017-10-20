using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Convert_Speed_Units
{
    class Program
    {
        static void Main(string[] args)
        {
            float distance = float.Parse(Console.ReadLine());
            float hours = float.Parse(Console.ReadLine());
            float minutes = float.Parse(Console.ReadLine());
            float seconds = float.Parse(Console.ReadLine());

            float secondsAll = seconds + minutes * 60 + hours * 3600;
            float metresPerSecond = distance / secondsAll;
            float kilometresPerHour = (distance / 1000) / (secondsAll / 3600);
            float milesPerHour = (distance / 1609f) / (secondsAll / 3600);
            Console.WriteLine($"{metresPerSecond}");
            Console.WriteLine($"{kilometresPerHour}");
            Console.WriteLine($"{milesPerHour}");
        }
    }
}
