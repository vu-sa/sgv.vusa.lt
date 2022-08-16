/*
  Warnings:

  - Added the required column `categoryPriority` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "subcategory" TEXT NOT NULL,
    "isSponsored" BOOLEAN NOT NULL,
    "facultySpecific" TEXT NOT NULL,
    "moreLink" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "categoryCardImageUrl" TEXT NOT NULL,
    "categoryTitleImageUrl" TEXT NOT NULL,
    "categoryPriority" TEXT NOT NULL
);
INSERT INTO "new_Post" ("category", "categoryCardImageUrl", "categoryTitleImageUrl", "content", "createdAt", "facultySpecific", "id", "isSponsored", "language", "moreLink", "priority", "subcategory", "title") SELECT "category", "categoryCardImageUrl", "categoryTitleImageUrl", "content", "createdAt", "facultySpecific", "id", "isSponsored", "language", "moreLink", "priority", "subcategory", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
