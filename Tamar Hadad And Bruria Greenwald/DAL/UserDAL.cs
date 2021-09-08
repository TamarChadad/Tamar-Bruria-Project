using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserDAL
    {
        public static IEnumerable<User> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.User.ToList();
            }
        }

        public static User GetUser(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.User.Single(u => u.Uid == id);
            }
        }

        public static void AddUser(User user)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
               ctx.User.Add(user);
                ctx.SaveChanges();
            }
        }

        public static void UpdateUser(User user, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                User userToRemove = ctx.User.Single(u => u.Uid == id);
                ctx.User.Remove(userToRemove);
                ctx.User.Add(user);
                ctx.SaveChanges();
            }
        }

        public static void DeleteUser(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                User userToRemove = ctx.User.Single(u => u.Uid == id);
                ctx.User.Remove(userToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
