using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class FileDTO:IDTOTables
    {
        public int Fid { get; set; }
        public string Fname { get; set; }
        public string Fpath { get; set; }
        public int FtypeId { get; set; }
        public int FprogramId { get; set; }
    }
}
