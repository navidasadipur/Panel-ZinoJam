namespace SpadCompanyPanel.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class productModelAndProductCategoryModelAndtheirRepositoriesAdded : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Testimonials", newName: "Products");
            CreateTable(
                "dbo.ProductCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 400),
                        InsertUser = c.String(),
                        InsertDate = c.DateTime(),
                        UpdateUser = c.String(),
                        UpdateDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Products", "ProductCategory_Id", c => c.Int());
            CreateIndex("dbo.Products", "ProductCategory_Id");
            AddForeignKey("dbo.Products", "ProductCategory_Id", "dbo.ProductCategories", "Id");
            DropColumn("dbo.Products", "Role");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "Role", c => c.String(nullable: false));
            DropForeignKey("dbo.Products", "ProductCategory_Id", "dbo.ProductCategories");
            DropIndex("dbo.Products", new[] { "ProductCategory_Id" });
            DropColumn("dbo.Products", "ProductCategory_Id");
            DropTable("dbo.ProductCategories");
            RenameTable(name: "dbo.Products", newName: "Testimonials");
        }
    }
}
