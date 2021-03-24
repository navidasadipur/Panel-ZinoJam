using SpadCompanyPanel.Core.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpadCompanyPanel.Infrastructure.Repositories
{
    public class ProdectCategoriesRepository : BaseRepository<ProductCategory, MyDbContext>
    {
        private readonly MyDbContext _context;
        private readonly LogsRepository _logger;
        public ProdectCategoriesRepository(MyDbContext context, LogsRepository logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }

        public List<ProductCategory> GetAllProductCategories()
        {


            var allCategories = _context.ProductCategories.Where(a => a.IsDeleted == false).OrderByDescending(a => a.InsertDate).ToList();

            foreach (var category in allCategories)
            {
                var categoryProducts = _context.Products.Where(p => p.ProductCategoryId == category.Id & p.IsDeleted == false).ToList();
                category.Products.Concat(categoryProducts);
            }
            //var notDeletedProducts = allCategories.Select(c => c.Products.Where(p => p.IsDeleted == false)).ToList();


            return allCategories;
        }

        //public List<GalleryCategory> GetGalleryCategories()
        //{
        //    return _context. /* Galleries.Where(a => a.IsDeleted == false).ToList();*/
        //}


        //public Cover GetFirstCover()
        //{
        //    return _context.Covers.FirstOrDefault(c => c.IsDeleted == false);
        //}

        //public string GetArticleName(int articleId)
        //{
        //    return _context.Articles.Find(articleId).Title;
        //}
    }
}
