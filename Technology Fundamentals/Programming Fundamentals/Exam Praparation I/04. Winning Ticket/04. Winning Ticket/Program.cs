using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _04.Winning_Ticket
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                       .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                       .ToList();
            foreach (var ticket in input)
            {
                if (ticket.Length < 20) 
                {
                    Console.WriteLine("invalid ticket");
                }

                else
                {
                    var ticketLeftHalf = ticket.Substring(0, ticket.Count() / 2);
                    var ticketRightHalf = ticket.Substring(ticket.Count() / 2);

                    var pattern = @"[@]{ 6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}";
                    var regex = new Regex(pattern);

                    Match LeftHalf = regex.Match(ticketLeftHalf);
                    Match RightHalf = regex.Match(ticketRightHalf);

                    int min = Math.Min(LeftHalf.Length, RightHalf.Length);

                    if (LeftHalf.ToString().Substring(0, min) == RightHalf.ToString().Substring(0, min))
                    {
                        if (LeftHalf.Length == 10)
                        {
                            Console.WriteLine($"ticket \"{ticket}\" - {min}{LeftHalf.ToString().Substring(1, 1)} Jackpot!");
                        }

                        else if (LeftHalf.Length >= 6 && LeftHalf.Length < 10)
                        {
                            Console.WriteLine($"ticket \"{ticket}\" - {min}{LeftHalf.ToString().Substring(1, 1)}");
                        }
                        else
                        {
                            Console.WriteLine($"ticket \"{ticket}\" - no match");
                        }
                    }

                    else
                    {
                        Console.WriteLine($"ticket \"{ticket}\" - no match");
                    }
                }
            }
            
        }
    }
}
