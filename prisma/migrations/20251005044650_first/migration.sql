/*
  Warnings:

  - Added the required column `bookingDate` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "bookingDate" TIMESTAMP(3) NOT NULL;
