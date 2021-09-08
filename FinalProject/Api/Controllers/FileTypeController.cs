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
    public class FileTypeController : ApiController
    {
        // GET api/fileType
        public IEnumerable<FileTypeDTO> Get()
        {
            return FileTypeBL.GetAll();
        }

        // GET api/fileType/5
        public FileTypeDTO Get(int id)
        {
            return FileTypeBL.GetFileType(id);
        }

        // POST api/fileType
        public void Post([FromBody]FileTypeDTO fileType)
        {
            FileTypeBL.AddFileType(fileType);
        }

        // PUT api/fileType/5
        public void Put(int id, [FromBody]FileTypeDTO fileType)
        {
            FileTypeBL.UpdateFileType(id, fileType);
        }

        // DELETE api/fileType/5
        public void Delete(int id)
        {
            FileTypeBL.DeleteFileType(id);
        }
    }
}
