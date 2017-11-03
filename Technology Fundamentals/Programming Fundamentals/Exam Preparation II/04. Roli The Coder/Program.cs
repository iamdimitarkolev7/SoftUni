using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Roli_The_Coder
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var IDWithName = new Dictionary<int, string>();
            var IDWithGuests = new Dictionary<int, List<string>>();

            while (input != "Time for Code")
            {
                var tokens = input
                                    .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                    .ToArray();

                int ID = int.Parse(tokens[0]);
                string eventName = tokens[1];

                bool valid = true;

                if (eventName.First() != '#')
                {
                    valid = false;
                }

                for (int i = 2; i < tokens.Length; i++)
                {
                    if (tokens[i].First() != '@')
                    {
                        valid = false;
                        break;
                    }
                }

                if (valid)
                {
                    if (!IDWithName.ContainsKey(ID))
                    {
                        IDWithName[ID] = eventName;
                        IDWithGuests[ID] = tokens.Where((x, i) => i > 1).Distinct().ToList();
                    }

                    else
                    {
                        if (IDWithName[ID] == eventName)
                        {
                            IDWithGuests[ID].AddRange(tokens.Where((x, i) => i > 1).Distinct().ToList());
                            IDWithGuests[ID] = IDWithGuests[ID].Distinct().ToList();
                        }
                    }
                }

                input = Console.ReadLine();
            }

            IDWithName = IDWithName.OrderByDescending(x => IDWithGuests[x.Key].Count)
                         .ThenBy(x => x.Value)
                         .ToDictionary(x => x.Key, x => x.Value);

            foreach (var item in IDWithName)
            {
                Console.WriteLine($"{item.Value.Substring(1, item.Value.Count() - 1)} - {IDWithGuests[item.Key].Count}");

                foreach (var guest in IDWithGuests[item.Key].OrderBy(x => x))
                {
                    Console.WriteLine(guest);
                }
            }
        }
    }
}
