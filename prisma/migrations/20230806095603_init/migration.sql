/*
  Warnings:

  - You are about to drop the column `teamId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "teamId",
ADD COLUMN     "teamName" TEXT;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "teamId",
ADD COLUMN     "teamName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "Team"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "Team"("name") ON DELETE SET NULL ON UPDATE CASCADE;
