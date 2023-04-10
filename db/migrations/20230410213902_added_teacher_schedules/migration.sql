/*
  Warnings:

  - A unique constraint covering the columns `[scheduleId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "scheduleId" TEXT;

-- CreateTable
CREATE TABLE "TeacherSchedule" (
    "id" TEXT NOT NULL,
    "scheduleName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "TeacherSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClassToTeacherSchedule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TeacherSchedule_teacherId_key" ON "TeacherSchedule"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToTeacherSchedule_AB_unique" ON "_ClassToTeacherSchedule"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToTeacherSchedule_B_index" ON "_ClassToTeacherSchedule"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_scheduleId_key" ON "Teacher"("scheduleId");

-- AddForeignKey
ALTER TABLE "TeacherSchedule" ADD CONSTRAINT "TeacherSchedule_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToTeacherSchedule" ADD CONSTRAINT "_ClassToTeacherSchedule_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToTeacherSchedule" ADD CONSTRAINT "_ClassToTeacherSchedule_B_fkey" FOREIGN KEY ("B") REFERENCES "TeacherSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
