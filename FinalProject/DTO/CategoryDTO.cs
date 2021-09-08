using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class CategoryDTO:IDTOTables
    {
        public int Cid { get; set; }
        public string Cname { get; set; }
        public string Cdescription { get; set; }
    }
}
