/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `gh_username` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `is_admin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_deleted` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `email`,
    DROP COLUMN `emailVerified`,
    DROP COLUMN `gh_username`,
    DROP COLUMN `image`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `username`,
    ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `is_admin` INTEGER NOT NULL,
    ADD COLUMN `is_deleted` INTEGER NOT NULL,
    ADD COLUMN `password` VARCHAR(32) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(32) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `session`;

-- DropTable
DROP TABLE `verificationtoken`;

-- CreateTable
CREATE TABLE `ActorProfile` (
    `userId` INTEGER NOT NULL,
    `actress_name` VARCHAR(128) NOT NULL,
    `real_name` VARCHAR(128) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `blood_type` VARCHAR(191) NOT NULL,
    `height` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,
    `clothes_size` INTEGER NOT NULL,
    `shoes_size` INTEGER NOT NULL,
    `breast_size` VARCHAR(191) NOT NULL,
    `breast_top` INTEGER NOT NULL,
    `breast_under` INTEGER NOT NULL,
    `waist_size` INTEGER NOT NULL,
    `hip_size` INTEGER NOT NULL,

    UNIQUE INDEX `ActorProfile_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlayCondition1` (
    `userId` INTEGER NOT NULL,
    `honban` INTEGER NOT NULL,
    `gomunashi` INTEGER NOT NULL,
    `nakadashi` INTEGER NOT NULL,
    `ferachio` INTEGER NOT NULL,
    `iramachio` INTEGER NOT NULL,

    UNIQUE INDEX `PlayCondition1_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
