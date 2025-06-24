import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const lab = await prisma.labResult.findUnique({ where: { id: params.id } });
  if (!lab)
    return NextResponse.json(
      { error: "Lab result not found" },
      { status: 404 }
    );
  return NextResponse.json(lab);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const lab = await prisma.labResult.update({ where: { id: params.id }, data });
  return NextResponse.json(lab);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.labResult.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
