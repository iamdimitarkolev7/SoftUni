using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _03.Nether_Realms
{
    class Program
    {
        static void Main(string[] args)
        {
            var demons = Console.ReadLine()
                        .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                        .ToArray();

            var pattern = @"\b[\d.\-\+]+\b";
            var regex = new Regex(pattern);
            var dictionary = new Dictionary<string, Result>();

            var list = new List<char>();

            for (int i = 0; i < demons.Length; i++) 
            {
                int sumHealth = 0;
                double sumDamage = 0;

                var demon = demons[i];
                char a = default(char);
                for (int j = 0; j < demon.Length; j++)
                {
                    a = demon[j];

                    if (!(a == '*' || a == '/' || a == '+' || a == '-' || a == '.' || a == '0' || a == '1' || a == '2' || a == '3'|| a == '4' || a == '5' || a == '6' || a == '7' || a == '8' || a == '9'))
                    {
                        sumHealth += (int)a;
                    }

                    if (a == '*' || a == '/')
                    {
                        list.Add(a);
                    }
                }

                var matches = regex.Matches(demon);

                sumDamage = Regex.Split(demon, @"[^(\d.\-\+)]+")
                           .Where(s => !string.IsNullOrEmpty(s))
                           .Select(s => double.Parse(s))
                           .Sum();

                for (int k = 0; k < list.Count; k++)
                {
                    if (list[k] == '*')
                    {
                        sumDamage *= 2;
                    }

                    else
                    {
                        sumDamage /= 2;
                    }
                }

                Result result = new Result()
                {
                    Health = sumHealth,
                    Damage = sumDamage
                };
                
                dictionary[demon] =  result;
            }

            foreach (var demon in dictionary.OrderBy(x => x.Key))
            {
                Console.WriteLine($"{demon.Key} - {demon.Value.Health} health, {demon.Value.Damage:F2} damage ");
            }
        }
    }

    public class Result
    {
        public int Health { get; set; }
        
        public double Damage { get; set; }
    }
}
