-- CreateTable
CREATE TABLE "WasteManagement" (
    "id" SERIAL NOT NULL,
    "typeOfPlastic" TEXT NOT NULL,
    "weightInKg" DOUBLE PRECISION NOT NULL,
    "timeOfPickup" TIMESTAMP(3) NOT NULL,
    "dateOfPickup" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WasteManagement_pkey" PRIMARY KEY ("id")
);
