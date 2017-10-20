using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _19.Thea_The_Photographer
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfPictures = int.Parse(Console.ReadLine());
            int filterTime = int.Parse(Console.ReadLine());
            int filterFactor = int.Parse(Console.ReadLine());
            int uploadTime = int.Parse(Console.ReadLine());

            long usefulPictures = (long)Math.Ceiling(numberOfPictures - numberOfPictures * (filterFactor / 100.00));
  
            long totalTime = numberOfPictures * filterTime + usefulPictures * uploadTime;
            
            TimeSpan seconds = TimeSpan.FromSeconds(totalTime);
            string time = string.Format("{0:D1}:{1:D2}:{2:D2}:{3:D2}",
                                        seconds.Days,
                                        seconds.Hours,
                                        seconds.Minutes,
                                        seconds.Seconds);
            Console.WriteLine(time);
        }
    }
}
