-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "VisitType" AS ENUM ('outpatient', 'inpatient', 'emergency');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('doctor', 'patient');

-- CreateEnum
CREATE TYPE "TestType" AS ENUM ('urine_analysis', 'stool_test', 'body_fluid_analysis', 'cytology', 'immunology', 'microbiology', 'genetic_testing', 'imaging', 'qualitative_test', 'quantitative_test', 'molecular_biology', 'immunofluorescence', 'culture');

-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('X_quang', 'CT', 'MRI', 'PET');

-- CreateEnum
CREATE TYPE "DiagnosisType" AS ENUM ('primary', 'secondary', 'differential', 'provisional');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "wallet_user" VARCHAR(43) NOT NULL,
    "full_name" VARCHAR(50) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "citizen_identification" VARCHAR(13) NOT NULL,
    "phone_number" VARCHAR(12) NOT NULL,
    "type" "Role" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "visit_type" "VisitType" NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "department" VARCHAR(60) NOT NULL,
    "reason_for_visit" TEXT NOT NULL,
    "initial_diagnosis" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessLog" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccessLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitalSign" (
    "id" TEXT NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "temperature" DECIMAL(4,1) NOT NULL,
    "heart_rate" INTEGER NOT NULL,
    "respiratory_rate" INTEGER NOT NULL,
    "weight" DECIMAL(5,2) NOT NULL,
    "height" DECIMAL(5,2) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VitalSign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabResult" (
    "id" TEXT NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "test_type" "TestType" NOT NULL,
    "result" TEXT NOT NULL,
    "test_date" TIMESTAMP(3) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "id" TEXT NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "diagnosis_name" VARCHAR(100) NOT NULL,
    "type" "DiagnosisType" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prescription" (
    "id" TEXT NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "drug_name" VARCHAR(30) NOT NULL,
    "dosage" VARCHAR(20) NOT NULL,
    "frequency" VARCHAR(20) NOT NULL,
    "duration_days" VARCHAR(20) NOT NULL,
    "note" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordImage" (
    "id" TEXT NOT NULL,
    "nft_token" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "type" "ImageType" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_wallet_user_key" ON "User"("wallet_user");

-- CreateIndex
CREATE UNIQUE INDEX "Visit_nft_token_key" ON "Visit"("nft_token");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_nft_token_fkey" FOREIGN KEY ("nft_token") REFERENCES "Visit"("nft_token") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalSign" ADD CONSTRAINT "VitalSign_nft_token_fkey" FOREIGN KEY ("nft_token") REFERENCES "Visit"("nft_token") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabResult" ADD CONSTRAINT "LabResult_nft_token_fkey" FOREIGN KEY ("nft_token") REFERENCES "Visit"("nft_token") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_nft_token_fkey" FOREIGN KEY ("nft_token") REFERENCES "Visit"("nft_token") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_nft_token_fkey" FOREIGN KEY ("nft_token") REFERENCES "Visit"("nft_token") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordImage" ADD CONSTRAINT "RecordImage_nft_token_fkey" FOREIGN KEY ("nft_token") REFERENCES "Visit"("nft_token") ON DELETE RESTRICT ON UPDATE CASCADE;
