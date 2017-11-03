namespace _04.Files
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class File
    {
        public File(string root, string fileNameAndExt, long fileSize)
        {
            this.Root = root;
            this.FileNameAndExtension = fileNameAndExt;
            this.FileSize = fileSize;
        }

        public string Root { get; set; }

        public string FileNameAndExtension { get; set; }

        public long FileSize { get; set; }
    }

    public class Files
    {
        public static void Main()
        {
            var numberOfFilesToRead = int.Parse(Console.ReadLine());

            var file = new List<File>();

            for (int i = 0; i < numberOfFilesToRead; i++)
            {
                var fileInput = Console.ReadLine().Split('\\');
                var nameAndExtensionArgs = fileInput[fileInput.Length - 1].Split(';');

                var root = fileInput[0];
                var fileNameAndExt = nameAndExtensionArgs[0];
                var size = long.Parse(nameAndExtensionArgs[1]);

                var index = file.FindIndex(r => r.Root == root & r.FileNameAndExtension == fileNameAndExt);
                var fileAddInfo = new File(root, fileNameAndExt, size);

                if (index < 0)
                {
                    file.Add(fileAddInfo);
                }

                else
                {
                    file[index] = fileAddInfo;
                }
            }

            var resultInput = Console.ReadLine().Split();
            var extension = resultInput[0];
            var folder = resultInput[2];

            var sorted = file
                .Where(r => r.Root == folder)
                .Where(e => e.FileNameAndExtension.EndsWith(extension))
                .OrderByDescending(s => s.FileSize)
                .ThenBy(n => n.FileNameAndExtension);

            if (sorted.Count() == 0)
            {
                Console.WriteLine("No");
                return;
            }

            foreach (var item in sorted)
            {
                Console.WriteLine($"{item.FileNameAndExtension} - {item.FileSize} KB");
            }
        }
    }
}