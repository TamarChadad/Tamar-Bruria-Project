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

        public static Rent GetRent(string id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Rent.Single(r => r.Rid.Equals(id));
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

        public static void UpdateRent(Rent rent, string id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Rent rentToRemove = ctx.Rent.Single(r => r.Rid.Equals(id));
                ctx.Rent.Remove(rentToRemove);
                ctx.Rent.Add(rent);
                ctx.SaveChanges();
            }
        }

        public static void DeleteRent(string id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Rent rentToRemove = ctx.Rent.Single(r => r.Rid.Equals(id));
                ctx.Rent.Remove(rentToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
