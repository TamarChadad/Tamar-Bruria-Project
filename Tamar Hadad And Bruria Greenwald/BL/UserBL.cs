using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class UserBL
    {
        //TODO: change the conversions

        public static IEnumerable<UserDTO> GetAll( )
        {
            IEnumerable<User> listUsers = UserDAL.GetAll();
            foreach (var user in listUsers)
            {
                yield return Conversions.ConvertToDTO<User,UserDTO>(user);
            }
        }

        public static UserDTO GetUser(int id)
        {
            return Conversions.ConvertToDTO<User,UserDTO>(UserDAL.GetUser(id));
        }

        public static void AddUser(UserDTO user)
        {
            UserDAL.AddUser(Conversions.ConvertToEntity<UserDTO,User>(user));
        }

        public static void UpdateUser( int id, UserDTO user)
        {
            UserDAL.UpdateUser(Conversions.ConvertToEntity<UserDTO,User>(user), id);
        }

        public static void DeleteUser(int id)
        {
            UserDAL.DeleteUser(id);
        }
    }
}
