namespace SpadCompanyPanel.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RepositoriesPolishedAndCleaned : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.IndexPartials", newName: "HomePartials");
            DropForeignKey("dbo.FoodGalleries", "Food_Id", "dbo.Foods");
            DropForeignKey("dbo.Foods", "FoodTypeId", "dbo.FoodTypes");
            DropIndex("dbo.FoodGalleries", new[] { "Food_Id" });
            DropIndex("dbo.Foods", new[] { "FoodTypeId" });
            DropTable("dbo.Certificates");
            DropTable("dbo.Faqs");
            DropTable("dbo.FoodGalleries");
            DropTable("dbo.Foods");
            DropTable("dbo.FoodTypes");
            DropTable("dbo.OurTeams");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.OurTeams",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Role = c.String(nullable: false),
                        Image = c.String(),
                        Description = c.String(nullable: false),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.FoodTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 600),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Foods",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 600),
                        ShortDescription = c.String(),
                        Description = c.String(),
                        Image = c.String(),
                        FoodTypeId = c.Int(),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.FoodGalleries",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Image = c.String(),
                        Title = c.String(nullable: false),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                        Food_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Faqs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Question = c.String(nullable: false),
                        Answer = c.String(nullable: false),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Certificates",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Image = c.String(),
                        Title = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.Foods", "FoodTypeId");
            CreateIndex("dbo.FoodGalleries", "Food_Id");
            AddForeignKey("dbo.Foods", "FoodTypeId", "dbo.FoodTypes", "Id");
            AddForeignKey("dbo.FoodGalleries", "Food_Id", "dbo.Foods", "Id");
            RenameTable(name: "dbo.HomePartials", newName: "IndexPartials");
        }
    }
}
