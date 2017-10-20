using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Days_Of_Week
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] days =
            {
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            };

            int dayOfWeek = int.Parse(Console.ReadLine());

            if (dayOfWeek >= 1 && dayOfWeek <= 7)
            {
                Console.WriteLine(days[dayOfWeek - 1]);
            }
            else
            {
                Console.WriteLine("Invalid day!");
            }
        }
    }
}
