using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using SpadCompanyPanel.Core.Models;

namespace SpadCompanyPanel.Web.ViewModels
{
    public class NavbarViewModel
    {
        public NavbarViewModel()
        {
            ProductCategories = new List<ProductCategory>();
        }
        public List<ProductCategory> ProductCategories { get; set; }
        public List<Product> Products { get; set; }
    }

    public class AboutViewModel
    {
        [DataType(DataType.MultilineText)]
        public string AboutDescription { get; set; }
    }
    public class FooterViewModel
    {
        public StaticContentDetail Phone { get; set; }
        public StaticContentDetail Email { get; set; }
        public StaticContentDetail Address { get; set; }
        public StaticContentDetail Youtube { get; set; }
        public StaticContentDetail Instagram { get; set; }
        public StaticContentDetail Twitter { get; set; }
        public StaticContentDetail Facebook { get; set; }
        public StaticContentDetail Pinterest { get; set; }
        public StaticContentDetail SiteTitle { get; set; }
        public StaticContentDetail ShortDescription { get; set; }
        public StaticContentDetail SupportPhone { get; set; }
    }
    public class ContactUsViewModel
    {
        public StaticContentDetail Map { get; set; }
        public StaticContentDetail ContactInfo { get; set; }
        public StaticContentDetail Phone { get; set; }
        public StaticContentDetail Email { get; set; }
        public StaticContentDetail Address { get; set; }
        public StaticContentDetail Youtube { get; set; }
        public StaticContentDetail Instagram { get; set; }
        public StaticContentDetail Twitter { get; set; }
        public StaticContentDetail Facebook { get; set; }
        public StaticContentDetail Pinterest { get; set; }

        [MaxLength(600)]
        [Display(Name = "نام و نام خانوادگی")]
        [Required(AllowEmptyStrings = false,ErrorMessage = "لطفا {0} خود را وارد کنید")]
        public string Name { get; set; }
        
        [Display(Name = "متن")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "لطفا {0} خود را وارد کنید")]
        [DataType(DataType.MultilineText)]
        public string Message { get; set; }

        [Display(Name = "ایمیل")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "لطفا {0} خود را وارد کنید")]
        [EmailAddress(ErrorMessage = "{0} وارد شده معتبر نیست")]
        [MaxLength(600)]
        public string CustomerEmail { get; set; }


    }

    public class GalleryPageViewModel
    {
        public List<Gallery> Images { get; set; }
        public List<GalleryVideo> Videos { get; set; }
    }
}