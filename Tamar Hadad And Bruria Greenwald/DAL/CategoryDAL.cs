using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class CategoryDAL
    {
        public static IEnumerable<Category> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Category.ToList();
            }
        }

        public static Category GetCategory(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Category.Single(c => c.Cid == id);
            }
        }

        public static void AddCategory(Category category)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                ctx.Category.Add(category);
                ctx.SaveChanges();
            }
        }

        public static void UpdateCategory(Category category, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Category categoryToRemove = ctx.Category.Single(c=> c.Cid == id);
                ctx.Category.Remove(categoryToRemove);
                ctx.Category.Add(category);
                ctx.SaveChanges();
            }
        }

        public static void DeleteCategory(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Category categoryToRemove = ctx.Category.Single(c => c.Cid == id);
                ctx.Category.Remove(categoryToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
