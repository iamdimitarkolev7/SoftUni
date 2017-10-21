using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Andrey_and_Billiard
{
    public class AndreyAndBilliard
    {
        public static void Main()
        {
            var n = int.Parse(Console.ReadLine());
            var ProductsPrice = new Dictionary<string, double>();
            for (int i = 0; i < n; i++)
            {
                var product = Console.ReadLine()
                    .Split('-')
                    .ToList();
                ProductsPrice[product[0]] = double.Parse(product[1]);
            }
            var billByPerson = new SortedDictionary<string, Dictionary<string, double>>();
            var personOrder = Console.ReadLine().Split(new char[] { '-', ',' }, StringSplitOptions.RemoveEmptyEntries);
            var totalBill = 0.0;
            while (personOrder[0] != "end of clients")
            {
                var quantity = double.Parse(personOrder[2]);
                if (ProductsPrice.ContainsKey(personOrder[1]))
                {
                    if (billByPerson.ContainsKey(personOrder[0]))
                    {
                        if (billByPerson[personOrder[0]].ContainsKey(personOrder[1]))
                        {
                            billByPerson[personOrder[0]][personOrder[1]] += quantity * ProductsPrice[personOrder[1]];
                        }
                        else
                        {
                            billByPerson[personOrder[0]][personOrder[1]] = quantity * ProductsPrice[personOrder[1]];
                        }
                        totalBill += billByPerson[personOrder[0]][personOrder[1]];
                    }
                    else
                    {
                        billByPerson.Add(personOrder[0], new Dictionary<string, double>());
                        billByPerson[personOrder[0]][personOrder[1]] = quantity * ProductsPrice[personOrder[1]];
                        totalBill += billByPerson[personOrder[0]][personOrder[1]];
                    }

                }
                personOrder = Console.ReadLine().Split(new char[] { '-', ',' }, StringSplitOptions.RemoveEmptyEntries);
            }
            var finalBill = 0.0;
            foreach (var person in billByPerson)
            {
                Console.WriteLine(person.Key);
                var personalBill = 0.0;
                foreach (var bill in person.Value)
                {
                    var finalQuantity = bill.Value / ProductsPrice[bill.Key];
                    var product = bill.Key;
                    if (double.IsNaN(finalQuantity))
                    {
                        finalQuantity = 0;
                    }
                    Console.WriteLine($"-- {product} - {finalQuantity}");
                    personalBill += bill.Value;
                    finalBill += bill.Value;
                }
                Console.WriteLine($"Bill: {personalBill:f2}");
            }
            Console.WriteLine($"Total bill: {finalBill:f2}");
        }
    }
}