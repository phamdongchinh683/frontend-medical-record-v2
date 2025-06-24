import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const prescription = await prisma.prescription.findUnique({
    where: { id: params.id },
  });
  if (!prescription)
    return NextResponse.json(
      { error: "Prescription not found" },
      { status: 404 }
    );
  return NextResponse.json(prescription);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const prescription = await prisma.prescription.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(prescription);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.prescription.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
