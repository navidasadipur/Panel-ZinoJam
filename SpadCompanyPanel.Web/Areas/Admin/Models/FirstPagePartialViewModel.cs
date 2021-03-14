using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace spadcompanypanel.web.areas.admin.models
{
    public class FirstPagePartialViewModel
    {
        public FirstPagePartialViewModel()
        {
            VideoDescriptionsPartOne = new List<string>();
        }

        [Display(Name = "عنوان")]
        [MinLength(400, ErrorMessage = "عنوان باید از 400 کارکتر کمتر باشد")]
        public string TitlePartOne { get; set; }

        [Display(Name = "توضیح کوتاه")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string SubtitlePartOne { get; set; }

        [Display(Name = "متن دکمه")]
        public string SubtitlebuttonPartOne { get; set; }

        [Display(Name = "تصویر کاور")]
        public string CoverImagePartOne { get; set; }

        [Display(Name = "توضیح تصویر یک")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string ShortDescriptionOnePartOne { get; set; }
        [Display(Name = "تصویر یک")]
        public string ImageOnePartOne { get; set; }

        [Display(Name = "توضیح تصویر دو")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string ShortDescriptionTwoPartOne { get; set; }
        [Display(Name = "تصویر دو")]
        public string ImageTwoPartOne { get; set; }

        [Display(Name = "ویدئو")]
        public string VideoPartOne { get; set; }
        [Display(Name = "توضیح ویدئو")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public List<string> VideoDescriptionsPartOne { get; set; }



        [Display(Name = "عنوان")]
        [MinLength(400, ErrorMessage = "عنوان باید از 400 کارکتر کمتر باشد")]
        public string TitlePartTwo { get; set; }

        [Display(Name = "توضیح کوتاه")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string SubtitlePartTwo { get; set; }

        [Display(Name = "متن دکمه")]
        public string SubtitlebuttonPartTwo { get; set; }

        [Display(Name = "تصویر کاور")]
        public string CoverImagePartTwo { get; set; }

        [Display(Name = "توضیح تصویر یک")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string ShortDescriptionOnePartTwo { get; set; }
        [Display(Name = "تصویر یک")]
        public string ImageOnePartTwo { get; set; }

        [Display(Name = "توضیح تصویر دو")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string ShortDescriptionTwoPartTwo { get; set; }
        [Display(Name = "تصویر دو")]
        public string ImageTwoPartTwo { get; set; }

        [Display(Name = "ویدئو")]
        public string VideoPartTwo { get; set; }
        [Display(Name = "توضیح ویدئو")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public List<string> VideoDescriptionsPartTwo { get; set; }



        [Display(Name = "عنوان")]
        [MinLength(400, ErrorMessage = "عنوان باید از 400 کارکتر کمتر باشد")]
        public string TitlePartThree { get; set; }

        [Display(Name = "توضیح کوتاه")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string SubtitlePartThree { get; set; }

        [Display(Name = "متن دکمه")]
        public string SubtitlebuttonPartThree { get; set; }

        [Display(Name = "تصویر کاور")]
        public string CoverImagePartThree { get; set; }

        [Display(Name = "توضیح تصویر یک")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string ShortDescriptionOnePartThree { get; set; }
        [Display(Name = "تصویر یک")]
        public string ImageOnePartThree { get; set; }

        [Display(Name = "توضیح تصویر دو")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public string ShortDescriptionTwoPartThree { get; set; }
        [Display(Name = "تصویر دو")]
        public string ImageTwoPartThree { get; set; }

        [Display(Name = "ویدئو")]
        public string VideoPartThree { get; set; }
        [Display(Name = "توضیح ویدئو")]
        [DataType(DataType.MultilineText)]
        [AllowHtml]
        public List<string> VideoDescriptionsPartThree { get; set; }
    }
}