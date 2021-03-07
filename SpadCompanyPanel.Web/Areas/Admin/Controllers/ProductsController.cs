using System;
using System.IO;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SpadCompanyPanel.Core.Models;
using SpadCompanyPanel.Infrastructure.Helpers;
using SpadCompanyPanel.Infrastructure.Repositories;

namespace SpadCompanyPanel.Web.Areas.Admin.Controllers
{
    [Authorize]
    public class ProductsController : Controller
    {
        private readonly ProductsRepository _repo;
        private readonly ProdectCategoriesRepository _categoryRepo;
        public ProductsController(
            ProductsRepository repo,
            ProdectCategoriesRepository categoryRepo)
        {
            _repo = repo;
            _categoryRepo = categoryRepo;
        }
        public ActionResult Index(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index", "ProductCategory");
            }

            var allProductsInCategory = _repo.getProductsByCategoryId(id.Value);

            //category title and category id used for create products in a specific category
            ViewBag.CategoryTitle = _categoryRepo.Get(id.Value).Title;
            ViewBag.CategoryId = id;

            return View(allProductsInCategory);
        }
        public ActionResult Create(int? id)
        {
            //ViewBag.CategoryTitle = _categoryRepo.Get(id.Value).Title;

            var model = new Product
            {
                ProductCategoryId = id.Value,
                ProductCategory = _categoryRepo.Get(id.Value)
            };

            return PartialView(model);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Product testimonial, HttpPostedFileBase TestimonialImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (TestimonialImage != null)
                {
                    if (System.IO.File.Exists(Server.MapPath("/Files/TestimonialImages/" + testimonial.Image)))
                        System.IO.File.Delete(Server.MapPath("/Files/TestimonialImages/" + testimonial.Image));
                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(TestimonialImage.FileName);
                    TestimonialImage.SaveAs(Server.MapPath("/Files/TestimonialImages/Temp/" + newFileName));
                    // Resize Image
                    ImageResizer image = new ImageResizer(200, 200);
                    image.Resize(Server.MapPath("/Files/TestimonialImages/Temp/" + newFileName),
                        Server.MapPath("/Files/TestimonialImages/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/TestimonialImages/Temp/" + newFileName));

                    testimonial.Image = newFileName;
                }
                #endregion
                _repo.Add(testimonial);
                return RedirectToAction("Index", new { id = testimonial.ProductCategoryId });
            }

            return View(testimonial);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Product testimonial = _repo.Get(id.Value);

            if (testimonial == null)
            {
                return HttpNotFound();
            }

            ViewBag.CategoryTitle = _categoryRepo.Get(testimonial.ProductCategoryId.Value).Title;

            return PartialView(testimonial);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Product testimonial, HttpPostedFileBase TestimonialImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (TestimonialImage != null)
                {
                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(TestimonialImage.FileName);
                    TestimonialImage.SaveAs(Server.MapPath("/Files/TestimonialImages/Temp/" + newFileName));
                    // Resize Image
                    ImageResizer image = new ImageResizer(200, 200);
                    image.Resize(Server.MapPath("/Files/TestimonialImages/Temp/" + newFileName),
                        Server.MapPath("/Files/TestimonialImages/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/TestimonialImages/Temp/" + newFileName));

                    testimonial.Image = newFileName;
                }
                #endregion
                _repo.Update(testimonial);
                return RedirectToAction("Index", new { id = testimonial.ProductCategoryId });
            }
            return View(testimonial);
        }
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product testimonial = _repo.Get(id.Value);
            if (testimonial == null)
            {
                return HttpNotFound();
            }
            return PartialView(testimonial);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            var product = _repo.Get(id);

            _repo.Delete(id);

            return RedirectToAction("Index", new { id = product.ProductCategoryId });
        }
    }
}