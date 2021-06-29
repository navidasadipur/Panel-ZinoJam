using SpadCompanyPanel.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpadCompanyPanel.Web.ViewModels
{
    public class ProductViewModel
    {
        public ProductViewModel(){
            Products = new List<Product>();
            ProductCategories = new List<ProductCategory>();
        }

        public List<Product> Products { get; set; }
        public List<ProductCategory> ProductCategories { get; set; }
    }
}