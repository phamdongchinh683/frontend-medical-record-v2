import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const visit = await prisma.visit.findUnique({ where: { id: params.id } });
  if (!visit)
    return NextResponse.json({ error: "Visit not found" }, { status: 404 });
  return NextResponse.json(visit);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const visit = await prisma.visit.update({ where: { id: params.id }, data });
  return NextResponse.json(visit);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.visit.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
