using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class RentDTO:IDTOTables
    {
        public int Rid { get; set; }
        public int RuserId { get; set; }
        public System.DateTime RfromDate { get; set; }
        public System.DateTime RtoDate { get; set; }
        public int Rprice { get; set; }
        public string Rpassword { get; set; }
        public bool Ractive { get; set; }
        public int RprogramId { get; set; }
        public bool Rstatus { get; set; }
    }
}
