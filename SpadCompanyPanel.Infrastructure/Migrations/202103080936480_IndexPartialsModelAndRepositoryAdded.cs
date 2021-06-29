namespace SpadCompanyPanel.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IndexPartialsModelAndRepositoryAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.IndexPartials",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        SubTitle = c.String(nullable: false),
                        SubTitleButton = c.String(nullable: false),
                        CoverImage = c.String(),
                        ImageOne = c.String(),
                        ShortDescriptionOne = c.String(),
                        ImageTwo = c.String(),
                        ShortDescriptionTwo = c.String(),
                        Video = c.String(),
                        VideoDescriptions = c.String(),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.IndexPartials");
        }
    }
}
