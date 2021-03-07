using SpadCompanyPanel.Core.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace SpadCompanyPanel.Infrastructure.Repositories
{
    public class ProductsRepository : BaseRepository<Product, MyDbContext>
    {
        private readonly MyDbContext _context;
        private readonly LogsRepository _logger;
        public ProductsRepository(MyDbContext context, LogsRepository logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }

        public List<Product> GetAllProducts()
        {
            return _context.Products.Where(a => a.IsDeleted == false).Include(g => g.ProductCategory).OrderByDescending(a => a.InsertDate).ToList();
        }

        public List<Product> getProductsByCategoryId(int id)
        {
            var allGalleries = _context.Products.Where(g => g.IsDeleted == false).Include(g => g.ProductCategory);

            var GalleryIdCategory = allGalleries.Where(g => g.ProductCategory.Id == id).OrderByDescending(g => g.Id).ToList();

            return GalleryIdCategory;
        }
    }
}
