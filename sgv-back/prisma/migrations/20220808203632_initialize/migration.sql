-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "subcategory" TEXT NOT NULL,
    "isSponsored" BOOLEAN NOT NULL,
    "facultySpecific" TEXT NOT NULL,
    "moreLink" TEXT NOT NULL
);
