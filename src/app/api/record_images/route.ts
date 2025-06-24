import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const images = await prisma.recordImage.findMany();
  return NextResponse.json(images);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const image = await prisma.recordImage.create({ data });
  return NextResponse.json(image);
}
