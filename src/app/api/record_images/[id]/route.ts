import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const image = await prisma.recordImage.findUnique({
    where: { id: params.id },
  });
  if (!image)
    return NextResponse.json(
      { error: "Record image not found" },
      { status: 404 }
    );
  return NextResponse.json(image);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const image = await prisma.recordImage.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(image);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.recordImage.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
