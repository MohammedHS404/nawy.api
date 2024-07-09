/*
  Warnings:

  - You are about to drop the column `alt` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Media` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Media] DROP COLUMN [alt],
[updatedAt];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
