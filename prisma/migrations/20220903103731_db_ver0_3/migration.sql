/*
  Warnings:

  - Added the required column `open` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `open` INTEGER NOT NULL,
    MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;
