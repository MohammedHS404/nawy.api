BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Image] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Image_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [url] NVARCHAR(500) NOT NULL,
    [alt] NVARCHAR(500) NOT NULL,
    CONSTRAINT [Image_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PropertyImage] (
    [id] INT NOT NULL IDENTITY(1,1),
    [propertyId] INT NOT NULL,
    [imageId] INT NOT NULL,
    CONSTRAINT [PropertyImage_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PropertPlans] (
    [id] INT NOT NULL IDENTITY(1,1),
    [propertyId] INT NOT NULL,
    [imageId] INT NOT NULL,
    CONSTRAINT [PropertPlans_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Property] (
    [id] INT NOT NULL IDENTITY(1,1),
    [type] CHAR(500) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Property_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [title] NVARCHAR(500) NOT NULL,
    [slug] NVARCHAR(500) NOT NULL,
    [description] NVARCHAR(max) NOT NULL,
    [shortDescription] NVARCHAR(1000) NOT NULL,
    [minPrice] DECIMAL(19,3) NOT NULL,
    [maxPrice] DECIMAL(19,3) NOT NULL,
    [location_lat] DECIMAL(9,6) NOT NULL,
    [location_lon] DECIMAL(9,6) NOT NULL,
    [address_city] NVARCHAR(500) NOT NULL,
    [address_state] NVARCHAR(500) NOT NULL,
    [address_country] NVARCHAR(500) NOT NULL,
    [bedrooms] TINYINT NOT NULL,
    [bathrooms] TINYINT NOT NULL,
    [minArea] INT NOT NULL,
    [maxArea] INT NOT NULL,
    CONSTRAINT [Property_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[PropertyImage] ADD CONSTRAINT [PropertyImage_propertyId_fkey] FOREIGN KEY ([propertyId]) REFERENCES [dbo].[Property]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertyImage] ADD CONSTRAINT [PropertyImage_imageId_fkey] FOREIGN KEY ([imageId]) REFERENCES [dbo].[Image]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertPlans] ADD CONSTRAINT [PropertPlans_propertyId_fkey] FOREIGN KEY ([propertyId]) REFERENCES [dbo].[Property]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PropertPlans] ADD CONSTRAINT [PropertPlans_imageId_fkey] FOREIGN KEY ([imageId]) REFERENCES [dbo].[Image]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
