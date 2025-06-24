import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const vitals = await prisma.vitalSign.findMany();
  return NextResponse.json(vitals);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const vital = await prisma.vitalSign.create({ data });
  return NextResponse.json(vital);
}
