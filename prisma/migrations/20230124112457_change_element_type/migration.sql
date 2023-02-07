/*
  Warnings:

  - The values [THUNDER] on the enum `ElementType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ElementType_new" AS ENUM ('FIRE', 'ICE', 'ELECTRIC', 'WIND', 'PHYSICAL');
ALTER TABLE "Character" ALTER COLUMN "element" TYPE "ElementType_new"[] USING ("element"::text::"ElementType_new"[]);
ALTER TYPE "ElementType" RENAME TO "ElementType_old";
ALTER TYPE "ElementType_new" RENAME TO "ElementType";
DROP TYPE "ElementType_old";
COMMIT;
