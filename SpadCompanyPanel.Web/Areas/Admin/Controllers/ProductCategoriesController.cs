using System;
using System.Net;
using System.Web.Mvc;
using SpadCompanyPanel.Core.Models;
using SpadCompanyPanel.Infrastructure.Repositories;

namespace SpadCompanyPanel.Web.Areas.Admin.Controllers
{
    [Authorize]
    public class ProductCategoriesController : Controller
    {
        private readonly ProdectCategoriesRepository _repo;
        public ProductCategoriesController(ProdectCategoriesRepository repo)
        {
            _repo = repo;
        }
        // GET: Admin/GalleryCategory
        public ActionResult Index()
        {
            return View(_repo.GetAll());
        }

        // GET: Admin/GalleryCategory/Create
        public ActionResult Create()
        {
            return PartialView();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Title")] ProductCategory productCategory)
        {
            if (ModelState.IsValid)
            {
                _repo.Add(productCategory);
                return RedirectToAction("Index");
            }

            return View(productCategory);
        }

        // GET: Admin/GalleryCategory/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductCategory productCategory = _repo.Get(id.Value);
            if (productCategory == null)
            {
                return HttpNotFound();
            }
            return PartialView(productCategory);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Title")] ProductCategory productCategory)
        {
            if (ModelState.IsValid)
            {
                _repo.Update(productCategory);
                return RedirectToAction("Index");
            }
            return View(productCategory);
        }

        // GET: Admin/GalleryCategory/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductCategory productCategory = _repo.Get(id.Value);
            if (productCategory == null)
            {
                return HttpNotFound();
            }
            return PartialView(productCategory);
        }

        // POST: Admin/GalleryCategory/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _repo.DeleteCategoryAndItsProducts(id);
            return RedirectToAction("Index");
        }
    }
}
