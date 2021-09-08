using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class ResponseDTO:IDTOTables
    {
        public int RSid { get; set; }
        public int RSprogramId { get; set; }
        public int RSuserId { get; set; }
        public string RSdescription { get; set; }
        public bool RSshown { get; set; }

    }
}
