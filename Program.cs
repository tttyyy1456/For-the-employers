using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Переделываю_из_JavaScript
{
    class Program
    {
        static void Main(string[] args)
        {

            /*Write a function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1, 2, 3], 4)should return [1, 3]*/

            int[] array = { 1, 2, 3, 4, 5, 6, 7, 8 };

            func(array, );

            Console.ReadKey();
        }

        public static void func(int[] arr, int num)
        {
            List<int> result = new List<int>() { };
            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = 0; j < arr.Length; j++)
                {
                    if (arr[j] + arr[i] == num)
                    {
                        result.Add(arr[i]);
                        result.Add(arr[j]);
                        break;

                    }
                }
                if (result.Count >= 2)
                {
                    break;
                }
            }
            Console.WriteLine(result[0] + "," + result[1]);
        }
    }
}
