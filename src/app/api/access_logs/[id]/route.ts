import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const log = await prisma.accessLog.findUnique({ where: { id: params.id } });
  if (!log)
    return NextResponse.json(
      { error: "Access log not found" },
      { status: 404 }
    );
  return NextResponse.json(log);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const log = await prisma.accessLog.update({ where: { id: params.id }, data });
  return NextResponse.json(log);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.accessLog.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
