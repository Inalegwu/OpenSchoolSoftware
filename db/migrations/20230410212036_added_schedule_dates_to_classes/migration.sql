/*
  Warnings:

  - Added the required column `scheduleDateTime` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "scheduleDateTime" TIMESTAMP(3) NOT NULL;
