using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
   public class RentBL
    {
        public static IEnumerable<RentDTO> GetAll()
        {
            IEnumerable<Rent> listRents = RentDAL.GetAll();
            foreach (var rent in listRents)
            {
                yield return Conversions.ConvertToDTO<Rent, RentDTO>(rent);
            }
        }

        public static RentDTO GetRent(string id)
        {
            return Conversions.ConvertToDTO<Rent, RentDTO>(RentDAL.GetRent(id));
        }

        public static void AddRent(RentDTO rent)
        {
            RentDAL.AddRent(Conversions.ConvertToEntity<RentDTO, Rent>(rent));
        }

        public static void UpdateRent(string id, RentDTO rent)
        {
            RentDAL.UpdateRent(Conversions.ConvertToEntity<RentDTO, Rent>(rent), id);
        }

        public static void DeleteRent(string id)
        {
            RentDAL.DeleteRent(id);
        }
    }
}
