-- CreateEnum
CREATE TYPE "AttackType" AS ENUM ('SLASH', 'STRIKE', 'PIERCE');

-- CreateEnum
CREATE TYPE "ElementType" AS ENUM ('FIRE', 'ICE', 'THUNDER', 'WIND', 'PHYSICAL');

-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('BASIC', 'SPECIAL', 'DODGE', 'COMBO', 'TALENT1', 'TALENT2', 'TALENT3', 'TALENT4');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "attack" "AttackType"[],
    "element" "ElementType"[],
    "factionId" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Faction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaseStat" (
    "id" SERIAL NOT NULL,
    "hp" INTEGER NOT NULL DEFAULT 0,
    "atk" INTEGER NOT NULL DEFAULT 0,
    "def" INTEGER NOT NULL DEFAULT 0,
    "impact" INTEGER NOT NULL DEFAULT 0,
    "critRate" INTEGER NOT NULL DEFAULT 5,
    "critDamage" INTEGER NOT NULL DEFAULT 50,
    "penRatio" INTEGER NOT NULL DEFAULT 0,
    "pen" INTEGER NOT NULL DEFAULT 0,
    "energyRecovery" INTEGER NOT NULL DEFAULT 0,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "BaseStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "type" "SkillType" NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BaseStat_characterId_key" ON "BaseStat"("characterId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_factionId_fkey" FOREIGN KEY ("factionId") REFERENCES "Faction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseStat" ADD CONSTRAINT "BaseStat_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
