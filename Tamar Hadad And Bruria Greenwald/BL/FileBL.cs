using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
   public class FileBL
    {
        public static IEnumerable<FileDTO> GetAll()
        {
            IEnumerable<File> listFiles = FileDAL.GetAll();
            foreach (var file in listFiles)
            {
                yield return Conversions.ConvertToDTO<File, FileDTO>(file);
            }
        }

        public static FileDTO GetFile(int id)
        {
            return Conversions.ConvertToDTO<File, FileDTO>(FileDAL.GetFile(id));
        }

        public static void AddFile(FileDTO file)
        {
            FileDAL.AddFile(Conversions.ConvertToEntity<FileDTO, File>(file));
        }

        public static void UpdateFile(int id, FileDTO file)
        {
            FileDAL.UpdateFile(Conversions.ConvertToEntity<FileDTO, File>(file), id);
        }

        public static void DeleteFile(int id)
        {
            FileDAL.DeleteFile(id);
        }
    }
}
