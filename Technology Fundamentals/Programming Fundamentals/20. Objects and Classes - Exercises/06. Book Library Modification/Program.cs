using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace _06.Book_Library_Modification
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var bookData = new Dictionary<string, DateTime>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(' ').ToList();

                var title = input[0];
                DateTime date = DateTime.ParseExact(input[3], "d.M.yyyy", CultureInfo.InvariantCulture);

                bookData[title] = date;
            }

            var date1 = Console.ReadLine();
            var givenDate = DateTime.ParseExact(date1, "d.M.yyyy", CultureInfo.InvariantCulture);

            foreach (var book in bookData.OrderBy(x => x.Value).ThenBy(x => x.Key))
            {
                if (givenDate < book.Value)
                {
                    Console.WriteLine($"{book.Key} -> {book.Value:dd.MM.yyyy}");
                }
            }
        }
    }
}
