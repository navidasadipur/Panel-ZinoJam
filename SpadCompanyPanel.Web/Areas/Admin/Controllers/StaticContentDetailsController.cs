using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SpadCompanyPanel.Core.Models;
using SpadCompanyPanel.Core.Utility;
using SpadCompanyPanel.Infrastructure;
using SpadCompanyPanel.Infrastructure.Helpers;
using SpadCompanyPanel.Infrastructure.Repositories;
using SpadCompanyPanel.Web.ViewModels;

namespace SpadCompanyPanel.Web.Areas.Admin.Controllers
{
    [Authorize]
    public class StaticContentDetailsController : Controller
    {
        private readonly StaticContentDetailsRepository _repo;
        public StaticContentDetailsController(StaticContentDetailsRepository repo)
        {
            _repo = repo;
        }
        // GET: Admin/StaticContentDetails
        public ActionResult Index()
        {
            var content = _repo.GetStaticContentDetails();
            content = content.OrderByDescending(c => c.StaticContentTypeId == (int) StaticContentTypes.Slider).ThenByDescending(c=>c.StaticContentTypeId).ToList();
            return View(content);
        }
        // GET: Admin/StaticContentDetails/Create
        public ActionResult Create()
        {
            ViewBag.StaticContentTypeId = (int)StaticContentTypes.Slider;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(StaticContentDetail staticContentDetail, HttpPostedFileBase StaticContentDetailImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (StaticContentDetailImage != null)
                {
                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(StaticContentDetailImage.FileName);
                    StaticContentDetailImage.SaveAs(Server.MapPath("/Files/StaticContentImages/Temp/" + newFileName));

                    // Resizing Image
                    ImageResizer image = new ImageResizer();
                    if (staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.Slider || staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.BlogImage)
                        image = new ImageResizer(1020, 700, true);
                    if (staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.CompanyHistory)
                        image = new ImageResizer(1000, 1000, true);
                    if (staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.FirstPageDetails)
                        image = new ImageResizer(2400, 2000, true);
                    //if (staticContentDetail.Id == 3024 || staticContentDetail.Id == 3036 || staticContentDetail.Id == 3041)
                    //    image = new ImageResizer(1200, 900, true);
                    //if (staticContentDetail.Id == 3024 || staticContentDetail.Id == 3036 || staticContentDetail.Id == 3041)
                    //    image = new ImageResizer(1200, 900, true);
                    //if (staticContentDetail.Id == 3029 || staticContentDetail.Id == 3037 || staticContentDetail.Id == 3042)
                    //    image = new ImageResizer(700, 700, true);
                    //if (staticContentDetail.Id == 3031 || staticContentDetail.Id == 3038 || staticContentDetail.Id == 3043)
                    //    image = new ImageResizer(1000, 1000, true);


                    if (staticContentDetail.Id == 3024)
                        image = new ImageResizer(1500, 820, true);
                    if (staticContentDetail.Id == 3029)
                        image = new ImageResizer(2100, 1700, true);
                    if (staticContentDetail.Id == 3031)
                        image = new ImageResizer(2200, 1700, true);

                    if (staticContentDetail.Id == 3036)
                        image = new ImageResizer(1500, 820, true);
                    if (staticContentDetail.Id == 3037)
                        image = new ImageResizer(2200, 1600, true);
                    if (staticContentDetail.Id == 3038)
                        image = new ImageResizer(2200, 2500, true);

                    if (staticContentDetail.Id == 3041)
                        image = new ImageResizer(1500, 820, true);
                    if (staticContentDetail.Id == 3042)
                        image = new ImageResizer(2000, 2500, true);
                    if (staticContentDetail.Id == 3043)
                        image = new ImageResizer(2500, 1500, true);

                    image.Resize(Server.MapPath("/Files/StaticContentImages/Temp/" + newFileName),
                        Server.MapPath("/Files/StaticContentImages/Image/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/StaticContentImages/Temp/" + newFileName));

                    staticContentDetail.Image = newFileName;
                }
                #endregion
                _repo.Add(staticContentDetail);

                return RedirectToAction("Index");
            }
            ViewBag.StaticContentTypeId = (int)StaticContentTypes.Slider;
            return View(staticContentDetail);
        }

        // GET: Admin/StaticContentDetails/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StaticContentDetail staticContentDetail = _repo.GetStaticContentDetail(id.Value);
            if (staticContentDetail == null)
            {
                return HttpNotFound();
            }
            ViewBag.StaticContentTypeId = new SelectList(_repo.GetStaticContentTypes(), "Id", "Name", staticContentDetail.StaticContentTypeId);
            return View(staticContentDetail);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(StaticContentDetail staticContentDetail, HttpPostedFileBase StaticContentDetailImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (StaticContentDetailImage != null)
                {
                    if (System.IO.File.Exists(Server.MapPath("/Files/StaticContentImages/Image/" + staticContentDetail.Image)))
                        System.IO.File.Delete(Server.MapPath("/Files/StaticContentImages/Image/" + staticContentDetail.Image));

                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(StaticContentDetailImage.FileName);
                    StaticContentDetailImage.SaveAs(Server.MapPath("/Files/StaticContentImages/Temp/" + newFileName));

                    // Resizing Image
                    ImageResizer image = new ImageResizer();
                    if (staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.Slider || staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.BlogImage)
                        image = new ImageResizer(1020, 700, true);
                    if (staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.CompanyHistory)
                        image = new ImageResizer(1000, 1000, true);
                    if (staticContentDetail.StaticContentTypeId == (int)StaticContentTypes.FirstPageDetails)
                        image = new ImageResizer(2400, 2000, true);

                    if (staticContentDetail.Id == 3024) 
                        image = new ImageResizer(1500, 820, true);
                    if (staticContentDetail.Id == 3029)
                        image = new ImageResizer(2100, 1700, true);
                    if (staticContentDetail.Id == 3031)
                        image = new ImageResizer(2200, 1700, true);

                    if (staticContentDetail.Id == 3036)
                        image = new ImageResizer(1500, 820, true);
                    if (staticContentDetail.Id == 3037)
                        image = new ImageResizer(2200, 1600, true);
                    if (staticContentDetail.Id == 3038)
                        image = new ImageResizer(2200, 2500, true);

                    if (staticContentDetail.Id == 3041)
                        image = new ImageResizer(1500, 820, true);
                    if (staticContentDetail.Id == 3042)
                        image = new ImageResizer(2000, 2500, true);
                    if (staticContentDetail.Id == 3043)
                        image = new ImageResizer(2500, 1500, true);

                    image.Resize(Server.MapPath("/Files/StaticContentImages/Temp/" + newFileName),
                        Server.MapPath("/Files/StaticContentImages/Image/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/StaticContentImages/Temp/" + newFileName));

                    staticContentDetail.Image = newFileName;
                }
                #endregion

                _repo.Update(staticContentDetail);
                return RedirectToAction("Index");
            }
            ViewBag.StaticContentTypeId = new SelectList(_repo.GetStaticContentTypes(), "Id", "Name", staticContentDetail.StaticContentTypeId);
            return View(staticContentDetail);
        }
        // GET: Admin/StaticContentDetails/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StaticContentDetail staticContentDetail = _repo.GetStaticContentDetail(id.Value);
            if (staticContentDetail == null)
            {
                return HttpNotFound();
            }
            return PartialView(staticContentDetail);
        }

        // POST: Admin/StaticContentDetails/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            var staticContentDetail = _repo.Get(id);

            //#region Delete StaticContentDetail Image
            //if (staticContentDetail.Image != null)
            //{
            //    if (System.IO.File.Exists(Server.MapPath("/Files/StaticContentImages/Image/" + staticContentDetail.Image)))
            //        System.IO.File.Delete(Server.MapPath("/Files/StaticContentImages/Image/" + staticContentDetail.Image));

            //    if (System.IO.File.Exists(Server.MapPath("/Files/StaticContentImages/Thumb/" + staticContentDetail.Image)))
            //        System.IO.File.Delete(Server.MapPath("/Files/StaticContentImages/Thumb/" + staticContentDetail.Image));
            //}
            //#endregion

            _repo.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
