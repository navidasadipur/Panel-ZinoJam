using SpadCompanyPanel.Core.Models;
using System;
using System.Collections.Generic;
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
    }
}
