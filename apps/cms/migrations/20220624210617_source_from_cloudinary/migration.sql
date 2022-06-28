/*
  Warnings:

  - You are about to drop the column `description` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "description",
DROP COLUMN "image",
ADD COLUMN     "alternativeText" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "caption" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "sourceFromCloudinary" JSONB;
