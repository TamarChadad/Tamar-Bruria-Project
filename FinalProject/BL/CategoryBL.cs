using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
  public  class CategoryBL
    {
        public static IEnumerable<CategoryDTO> GetAll()
        {
            IEnumerable<Category> listCategories = CategoryDAL.GetAll();
            foreach (var category in listCategories)
            {
                yield return Conversions.ConvertToDTO<Category, CategoryDTO>(category);
            }
        }

        public static CategoryDTO GetCategory(int id)
        {
            return Conversions.ConvertToDTO<Category, CategoryDTO>(CategoryDAL.GetCategory(id));
        }

        public static void AddCategory(CategoryDTO category)
        {
            CategoryDAL.AddCategory(Conversions.ConvertToEntity<CategoryDTO, Category>(category));
        }

        public static void UpdateCategory(int id, CategoryDTO category)
        {
            CategoryDAL.UpdateCategory(Conversions.ConvertToEntity<CategoryDTO, Category>(category), id);
        }

        public static void DeleteCategory(int id)
        {
           CategoryDAL.DeleteCategory(id);
        }
    }
}
