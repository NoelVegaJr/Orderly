-- AlterTable
ALTER TABLE `Task` ADD COLUMN `index` INTEGER NOT NULL DEFAULT 999999999;

-- AlterTable
ALTER TABLE `TaskList` ADD COLUMN `index` INTEGER NOT NULL DEFAULT 999999999;
