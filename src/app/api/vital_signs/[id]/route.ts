import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const vital = await prisma.vitalSign.findUnique({ where: { id: params.id } });
  if (!vital)
    return NextResponse.json(
      { error: "Vital sign not found" },
      { status: 404 }
    );
  return NextResponse.json(vital);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const vital = await prisma.vitalSign.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(vital);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.vitalSign.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
