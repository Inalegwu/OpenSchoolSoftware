/*
  Warnings:

  - You are about to drop the column `email` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Application` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[schoolId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[applicationId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "phoneNumber",
ADD COLUMN     "studentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "applicationId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Application_studentId_key" ON "Application"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Application_schoolId_key" ON "Application"("schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_applicationId_key" ON "Student"("applicationId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
