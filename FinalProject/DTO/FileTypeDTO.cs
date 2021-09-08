using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class FileTypeDTO:IDTOTables
    {
        public int FTid { get; set; }
        public string FTname { get; set; }
        public string FTdescription { get; set; }
    }
}
