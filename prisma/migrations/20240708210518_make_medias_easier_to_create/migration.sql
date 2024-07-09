/*
  Warnings:

  - You are about to drop the column `imageId` on the `PropertyImage` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `PropertyPlans` table. All the data in the column will be lost.
  - Added the required column `mediaId` to the `PropertyImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaId` to the `PropertyPlans` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[PropertyImage] DROP CONSTRAINT [PropertyImage_imageId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PropertyPlans] DROP CONSTRAINT [PropertyPlans_imageId_fkey];

-- AlterTable
ALTER TABLE [dbo].[PropertyImage] DROP COLUMN [imageId];
ALTER TABLE [dbo].[PropertyImage] ADD [mediaId] INT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[PropertyPlans] DROP COLUMN [imageId];
ALTER TABLE [dbo].[PropertyPlans] ADD [mediaId] INT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyImage] ADD CONSTRAINT [PropertyImage_mediaId_fkey] FOREIGN KEY ([mediaId]) REFERENCES [dbo].[Media]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyPlans] ADD CONSTRAINT [PropertyPlans_mediaId_fkey] FOREIGN KEY ([mediaId]) REFERENCES [dbo].[Media]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
