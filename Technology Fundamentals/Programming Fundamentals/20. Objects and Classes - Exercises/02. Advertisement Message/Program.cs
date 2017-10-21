using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Advertisement_Message
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            var phrase = new[]
            {
               "Excellent product.",
               "Such a great product.",
               "I always use that product.",
               "Best product of its category.",
               "Exceptional product.",
               "I can't live without this product."
            }.ToList();

            var events = new[]
            {
                "Now I feel good.",
                "I have succeeded with this product",
                "Makes miracles. I'm happy of the results!",
                "I cannot believe but now I feel awesome.",
                "Try it yourself, I'm very satisfied.",
                "I feel great!"
            }.ToList();

            var authors = new[]
            {
                "Diana",
                "Petya",
                "Stella",
                "Elena",
                "Katya",
                "Iva",
                "Annie",
                "Eva"
            }.ToList();

            var cities = new[]
            {
                "Burgas",
                "Sofia",
                "Plovdiv",
                "Varna",
                "Ruse"
            }.ToList();

            var random = new Random();

            for (int i = 0; i < n; i++)
            {
                var phraseIndex = random.Next(0, phrase.Count());
                var eventIndex = random.Next(0, events.Count());
                var authorIndex = random.Next(0, authors.Count());
                var citiesIndex = random.Next(0, cities.Count());

                Console.WriteLine($"{phrase[phraseIndex]} {events[eventIndex]} {authors[authorIndex]} - {cities[citiesIndex]}");
            }
        }
    }
}
