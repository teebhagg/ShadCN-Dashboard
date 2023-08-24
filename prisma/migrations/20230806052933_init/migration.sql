-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "members" INTEGER[],
ADD COLUMN     "tasks" INTEGER[];
