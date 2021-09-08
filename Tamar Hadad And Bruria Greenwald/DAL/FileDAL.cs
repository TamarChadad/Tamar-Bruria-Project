using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class FileDAL
    {
        public static IEnumerable<File> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.File.ToList();
            }
        }

        public static File GetFile(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.File.Single(f => f.Fid == id);
            }
        }

        public static void AddFile(File file)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                ctx.File.Add(file);
                ctx.SaveChanges();
            }
        }

        public static void UpdateFile(File file, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                File fileToRemove = ctx.File.Single(f => f.Fid == id);
                ctx.File.Remove(fileToRemove);
                ctx.File.Add(file);
                ctx.SaveChanges();
            }
        }

        public static void DeleteFile(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                File fileToRemove = ctx.File.Single(f => f.Fid == id);
                ctx.File.Remove(fileToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
