BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[PropertyImage] DROP CONSTRAINT [PropertyImage_mediaId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PropertyImage] DROP CONSTRAINT [PropertyImage_propertyId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PropertyPlans] DROP CONSTRAINT [PropertyPlans_mediaId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PropertyPlans] DROP CONSTRAINT [PropertyPlans_propertyId_fkey];

-- AddForeignKey
ALTER TABLE [dbo].[PropertyImage] ADD CONSTRAINT [PropertyImage_propertyId_fkey] FOREIGN KEY ([propertyId]) REFERENCES [dbo].[Property]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyImage] ADD CONSTRAINT [PropertyImage_mediaId_fkey] FOREIGN KEY ([mediaId]) REFERENCES [dbo].[Media]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyPlans] ADD CONSTRAINT [PropertyPlans_propertyId_fkey] FOREIGN KEY ([propertyId]) REFERENCES [dbo].[Property]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyPlans] ADD CONSTRAINT [PropertyPlans_mediaId_fkey] FOREIGN KEY ([mediaId]) REFERENCES [dbo].[Media]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
