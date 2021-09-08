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
        public string PcategoryId { get; set; }
        public int Pprice { get; set; }
        public int PextraPriceForAdditionalScreening { get; set; }
        public DateTime PproductionDate { get; set; }
    }
}
