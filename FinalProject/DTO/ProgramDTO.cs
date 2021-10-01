using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
public class ProgramDTO:IDTOTables
    {
        public int Pid { get; set; }
        public string Pname { get; set; }
        public int PcategoryId { get; set; }
        public int Pprice { get; set; }
        public int PextraPriceForAdditionalScreening { get; set; }
        public DateTime PproductionDate { get; set; }
        public string Ptype { get; set; }
        public string PtargetAudience { get; set; }
        public int Ptime { get; set; }
        public string Pdescription { get; set; }
    }
}
