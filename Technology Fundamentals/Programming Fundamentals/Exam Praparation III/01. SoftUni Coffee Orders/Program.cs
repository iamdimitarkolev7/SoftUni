using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.SoftUni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
          
            decimal totalPrice = 0m;

            for (int i = 0; i < n; i++)
            {
                decimal capsulePrice = decimal.Parse(Console.ReadLine());
                string[] date = Console.ReadLine().Split('/').ToArray();
                decimal capsules = decimal.Parse(Console.ReadLine());

                int days = 0;

                string month = date[1];
                int year = int.Parse(date[2]);

                if ((month == "1" || month == "01") ||
                    (month == "3" || month == "03") ||
                    (month == "5" || month == "05") ||
                    (month == "7" || month == "07") ||
                    (month == "8" || month == "08") ||
                    (month == "10") || (month == "12"))
                {
                    days = 31;
                }

                else if (month == "4" || month == "04" || month == "6" || month == "06" || month == "9" || month == "09" || month == "11")
                {
                    days = 30;
                }

                else if (year % 4 == 0 && (date[1] == "02" || date[1] == "2"))
                {
                    days = 29;
                }

                else if (year % 4 != 0 && (date[1] == "02" || date[1] == "2"))
                {
                    days = 28;
                }

                decimal price = 0;
                price = (decimal)((days * capsules) * capsulePrice);

                Console.WriteLine($"The price for the coffee is: ${price:F2}");

                totalPrice += price;
            }

            Console.WriteLine($"Total: ${totalPrice:F2}");
        }
    }
}
