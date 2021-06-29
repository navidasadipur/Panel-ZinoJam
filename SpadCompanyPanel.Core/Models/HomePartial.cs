using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SpadCompanyPanel.Core.Models
{
    public class HomePartial : IBaseEntity
    {
        public int Id { get; set; }

        [Display(Name = "عنوان")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string Title { get; set; }

        [Display(Name = "توضیح عنوان")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string SubTitle { get; set; }

        [Display(Name = "باتن عنوان")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string SubTitleButton { get; set; }

        [Display(Name = "تصویر کاور")]
        public string CoverImage { get; set; }

        [Display(Name = "تصویر یک")]
        public string ImageOne { get; set; }
        [Display(Name = "توضیح تصویر یک")]
        public string ShortDescriptionOne { get; set; }

        [Display(Name = "تصویر دو")]
        public string ImageTwo { get; set; }
        [Display(Name = "توضیح تصویر دو")]
        public string ShortDescriptionTwo { get; set; }

        [Display(Name = "ویدئو")]
        public string Video { get; set; }

        [Display(Name = "توضیح ویدئو")]
        [DataType(DataType.MultilineText)]
        public string VideoDescriptions { get; set; }

        public string InsertUser { get; set; }
        public DateTime? InsertDate { get; set; }
        public string UpdateUser { get; set; }
        public DateTime? UpdateDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
