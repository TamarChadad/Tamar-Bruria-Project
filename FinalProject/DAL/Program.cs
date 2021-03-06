//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;

    public partial class Program : IDALTables
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Program()
        {
            this.File = new HashSet<File>();
            this.Rent = new HashSet<Rent>();
            this.Response = new HashSet<Response>();
        }

        public int Pid { get; set; }
        public string Pname { get; set; }
        public int PcategoryId { get; set; }
        public int Pprice { get; set; }
        public int PextraPriceForAdditionalScreening { get; set; }
        public System.DateTime PproductionDate { get; set; }
        public string Ptype { get; set; }
        public string PtargetAudience { get; set; }
        public Nullable<int> Ptime { get; set; }
        public string Pdescription { get; set; }

        public virtual Category Category { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<File> File { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Rent> Rent { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Response> Response { get; set; }
    }
}
