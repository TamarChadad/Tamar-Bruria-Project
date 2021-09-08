using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
   public class ProgramBL
    {
        public static IEnumerable<ProgramDTO> GetAll()
        {
            IEnumerable<Program> listPrograms = ProgramDAL.GetAll();
            foreach (var program in listPrograms)
            {
                yield return Conversions.ConvertToDTO<Program, ProgramDTO>(program);
            }
        }

        public static ProgramDTO GetProgram(int id)
        {
            return Conversions.ConvertToDTO<Program, ProgramDTO>(ProgramDAL.GetProgram(id));
        }

        public static void AddProgram(ProgramDTO program)
        {
            ProgramDAL.AddProgram(Conversions.ConvertToEntity<ProgramDTO, Program>(program));
        }

        public static void UpdateProgram(int id, ProgramDTO program)
        {
            ProgramDAL.UpdateProgram(Conversions.ConvertToEntity<ProgramDTO, Program>(program), id);
        }

        public static void DeleteProgram(int id)
        {
            ProgramDAL.DeleteProgram(id);
        }
    }
}
