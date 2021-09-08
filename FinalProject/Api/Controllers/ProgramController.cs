using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;
using System.Web.Http.Cors;

namespace Api.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class ProgramController : ApiController
    {
        // GET api/program
        public IEnumerable<ProgramDTO> Get()
        {
            return ProgramBL.GetAll();
        }

        // GET api/program/5
        public ProgramDTO Get(int id)
        {
            return ProgramBL.GetProgram(id);
        }

        // POST api/program
        public void Post([FromBody]ProgramDTO program)
        {
            ProgramBL.AddProgram(program);
        }

        // PUT api/program/5
        public void Put(int id, [FromBody]ProgramDTO program)
        {
            ProgramBL.UpdateProgram(id, program);
        }

        // DELETE api/program/5
        public void Delete(int id)
        {
            ProgramBL.DeleteProgram(id);
        }
    }
}
