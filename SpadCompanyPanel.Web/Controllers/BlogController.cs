using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SpadCompanyPanel.Core.Models;
using SpadCompanyPanel.Core.Utility;
using SpadCompanyPanel.Infrastructure.Repositories;
using SpadCompanyPanel.Web.ViewModels;

namespace SpadCompanyPanel.Web.Controllers
{
    public class BlogController : Controller
    {
        private readonly ArticlesRepository _articlesRepo;
        private readonly StaticContentDetailsRepository _contentRepo;

        public BlogController(ArticlesRepository articlesRepo, StaticContentDetailsRepository contentRepo)
        {
            _articlesRepo = articlesRepo;
            _contentRepo = contentRepo;
        }

        // GET: Blog
        [Route("Blog")]
        [Route("Blog/{id}/{title}")]
        public ActionResult Index(int? id = null,string searchString = null)
        {
            //ViewBag.BlogImage = _contentRepo.GetStaticContentDetail((int) StaticContents.BlogImage).Image;
            var articles = new List<Article>();
            if (id == null)
            {
                articles = _articlesRepo.GetArticles();
                if (!string.IsNullOrEmpty(searchString))
                {
                    ViewBag.BreadCrumb = $"جستجو {searchString}";
                    articles = articles
                        .Where(a => a.Title != null && a.Title.ToLower().Trim().Contains(searchString.ToLower().Trim()) || 
                            a.ShortDescription != null && a.ShortDescription.ToLower().Trim().Contains(searchString.ToLower().Trim()) || 
                            a.Description != null && a.Description.ToLower().Trim().Contains(searchString.ToLower().Trim()) || 
                            a.ArticleTags != null && a.ArticleTags
                                .Any( t => t.Title != null && t.Title.ToLower().Trim().Contains(searchString.ToLower().Trim()))).ToList();
                }
            }
            else
            {
                var category = _articlesRepo.GetCategory(id.Value);
                if (category != null)
                {
                    ViewBag.CategoryId = id.Value;
                    ViewBag.BreadCrumb = category.Title;
                    articles = _articlesRepo.GetArticlesByCategory(id.Value);
                }
            }

            var articlelistVm = new List<ArticleListViewModel>();
            foreach (var item in articles)
            {
                var vm = new ArticleListViewModel(item);
                vm.Role = _articlesRepo.GetAuthorRole(item.UserId);
                if (item.ArticleComments != null)
                {
                    vm.CommentCounter = item.ArticleComments.Count();
                }
                articlelistVm.Add(vm);
            }
            return View(articlelistVm);
        }


        public ActionResult ArticleCategoriesSection()
        {
            var categories = _articlesRepo.GetArticleCategories();
            var articleCategoriesVm = new List<ArticleCategoriesViewModel>();
            foreach (var item in categories)
            {
                var vm = new ArticleCategoriesViewModel();
                vm.Id = item.Id;
                vm.Title = item.Title;
                vm.ArticleCount = _articlesRepo.GetArticlesCount(item.Id);
                articleCategoriesVm.Add(vm);
            }
            return PartialView(articleCategoriesVm);
        }
        [Route("Blog/Post/{id}")]
        public ActionResult Details(int id)
        {
            _articlesRepo.UpdateArticleViewCount(id);
            var article = _articlesRepo.GetArticle(id);
            var articleDetailsVm = new ArticleDetailsViewModel(article);
            var articleComments = _articlesRepo.GetArticleComments(id);
            var articleCommentsVm = new List<ArticleCommentViewModel>();

            foreach (var item in articleComments)
                articleCommentsVm.Add(new ArticleCommentViewModel(item));

            articleDetailsVm.ArticleComments = articleCommentsVm;
            var articleTags = _articlesRepo.GetArticleTags(id);
            articleDetailsVm.Tags = articleTags;
            return View(articleDetailsVm);
        }
        [HttpPost]
        public ActionResult PostComment(CommentFormViewModel form)
        {
            if (ModelState.IsValid)
            {
                var comment = new ArticleComment()
                {
                    ArticleId = form.ArticleId,
                    ParentId = form.ParentId,
                    Name = form.Name,
                    Email = form.Email,
                    Message = form.Message,
                    AddedDate = DateTime.Now,
                };
                _articlesRepo.AddComment(comment);
                return RedirectToAction("ContactUsSummary", "Home");
            }

            var postTitle = _articlesRepo.Get(form.ArticleId).Title;

            return RedirectToAction("Post", new { id = form.ArticleId });
        }

        public ActionResult LatestArticlesSection()
        {
            var articles = _articlesRepo.GetLatestArticles(5);
            var vm = new List<LatestArticlesViewModel>();
            foreach (var item in articles)
            {
                vm.Add(new LatestArticlesViewModel(item));
            }
            return PartialView(vm);
        }
    }
}