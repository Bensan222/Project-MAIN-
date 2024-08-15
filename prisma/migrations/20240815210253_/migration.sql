-- AlterTable
ALTER TABLE "Suspect" ALTER COLUMN "id" SET DEFAULT 'cuid()';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT 'cuid()';
