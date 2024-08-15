-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suspect" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "stateOfOrigin" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "gender" "GenderEnum" NOT NULL,
    "age" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "crimeComiited" TEXT NOT NULL,
    "penalty" TEXT NOT NULL,
    "incidentLocation" TEXT NOT NULL,
    "reportedTime" TIMESTAMP(3) NOT NULL,
    "dateOfArrest" TIMESTAMP(3) NOT NULL,
    "arrestedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Suspect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
