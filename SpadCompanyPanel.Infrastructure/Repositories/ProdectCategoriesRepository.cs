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

        public void DeleteCategoryAndItsProducts(int id)
        {
            //finding all ids of products of this category
            var productIds = _context.Products.Where(p => p.ProductCategoryId == id && p.IsDeleted == false).Select(p => p.Id).ToList();

            if (productIds == null)
            {
                return;
            }

            //delete all products
            foreach (var productId in productIds)
            {

                var productEntity = _context.Products.FirstOrDefault(p => p.Id == productId);

                productEntity.IsDeleted = true;

                _context.Entry(productEntity).State = EntityState.Modified;

                _context.SaveChanges();

                _logger.LogEvent(productEntity.GetType().Name, productEntity.Id, "Delete");
            }


            //delete category
            var categoryEntity = _context.ProductCategories.FirstOrDefault(c => c.Id == id && c.IsDeleted == false);

            if (categoryEntity == null)
            {
                return;
            }

            categoryEntity.IsDeleted = true;

            _context.Entry(categoryEntity).State = EntityState.Modified;

            _context.SaveChanges();

            _logger.LogEvent(categoryEntity.GetType().Name, categoryEntity.Id, "Delete");
        }

    }
}
