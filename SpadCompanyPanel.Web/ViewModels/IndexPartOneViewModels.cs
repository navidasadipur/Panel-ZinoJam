using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpadCompanyPanel.Web.ViewModels
{
    public class HomePartViewModels
    {
        public string Title { get; set; }

        public string SubTitle { get; set; }

        public string SubTitleButton { get; set; }

        public string CoverImage { get; set; }

        public string ShortDescriptionOne { get; set; }
        public string ImageOne { get; set; }

        public string ShortDescriptionTwo { get; set; }
        public string ImageTwo { get; set; }
        
        public string Video { get; set; }
        public List<string> VideoDescriptions { get; set; }
    }
}