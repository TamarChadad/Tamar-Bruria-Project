using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class RentDAL
    {
        public static IEnumerable<Rent> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Rent.ToList();
            }
        }

        public static Rent GetRent(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Rent.Single(r => r.Rid == id);
            }
        }

        public static void AddRent(Rent rent)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                ctx.Rent.Add(rent);
                ctx.SaveChanges();
            }
        }

        public static void UpdateRent(Rent rent, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Rent rentToRemove = ctx.Rent.Single(r => r.Rid == id);
                ctx.Rent.Remove(rentToRemove);
                ctx.Rent.Add(rent);
                ctx.SaveChanges();
            }
        }

        public static void DeleteRent(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Rent rentToRemove = ctx.Rent.Single(r => r.Rid == id);
                ctx.Rent.Remove(rentToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
