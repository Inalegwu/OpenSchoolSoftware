/*
  Warnings:

  - You are about to drop the `MemberShip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MemberShip" DROP CONSTRAINT "MemberShip_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "MemberShip" DROP CONSTRAINT "MemberShip_userId_fkey";

-- DropTable
DROP TABLE "MemberShip";

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "role" "MemberShipRole" NOT NULL DEFAULT 'USER',
    "schoolId" TEXT NOT NULL,
    "userId" TEXT,
    "invitedName" TEXT,
    "invitedEmail" TEXT,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_schoolId_invitedEmail_key" ON "Teacher"("schoolId", "invitedEmail");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
