/*
  Warnings:

  - You are about to drop the column `members` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `tasks` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "teamId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "teamId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "members",
DROP COLUMN "tasks";

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
