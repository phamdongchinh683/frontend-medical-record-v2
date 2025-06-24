import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const prescriptions = await prisma.prescription.findMany();
  return NextResponse.json(prescriptions);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const prescription = await prisma.prescription.create({ data });
  return NextResponse.json(prescription);
}
