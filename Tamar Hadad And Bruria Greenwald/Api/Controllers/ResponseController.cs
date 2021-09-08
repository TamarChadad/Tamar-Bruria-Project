using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;

namespace Api.Controllers
{
    public class ResponseController : ApiController
    {
        // GET api/response
        public IEnumerable<ResponseDTO> Get()
        {
            return ResponseBL.GetAll();
        }

        // GET api/response/5
        public ResponseDTO Get(int id)
        {
            return ResponseBL.GetResponse(id);
        }

        // POST api/response
        public void Post([FromBody]ResponseDTO response)
        {
            ResponseBL.AddResponse(response);
        }

        // PUT api/response/5
        public void Put(int id, [FromBody]ResponseDTO response)
        {
            ResponseBL.UpdateResponse(id, response);
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
            UserBL.DeleteUser(id);
        }
    }
}
