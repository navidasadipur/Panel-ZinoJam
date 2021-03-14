﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SpadCompanyPanel.Core.Models;
using SpadCompanyPanel.Core.Utility;
using SpadCompanyPanel.Infrastructure.Repositories;
using SpadCompanyPanel.Web.ViewModels;

namespace SpadCompanyPanel.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly StaticContentDetailsRepository _contentRepo;
        private readonly GalleriesRepository _galleryRepo;
        private readonly GalleryVideosRepository _galleryVideosRepo;
        private readonly ProductsRepository _productRepo;
        private readonly ContactFormsRepository _contactFormRepo;
        private readonly OurTeamRepository _ourTeamRepo;
        private readonly CertificatesRepository _certificatesRepo;
        private readonly FoodGalleriesRepository _foodGalleriesRepo;
        private readonly ProdectCategoriesRepository _prodectCategoriesRepo;
        private readonly StaticContentDetailsRepository _staticContentDetailsRepo;

        public HomeController(StaticContentDetailsRepository contentRepo,
            GalleriesRepository galleryRepo,
            ProductsRepository productRepo,
            ContactFormsRepository contactFormRepo,
            OurTeamRepository ourTeamRepo,
            CertificatesRepository certificatesRepo,
            FoodGalleriesRepository foodGalleriesRepo,
            GalleryVideosRepository galleryVideosRepo,
            ProdectCategoriesRepository prodectCategoriesRepo,
            Product product,
            StaticContentDetailsRepository staticContentDetailsRepo
            )
        {
            _contentRepo = contentRepo;
            _galleryRepo = galleryRepo;
            _productRepo = productRepo;
            _contactFormRepo = contactFormRepo;
            _ourTeamRepo = ourTeamRepo;
            _certificatesRepo = certificatesRepo;
            _foodGalleriesRepo = foodGalleriesRepo;
            _galleryVideosRepo = galleryVideosRepo;
            this._prodectCategoriesRepo = prodectCategoriesRepo;
            this._staticContentDetailsRepo = staticContentDetailsRepo;
        }
        public ActionResult Index()
        {
            //return Redirect("/Admin/Dashboard");
            ViewBag.Instagram = _contentRepo.GetContentByTypeId(3);

            return View();
        }
        public ActionResult Navbar()
        {
            ViewBag.Phone = _contentRepo.GetStaticContentDetail((int) StaticContents.Phone).ShortDescription;

            var viewModel = new NavbarViewModel
            {
                ProductCategories = _prodectCategoriesRepo.GetAllProductCategories()
            };

            return PartialView(viewModel);
        }

        public ActionResult Products(int? id)
        {
            var viewModel = new ProductViewModel();

            if (id == null)
            {
                viewModel.Products = _productRepo.GetAllProducts();

                return PartialView(viewModel);
            }

            viewModel.Products = _productRepo.getProductsByCategoryId(id.Value);

            ViewBag.CategoryTitle = _prodectCategoriesRepo.Get(id.Value).Title;

            return PartialView(viewModel);
        }

        public ActionResult HomeSlider()
        {
            var sliderContent = _contentRepo.GetContentByTypeId((int)StaticContentTypes.Slider);
            return PartialView(sliderContent);
        }
        public ActionResult Gallery()
        {
            var galleryContent = _galleryRepo.GetAll();
            return PartialView(galleryContent);
        }
        public ActionResult CompanyHistory()
        {
            var content = _contentRepo.GetContentByTypeId((int)StaticContentTypes.CompanyHistory).FirstOrDefault();
            return PartialView(content);
        }
        //public ActionResult Testimonials()
        //{
        //    var content = _testimonialRepo.GetAll();
        //    return PartialView(content);
        //}
        public ActionResult GallerySlider()
        {
            var galleryContent = _galleryRepo.GetAll();
            return PartialView(galleryContent);
        }
        public ActionResult ContactUsForm()
        {
            var contactUsContent = new ContactUsViewModel();
            contactUsContent.ContactInfo = _contentRepo.Get((int)StaticContents.ContactInfo);
            contactUsContent.Email = _contentRepo.Get((int)StaticContents.Email);
            contactUsContent.Address = _contentRepo.Get((int)StaticContents.Address);
            contactUsContent.Phone = _contentRepo.Get((int)StaticContents.Phone);
            contactUsContent.Youtube = _contentRepo.Get((int)StaticContents.Youtube);
            contactUsContent.Instagram = _contentRepo.Get((int)StaticContents.Instagram);
            contactUsContent.Twitter = _contentRepo.Get((int)StaticContents.Twitter);
            contactUsContent.Pinterest = _contentRepo.Get((int)StaticContents.Pinterest);
            contactUsContent.Facebook = _contentRepo.Get((int)StaticContents.Facebook);
            //return View(contactUsContent);

            return PartialView(contactUsContent);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ContactUsForm(ContactUsViewModel viewModel)
        {
            var customerContactForm = new ContactForm()
            {
                Name = viewModel.Name,
                Email = viewModel.CustomerEmail,
                Message = viewModel.Message
            };

            if (ModelState.IsValid)
            {
                _contactFormRepo.Add(customerContactForm);
                return RedirectToAction("ContactUsSummary");
            }

            return View(viewModel);
        }

        public ActionResult ContactUsSummary()
        {
            return View();
        }

        public ActionResult OurTeamSection()
        {
            var ourTeam = _ourTeamRepo.GetAll();
            return PartialView(ourTeam);
        }
        [Route("OurTeam")]
        public ActionResult OurTeamPage()
        {
            var ourTeam = _ourTeamRepo.GetAll();
            return View(ourTeam);
        }
        public ActionResult Footer()
        {

            var footerContent = new FooterViewModel();
            footerContent.ShortDescription = _contentRepo.GetContentByTypeId((int)StaticContentTypes.CompanyHistory).FirstOrDefault();
            footerContent.Email = _contentRepo.Get((int) StaticContents.Email);
            footerContent.Address = _contentRepo.Get((int) StaticContents.Address);
            footerContent.Phone = _contentRepo.Get((int) StaticContents.Phone);
            footerContent.SupportPhone = _contentRepo.Get((int)StaticContents.SupportPhone);
            footerContent.Youtube = _contentRepo.Get((int) StaticContents.Youtube);
            footerContent.Instagram = _contentRepo.Get((int) StaticContents.Instagram);
            footerContent.Twitter = _contentRepo.Get((int) StaticContents.Twitter);
            footerContent.Pinterest = _contentRepo.Get((int) StaticContents.Pinterest);
            footerContent.Facebook = _contentRepo.Get((int) StaticContents.Facebook);
            return PartialView(footerContent);
        }
        [Route("Gallery")]
        public ActionResult GalleryPage()
        {
            var images = _galleryRepo.GetAll();
            var videos = _galleryVideosRepo.GetAll();
            var vm = new GalleryPageViewModel()
            {
                Images = images,
                Videos = videos
            };
            return View(vm);
        }
        [Route("Certificates")]
        public ActionResult Certificates()
        {
            var certificates = _certificatesRepo.GetAll();
            return View(certificates);
        }
        [Route("Foods")]
        public ActionResult Foods()
        {
            var foodGallery = _foodGalleriesRepo.GetAll();
            return View(foodGallery);
        }
        //[Route("AboutUs")]
        public ActionResult About()
        {
            var aboutViewModel = new AboutViewModel();

            aboutViewModel.AboutDescription = _contentRepo.GetContentByTypeId((int)StaticContentTypes.CompanyHistory).FirstOrDefault().ShortDescription;

            return PartialView(aboutViewModel);
        }

        [Route("ContactUs")]
        public ActionResult Contact()
        {
            ViewBag.ContactUsPage = true;
            var contactUsContent = new ContactUsViewModel();
            contactUsContent.ContactInfo = _contentRepo.Get((int)StaticContents.ContactInfo);
            contactUsContent.Email = _contentRepo.Get((int)StaticContents.Email);
            contactUsContent.Address = _contentRepo.Get((int)StaticContents.Address);
            contactUsContent.Phone = _contentRepo.Get((int)StaticContents.Phone);
            contactUsContent.Youtube = _contentRepo.Get((int)StaticContents.Youtube);
            contactUsContent.Instagram = _contentRepo.Get((int)StaticContents.Instagram);
            contactUsContent.Twitter = _contentRepo.Get((int)StaticContents.Twitter);
            contactUsContent.Pinterest = _contentRepo.Get((int)StaticContents.Pinterest);
            contactUsContent.Facebook = _contentRepo.Get((int)StaticContents.Facebook);
            return View(contactUsContent);
        }
        public ActionResult UploadImage(HttpPostedFileBase upload, string CKEditorFuncNum, string CKEditor, string langCode)
        {
            string vImagePath = String.Empty;
            string vMessage = String.Empty;
            string vFilePath = String.Empty;
            string vOutput = String.Empty;
            try
            {
                if (upload != null && upload.ContentLength > 0)
                {
                    var vFileName = DateTime.Now.ToString("yyyyMMdd-HHMMssff") +
                                    Path.GetExtension(upload.FileName).ToLower();
                    var vFolderPath = Server.MapPath("/Upload/");
                    if (!Directory.Exists(vFolderPath))
                    {
                        Directory.CreateDirectory(vFolderPath);
                    }
                    vFilePath = Path.Combine(vFolderPath, vFileName);
                    upload.SaveAs(vFilePath);
                    vImagePath = Url.Content("/Upload/" + vFileName);
                    vMessage = "Image was saved correctly";
                }
            }
            catch
            {
                vMessage = "There was an issue uploading";
            }
            vOutput = @"<html><body><script>window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum + ", \"" + vImagePath + "\", \"" + vMessage + "\");</script></body></html>";
            return Content(vOutput);
        }

        public ActionResult IndexPartOne()
        {
            var section1Cover = _staticContentDetailsRepo.GetStaticContentDetail(3024);
            var section1Part2 = _staticContentDetailsRepo.GetStaticContentDetail(3029);
            var section1part3 = _staticContentDetailsRepo.GetStaticContentDetail(3031);
            var section1Video = _galleryVideosRepo.GetFirstVideo();
            var section1VideoDescription = _staticContentDetailsRepo.GetStaticContentDetail(3034);

            var model = new IndexPartViewModels()
            {
                Description = section1Cover.Description,
                ButtonLink = section1Cover.Link,
                CoverImage = section1Cover.Image,
                Part2Image = section1Part2.Image,
                part2Description = section1Part2.Description,
                part3Image = section1part3.Image,
                part3Description = section1part3.Description,
                VideoDescriptions = section1VideoDescription.Description,
                Video = section1Video.Video
            };

            return PartialView(model);
        }
        public ActionResult IndexPartTwo()
        {
            var section2Cover = _staticContentDetailsRepo.GetStaticContentDetail(3036);
            var section2Part2 = _staticContentDetailsRepo.GetStaticContentDetail(3037);
            var section2part3 = _staticContentDetailsRepo.GetStaticContentDetail(3038);
            var section2Video = _galleryVideosRepo.GetFirstVideo();
            var section2VideoDescription = _staticContentDetailsRepo.GetStaticContentDetail(3040);

            var model = new IndexPartViewModels()
            {
                Description = section2Cover.Description,
                ButtonLink = section2Cover.Link,
                CoverImage = section2Cover.Image,
                Part2Image = section2Part2.Image,
                part2Description = section2Part2.Description,
                part3Image = section2part3.Image,
                part3Description = section2part3.Description,
                VideoDescriptions = section2VideoDescription.Description,
                Video = section2Video.Video
            };

            return PartialView(model);
        }

        public ActionResult IndexPartThree()
        {
            var section3Cover = _staticContentDetailsRepo.GetStaticContentDetail(3041);
            var section3Part2 = _staticContentDetailsRepo.GetStaticContentDetail(3042);
            var section3part3 = _staticContentDetailsRepo.GetStaticContentDetail(3043);
            var section3Video = _galleryVideosRepo.GetFirstVideo();
            var section3VideoDescription = _staticContentDetailsRepo.GetStaticContentDetail(3044);

            var model = new IndexPartViewModels()
            {
                Description = section3Cover.Description,
                ButtonLink = section3Cover.Link,
                CoverImage = section3Cover.Image,
                Part2Image = section3Part2.Image,
                part2Description = section3Part2.Description,
                part3Image = section3part3.Image,
                part3Description = section3part3.Description,
                VideoDescriptions = section3VideoDescription.Description,
                Video = section3Video.Video
            };

            return PartialView(model);
        }

        public ActionResult SocialSection()
        {
            SocialViewModel model = new SocialViewModel();

            model.Instagram= _contentRepo.Get(1009).Link;
            model.Aparat = _contentRepo.Get(1012).Link;

            return PartialView(model);
        }
    }
}