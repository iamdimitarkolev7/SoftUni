using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Condense_Array_To_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            while (nums.Length > 1)
            {
                int[] condense = new int[nums.Length - 1];
                for (int i = 0; i < condense.Length; i++)
                {
                    condense[i] = nums[i] + nums[i + 1];
                    nums[i] = condense[i];
                }
                nums = condense;
            }
            Console.WriteLine(nums[0]);
        }
    }
}
