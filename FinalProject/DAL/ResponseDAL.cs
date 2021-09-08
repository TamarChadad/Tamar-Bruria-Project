using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class ResponseDAL
    {
        public static IEnumerable<Response> GetAll()
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Response.ToList();
            }
        }

        public static Response GetResponse(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                return ctx.Response.Single(r => r.RSid == id);
            }
        }

        public static void AddResponse(Response response)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                ctx.Response.Add(response);
                ctx.SaveChanges();
            }
        }

        public static void UpdateResponse(Response response, int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Response responseToRemove = ctx.Response.Single(r => r.RSid == id);
                ctx.Response.Remove(responseToRemove);
                ctx.Response.Add(response);
                ctx.SaveChanges();
            }
        }

        public static void DeleteResponse(int id)
        {
            using (ProgramsEntities ctx = new ProgramsEntities())
            {
                Response responseToRemove = ctx.Response.Single(r => r.RSid == id);
                ctx.Response.Remove(responseToRemove);
                ctx.SaveChanges();
            }
        }
    }
}
