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
    public class FileController : ApiController
    {
        // GET api/file
        public IEnumerable<FileDTO> Get()
        {
            return FileBL.GetAll();
        }

        // GET api/file/5
        public FileDTO Get(int id)
        {
            return FileBL.GetFile(id);
        }

        // POST api/file
        public void Post([FromBody]FileDTO file)
        {
            FileBL.AddFile(file);
        }

        // PUT api/file/5
        public void Put(int id, [FromBody]FileDTO file)
        {
            FileBL.UpdateFile(id, file);
        }

        // DELETE api/file/5
        public void Delete(int id)
        {
            FileBL.DeleteFile(id);
        }
    }
}
