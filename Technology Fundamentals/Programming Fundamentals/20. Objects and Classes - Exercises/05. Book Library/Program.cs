using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace _05.Book_Library
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var books = new List<Book>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine();
                books.Add(ReadBook(input));
            }

            Library library = new Library
            {
                Name = "Library",

                Book = books
            };

            var BooksSumByAuthor = new Dictionary<string, double>();

            foreach (var book in library.Book)
            {
                if (!BooksSumByAuthor.ContainsKey(book.Author))
                {
                    BooksSumByAuthor.Add(book.Author, book.Price);
                }

                else
                {
                    BooksSumByAuthor[book.Author] += book.Price;
                }
            }

            foreach (var pair in BooksSumByAuthor.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{pair.Key} -> {pair.Value:F2}");
            }
        }

        static Book ReadBook(string input)
        {
            var tokens = input.Split(' ');

            string title = tokens[0];
            string author = tokens[1];
            string publisher = tokens[2];
            DateTime releaseDate = DateTime.ParseExact(tokens[3], "d.M.yyyy", CultureInfo.InvariantCulture);
            string isbn = tokens[4];
            double price = double.Parse(tokens[5]);

            return new Book
            {
                Title = title,

                Author = author,

                Publisher = publisher,

                ReleaseDate = releaseDate,

                ISBN = isbn,

                Price = price
            };
        }
    }

    class Library
    {
        public string Name { get; set; }

        public List<Book> Book { get; set; }
    }

    class Book
    {
        public string Title { get; set; }

        public string Author { get; set; }

        public string Publisher { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string ISBN { get; set; }

        public double Price { get; set; }
    }
}
