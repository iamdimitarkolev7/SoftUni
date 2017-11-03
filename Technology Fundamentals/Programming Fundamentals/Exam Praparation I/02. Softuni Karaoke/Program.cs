using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoftuniKaraoke
{
    public class SoftuniKaraoke
    {
        public static void Main()
        {
            var participants = Console.ReadLine()
                              .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                              .Select(x => x.Trim())
                              .ToArray();
            var availableSongs = Console.ReadLine()
                                .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                .Select(x => x.Trim())
                                .ToArray();
            var input = Console.ReadLine();

            var winners = new Dictionary<string, List<string>>(); // keeps names of all the participants + list of their awards

            Again:

            while (input != "dawn")
            {
                var tokens = input.Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                   .Select(x => x.Trim())
                                   .ToArray();

                var participant = tokens[0];
                var song = tokens[1];
                var award = tokens[2];

                if (!participants.Any(s => s == participant) || !availableSongs.Any(s => s == song))
                {
                    input = Console.ReadLine();
                    goto Again;
                }

                if (!winners.ContainsKey(participant))
                {
                    winners.Add(participant, new List<string>());
                }

                winners[participant].Add(award);

                input = Console.ReadLine();
            }

            if (winners.Count == 0)
            {
                Console.WriteLine("No awards");
                return;
            }

            foreach  (var pair in winners.OrderByDescending(a => a.Value.Distinct().ToList().Count).ThenBy(x => x.Key))
            {
                var awards = pair.Value.Distinct().ToList();
                Console.WriteLine($"{pair.Key}: {awards.Count} awards");

                foreach (var award in awards.OrderBy(n => n))
                {
                    Console.WriteLine($"--{award}");
                }
            }
        }
    }
}
