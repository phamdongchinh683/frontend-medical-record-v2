import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const diagnoses = await prisma.diagnosis.findMany();
  return NextResponse.json(diagnoses);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const diagnosis = await prisma.diagnosis.create({ data });
  return NextResponse.json(diagnosis);
}
