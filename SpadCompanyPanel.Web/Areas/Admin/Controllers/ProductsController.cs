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
        public ActionResult Create(Product product, HttpPostedFileBase ProductImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (ProductImage != null)
                {
                    if (System.IO.File.Exists(Server.MapPath("/Files/ProductImages/" + product.Image)))
                        System.IO.File.Delete(Server.MapPath("/Files/ProductImages/" + product.Image));
                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(ProductImage.FileName);
                    ProductImage.SaveAs(Server.MapPath("/Files/ProductImages/Temp/" + newFileName));
                    // Resize Image
                    ImageResizer image = new ImageResizer(200, 200);
                    image.Resize(Server.MapPath("/Files/ProductImages/Temp/" + newFileName),
                    Server.MapPath("/Files/ProductImages/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/ProductImages/Temp/" + newFileName));

                    product.Image = newFileName;
                }
                #endregion
                _repo.Add(product);
                return RedirectToAction("Index", new { id = product.ProductCategoryId });
            }

            return View(product);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Product product = _repo.Get(id.Value);

            if (product == null)
            {
                return HttpNotFound();
            }

            ViewBag.CategoryTitle = _categoryRepo.Get(product.ProductCategoryId.Value).Title;

            return PartialView(product);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Product product, HttpPostedFileBase ProductImage)
        {
            if (ModelState.IsValid)
            {
                #region Upload Image
                if (ProductImage != null)
                {
                    // Saving Temp Image
                    var newFileName = Guid.NewGuid() + Path.GetExtension(ProductImage.FileName);
                    ProductImage.SaveAs(Server.MapPath("/Files/ProductImages/Temp/" + newFileName));
                    // Resize Image
                    ImageResizer image = new ImageResizer(200, 200);
                    image.Resize(Server.MapPath("/Files/ProductImages/Temp/" + newFileName),
                        Server.MapPath("/Files/ProductImages/" + newFileName));

                    // Deleting Temp Image
                    System.IO.File.Delete(Server.MapPath("/Files/ProductImages/Temp/" + newFileName));

                    product.Image = newFileName;
                }
                #endregion
                _repo.Update(product);
                return RedirectToAction("Index", new { id = product.ProductCategoryId });
            }
            return View(product);
        }
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = _repo.Get(id.Value);
            if (product == null)
            {
                return HttpNotFound();
            }
            return PartialView(product);
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