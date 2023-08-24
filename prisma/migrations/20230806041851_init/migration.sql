/*
  Warnings:

  - The `teamId` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `teamId` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Team` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "teamId",
ADD COLUMN     "teamId" INTEGER;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "teamId",
ADD COLUMN     "teamId" INTEGER;

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
