using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;
namespace Api.Controllers
{
    public class CategoryController : ApiController
    {
        // GET api/category
        public IEnumerable<CategoryDTO> Get()
        {
            return CategoryBL.GetAll();
        }

        // GET api/category/5
        public CategoryDTO Get(int id)
        {
            return CategoryBL.GetCategory(id);
        }

        // POST api/category
        public void Post([FromBody]CategoryDTO category)
        {
            CategoryBL.AddCategory(category);
        }

        // PUT api/category/5
        public void Put(int id, [FromBody]CategoryDTO category)
        {
            CategoryBL.UpdateCategory(id, category);
        }

        // DELETE api/category/5
        public void Delete(int id)
        {
            CategoryBL.DeleteCategory(id);
        }
    }
}
