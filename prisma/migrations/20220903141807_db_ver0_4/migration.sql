/*
  Warnings:

  - Added the required column `id` to the `ActorProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PlayCondition1` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `actorprofile` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `playcondition1` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;
