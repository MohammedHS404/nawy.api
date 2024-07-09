/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[PropertyImage] DROP CONSTRAINT [PropertyImage_imageId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PropertyPlans] DROP CONSTRAINT [PropertyPlans_imageId_fkey];

-- DropTable
DROP TABLE [dbo].[Image];

-- CreateTable
CREATE TABLE [dbo].[Media] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Media_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [url] NVARCHAR(500) NOT NULL,
    [alt] NVARCHAR(500) NOT NULL,
    CONSTRAINT [Media_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[PropertyImage] ADD CONSTRAINT [PropertyImage_imageId_fkey] FOREIGN KEY ([imageId]) REFERENCES [dbo].[Media]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyPlans] ADD CONSTRAINT [PropertyPlans_imageId_fkey] FOREIGN KEY ([imageId]) REFERENCES [dbo].[Media]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
