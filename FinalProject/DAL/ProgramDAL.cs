using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class ProgramDAL
    {
        public static IEnumerable<Program> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Program.ToList();
            }
        }

        public static Program GetProgram(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Program.Single(p => p.Pid == id);
            }
        }

        public static void AddProgram(Program program)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                ctx.Program.Add(program);
                ctx.SaveChanges();
            }
        }

        public static void UpdateProgram(Program program, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Program programToRemove = ctx.Program.Single(p => p.Pid == id);
                ctx.Program.Remove(programToRemove);
                ctx.Program.Add(program);
                ctx.SaveChanges();
            }
        }

        public static void DeleteProgram(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Program programToRemove = ctx.Program.Single(p => p.Pid == id);
                ctx.Program.Remove(programToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
