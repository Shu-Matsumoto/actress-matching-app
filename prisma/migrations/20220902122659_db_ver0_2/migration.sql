/*
  Warnings:

  - You are about to alter the column `blood_type` on the `actorprofile` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `breast_size` on the `actorprofile` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `type` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `actorprofile` MODIFY `blood_type` INTEGER NOT NULL,
    MODIFY `breast_size` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `type` INTEGER NOT NULL,
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX `User_name_key` ON `User`(`name`);
