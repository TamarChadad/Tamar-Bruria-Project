using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
  public class FileTypeBL
    {
        public static IEnumerable<FileTypeDTO> GetAll()
        {
            IEnumerable<FileType> listFileTypes = FileTypeDAL.GetAll();
            foreach (var fileType in listFileTypes)
            {
                yield return Conversions.ConvertToDTO<FileType, FileTypeDTO>(fileType);
            }
        }

        public static FileTypeDTO GetFileType(int id)
        {
            return Conversions.ConvertToDTO<FileType, FileTypeDTO>(FileTypeDAL.GetFileType(id));
        }

        public static void AddFileType(FileTypeDTO fileType)
        {
            FileTypeDAL.AddFileType(Conversions.ConvertToEntity<FileTypeDTO, FileType>(fileType));
        }

        public static void UpdateFileType(int id, FileTypeDTO fileType)
        {
            FileTypeDAL.UpdateFileType(Conversions.ConvertToEntity<FileTypeDTO, FileType>(fileType), id);
        }

        public static void DeleteFileType(int id)
        {
            FileTypeDAL.DeleteFileType(id);
        }
    }
}
