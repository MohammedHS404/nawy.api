/*
  Warnings:

  - You are about to drop the `PropertPlans` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[PropertPlans] DROP CONSTRAINT [PropertPlans_imageId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PropertPlans] DROP CONSTRAINT [PropertPlans_propertyId_fkey];

-- DropTable
DROP TABLE [dbo].[PropertPlans];

-- CreateTable
CREATE TABLE [dbo].[PropertyPlans] (
    [id] INT NOT NULL IDENTITY(1,1),
    [propertyId] INT NOT NULL,
    [imageId] INT NOT NULL,
    CONSTRAINT [PropertyPlans_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[PropertyPlans] ADD CONSTRAINT [PropertyPlans_propertyId_fkey] FOREIGN KEY ([propertyId]) REFERENCES [dbo].[Property]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyPlans] ADD CONSTRAINT [PropertyPlans_imageId_fkey] FOREIGN KEY ([imageId]) REFERENCES [dbo].[Image]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
