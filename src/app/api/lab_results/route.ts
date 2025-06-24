import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const labs = await prisma.labResult.findMany();
  return NextResponse.json(labs);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const lab = await prisma.labResult.create({ data });
  return NextResponse.json(lab);
}
