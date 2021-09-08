using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    class Conversions
    {        
        public static TDTO ConvertToDTO<TEntity, TDTO>(TEntity Entity) where TEntity : IDALTables where TDTO : IDTOTables
        {
            return Convert<TEntity, TDTO>(Entity);
        }

        public static TEntity ConvertToEntity<TDTO, TEntity>(TDTO DTO) where TDTO : IDTOTables where TEntity : IDALTables
        {
            return Convert<TDTO, TEntity>(DTO);
        }
        private static T Convert<TEntity, T>(TEntity Entity)
        {
            Assembly asem = Assembly.GetAssembly(typeof(T));
            T dtoObject = (T)asem.CreateInstance((typeof(T)).FullName);
            foreach (var propOfDTO in dtoObject.GetType().GetProperties())
            {
                var propEntity = Entity.GetType().GetProperty(propOfDTO.Name);
                if (propEntity == null) continue;
                {
                    propOfDTO.SetValue(dtoObject, propEntity.GetValue(Entity));
                }
            }
            return dtoObject;
        }
    }
}
