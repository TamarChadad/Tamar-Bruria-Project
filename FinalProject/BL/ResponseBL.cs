using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
  public  class ResponseBL
    {
        public static IEnumerable<ResponseDTO> GetAll()
        {
            IEnumerable<Response> listResponse = ResponseDAL.GetAll();
            foreach (var response in listResponse)
            {
                yield return Conversions.ConvertToDTO<Response, ResponseDTO>(response);
            }
        }

        public static ResponseDTO GetResponse(int id)
        {
            return Conversions.ConvertToDTO<Response, ResponseDTO>(ResponseDAL.GetResponse(id));
        }

        public static void AddResponse(ResponseDTO response)
        {
            ResponseDAL.AddResponse(Conversions.ConvertToEntity<ResponseDTO, Response>(response));
        }

        public static void UpdateResponse(int id, ResponseDTO response)
        {
            ResponseDAL.UpdateResponse(Conversions.ConvertToEntity<ResponseDTO, Response>(response), id);
        }

        public static void DeleteResponse(int id)
        {
            ResponseDAL.DeleteResponse(id);
        }
    }
}
