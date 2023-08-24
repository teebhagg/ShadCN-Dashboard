-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "teamId" DROP NOT NULL,
ALTER COLUMN "teamId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "teamId" DROP NOT NULL,
ALTER COLUMN "teamId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
