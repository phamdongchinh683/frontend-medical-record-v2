import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const logs = await prisma.accessLog.findMany();
  return NextResponse.json(logs);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const log = await prisma.accessLog.create({ data });
  return NextResponse.json(log);
}
