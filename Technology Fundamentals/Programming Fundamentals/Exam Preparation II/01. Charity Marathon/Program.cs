using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Charity_Marathon
{
    class Program
    {
        static void Main(string[] args)
        {
            long days = long.Parse(Console.ReadLine()); // marathon's length in days
            long participants = long.Parse(Console.ReadLine()); // number of participants
            long averageLaps = long.Parse(Console.ReadLine()); // average laps every runner make
            long trackLength = long.Parse(Console.ReadLine()); // the length of the track
            long trackCapacity = long.Parse(Console.ReadLine()); // the capacity of the track
            double donationsPerKM = double.Parse(Console.ReadLine()); // donations per kilometre

            long participantsThatWillCompete = participants;

            if (participantsThatWillCompete > trackCapacity)
            {
                participantsThatWillCompete = trackCapacity;
            }

            long maximumParticipants = days * participantsThatWillCompete;

            long runners = 0;

            if (maximumParticipants > participants)
            {
                runners = participants;
            }
            else
            {
                runners = maximumParticipants;
            }

            long totalKilometres = (runners * averageLaps * trackLength) / 1000;

            double raisedMoney = totalKilometres * donationsPerKM;

            Console.WriteLine($"Money raised: {raisedMoney:F2}");
        }
    }
}
