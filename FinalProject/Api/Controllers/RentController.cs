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
    public class RentController : ApiController
    {
        // GET api/rent
        public IEnumerable<RentDTO> Get()
        {
            return RentBL.GetAll();
        }

        // GET api/rent/5
        public RentDTO Get(string id)
        {
            return RentBL.GetRent(id);
        }

        // POST api/rent
        public void Post([FromBody]RentDTO rent)
        {
            RentBL.AddRent(rent);
        }

        // PUT api/rent/5
        public void Put(string id, [FromBody]RentDTO rent)
        {
            RentBL.UpdateRent(id, rent);
        }

        // DELETE api/rent/5
        public void Delete(string id)
        {
            RentBL.DeleteRent(id);
        }
    }
}
