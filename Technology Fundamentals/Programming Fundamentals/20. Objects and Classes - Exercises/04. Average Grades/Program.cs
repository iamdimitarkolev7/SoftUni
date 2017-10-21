using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Average_Grades
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var studentData = new List<Student>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(' ').ToList();

                var name = input[0];
                var grades = input.Skip(1).Select(double.Parse).ToList();

                var student = new Student();
                {
                    student.Name = name;
                    student.Grades = grades;
                }

                studentData.Add(student);
            }

            studentData = studentData.OrderBy(x => x.Name)
                                     .ThenByDescending(x => x.AverageGrades)
                                     .ToList();

            foreach (var student in studentData)
            {
                if (student.AverageGrades >= 5.00)
                {
                    Console.WriteLine($"{student.Name} -> {student.AverageGrades:F2}");
                }
            }
        }
    }

    class Student
    {
        public string Name { get; set; }

        public List<double> Grades { get; set; }

        public double AverageGrades
        {
            get
            {
                return Grades.Average();
            }
        }
    }
}
