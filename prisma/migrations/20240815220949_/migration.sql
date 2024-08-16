/*
  Warnings:

  - You are about to drop the column `crimeComiited` on the `Suspect` table. All the data in the column will be lost.
  - Added the required column `crimeCommitted` to the `Suspect` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Suspect" DROP COLUMN "crimeComiited",
ADD COLUMN     "crimeCommitted" TEXT NOT NULL;
