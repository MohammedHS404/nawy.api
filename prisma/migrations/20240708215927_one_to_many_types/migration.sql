/*
  Warnings:

  - You are about to drop the column `type` on the `Property` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Property] DROP COLUMN [type];
ALTER TABLE [dbo].[Property] ADD [typeId] INT NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[PropertyType] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [PropertyType_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] NVARCHAR(500) NOT NULL,
    CONSTRAINT [PropertyType_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Property] ADD CONSTRAINT [Property_typeId_fkey] FOREIGN KEY ([typeId]) REFERENCES [dbo].[PropertyType]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
