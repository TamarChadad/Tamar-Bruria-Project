using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
 public   class FileTypeDAL
    {
        public static IEnumerable<FileType> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.FileType.ToList();
            }
        }

        public static FileType GetFileType(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.FileType.Single(f => f.FTid == id);
            }
        }

        public static void AddFileType(FileType fileType)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                ctx.FileType.Add(fileType);
                ctx.SaveChanges();
            }
        }

        public static void UpdateFileType(FileType fileType, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                FileType fileTypeToRemove = ctx.FileType.Single(f => f.FTid == id);
                ctx.FileType.Remove(fileTypeToRemove);
                ctx.FileType.Add(fileType);
                ctx.SaveChanges();
            }
        }

        public static void DeleteFileType(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                FileType fileTypeToRemove = ctx.FileType.Single(f => f.FTid == id);
                ctx.FileType.Remove(fileTypeToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
