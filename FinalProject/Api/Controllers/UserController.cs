using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;
using System.Web.Http.Cors;


namespace Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    { // GET api/users
        [HttpGet()]
        [Route("")]
        public IEnumerable<UserDTO> Get()
        {
            return UserBL.GetAll();
        }

        // GET api/users/5       
        public UserDTO Get(int id)
        {
            return UserBL.GetUser(id);
        }
        [HttpPost()]
        [Route("")]
        // POST api/users
        public void Post([FromBody]UserDTO user)
        {
            UserBL.AddUser(user);
        }

        // PUT api/users/5
        public void Put(int id, [FromBody]UserDTO user)
        {
            UserBL.UpdateUser(id, user);
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
            UserBL.DeleteUser(id);
        }
        [HttpGet()]
        [Route("getName/{id}")]
        public string GetName(int id)
        {
            return UserBL.GetShortNameUser(id);
        }

        [HttpGet()]
        [Route("login/{userName}/{password}")]
        public UserDTO GetLogin(string userName, string password)
        {
            return UserBL.IsExistUserForLogin(userName, password);
        }
        //{
        //      "UfirstName":"Tamar",
        //"UlastName":"Chadad" ,
        //"Uaddress":"Ben Neria",
        //"Uemail": "t03707@gmail.com",
        //"Uphone":"0504108586",
        //"Upassword":"212562482", 
        //"UuserName":"t03707@gmail.com" 

        //}
    }
}
