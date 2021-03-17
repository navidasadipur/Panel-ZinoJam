using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SpadCompanyPanel.Web.ViewModels
{
    public class IndexPartViewModels
    {
        public string Title { get; set; }
        public string ShortDescription { get; set; }

        public string Description { get; set; }

        public string ButtonLink { get; set; }

        public string CoverImage { get; set; }

        public string Part2Image { get; set; }
        public string part2Description { get; set; }

        public string part3Image { get; set; }
        public string part3Description { get; set; }
        
        public string Video { get; set; }

        [AllowHtml]
        public string VideoDescriptions { get; set; }
    }
}