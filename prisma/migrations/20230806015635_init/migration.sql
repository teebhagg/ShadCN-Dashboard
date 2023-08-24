-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "teamId" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "teamId" DROP NOT NULL,
ALTER COLUMN "teamId" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
