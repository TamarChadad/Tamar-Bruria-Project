using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserDTO:IDTOTables
    {
        public int Uid { get; set; }
        public string UfirstName { get; set; }
        public string UlastName { get; set; }
        public string Uaddress { get; set; }
        public string Uemail { get; set; }
        public string Uphone { get; set; }
        public string Upassword { get; set; }
        public string UuserName { get; set; }
    }
}
