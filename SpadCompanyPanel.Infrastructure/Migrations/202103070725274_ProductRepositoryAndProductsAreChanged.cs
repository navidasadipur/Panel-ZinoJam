namespace SpadCompanyPanel.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductRepositoryAndProductsAreChanged : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Products", name: "ProductCategory_Id", newName: "ProductCategoryId");
            RenameIndex(table: "dbo.Products", name: "IX_ProductCategory_Id", newName: "IX_ProductCategoryId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Products", name: "IX_ProductCategoryId", newName: "IX_ProductCategory_Id");
            RenameColumn(table: "dbo.Products", name: "ProductCategoryId", newName: "ProductCategory_Id");
        }
    }
}
