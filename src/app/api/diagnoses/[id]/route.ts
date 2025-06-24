import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const diagnosis = await prisma.diagnosis.findUnique({
    where: { id: params.id },
  });
  if (!diagnosis)
    return NextResponse.json({ error: "Diagnosis not found" }, { status: 404 });
  return NextResponse.json(diagnosis);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const diagnosis = await prisma.diagnosis.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(diagnosis);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.diagnosis.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
