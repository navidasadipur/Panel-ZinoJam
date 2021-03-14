using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SpadCompanyPanel.Infrastructure.Repositories;
using SpadCompanyPanel.Core.Models;
using System.Net;
using System.IO;
using SpadCompanyPanel.Infrastructure.Helpers;
using SpadCompanyPanel.Web.Areas.Admin.Models;
using spadcompanypanel.web.areas.admin.models;

namespace SpadCompanyPanel.Web.Areas.Admin.Controllers
{
    [Authorize]
    public class FirstPageController : Controller
    {
        private readonly IndexPartialRepository _repo;
        public FirstPageController(IndexPartialRepository repo)
        {
            _repo = repo;
        }

        public ActionResult Index()
        {
            //var indexPartials = _repo.GetAll().OrderBy(model => model.Id).ToList();

            var firstPageViewModel = new FirstPagePartialViewModel();

            return View(firstPageViewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(FirstPagePartialViewModel model)
        {
            var indexPartials = _repo.GetAll().OrderBy(index => index.Id).ToList();

            //for (int i = 0; i < indexPartials.Count(); i++)
            //{
            //    if (indexPartials[i] == null)
            //    {
            //        for (int j = 0; j < i; j++)
            //        {
            //            _repo.Update(model[j]);
            //        }
            //        for (int j = 0; j >= i; j++)
            //        {
            //            _repo.Add(model[j]);
            //        }
            //    }
            //}

            return RedirectToAction("Index");
        }

        public ActionResult Create11()
        {
            return PartialView();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Gallery image, HttpPostedFileBase GalleryImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (GalleryImage != null)
                {
                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(GalleryImage.FileName);
                    GalleryImage.SaveAs(Server.MapPath("/Files/GalleryImages/Temp/" + newFileName));

                    // Resizing Image
                    ImageResizer imageCut = new ImageResizer(1200, 1200, true);

                    imageCut.Resize(Server.MapPath("/Files/GalleryImages/Temp/" + newFileName),
                        Server.MapPath("/Files/GalleryImages/" + newFileName));

                    ImageResizer thumb = new ImageResizer(600, 600, true);

                    thumb.Resize(Server.MapPath("/Files/GalleryImages/Temp/" + newFileName),
                        Server.MapPath("/Files/GalleryImages/Thumb/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/GalleryImages/Temp/" + newFileName));
                    image.Image = newFileName;
                }
                #endregion

                //_repo.Add(image);
                return RedirectToAction("Index");
            }

            return View(image);
        }
    }
}