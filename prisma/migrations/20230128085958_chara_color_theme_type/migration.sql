-- CreateEnum
CREATE TYPE "ColorThemeType" AS ENUM ('LIME', 'RED', 'PINK', 'BLUE', 'GRAY_INVERT', 'GRAY', 'AMBER');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "colorTheme" "ColorThemeType" NOT NULL DEFAULT 'GRAY';
