using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SpadCompanyPanel.Core.Models;

namespace SpadCompanyPanel.Infrastructure.Repositories
{
    public class GalleryVideosRepository : BaseRepository<GalleryVideo, MyDbContext>
    {
        private readonly MyDbContext _context;
        private readonly LogsRepository _logger;
        public GalleryVideosRepository(MyDbContext context, LogsRepository logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }

        public GalleryVideo GetFirstVideo()
        {
            return _context.GalleryVideos.Where(v => v.IsDeleted == false).FirstOrDefault();
        }

        public GalleryVideo GetSecondVideo()
        {
            return _context.GalleryVideos.Where(v => v.IsDeleted == false).OrderBy(c => c.Id).Skip(1).FirstOrDefault();
        }

        public GalleryVideo GetThirdVideo()
        {
            return _context.GalleryVideos.Where(v => v.IsDeleted == false).OrderBy(c => c.Id).Skip(2).FirstOrDefault();
        }

        public List<GalleryVideo> GetAllVideoes()
        {
            return _context.GalleryVideos.Where(ch => ch.IsDeleted == false).OrderBy(ch => ch.Id).ToList();
        }
    }
}
