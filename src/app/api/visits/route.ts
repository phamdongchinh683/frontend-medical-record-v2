import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const visits = await prisma.visit.findMany();
  return NextResponse.json(visits);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const visit = await prisma.visit.create({ data });
  return NextResponse.json(visit);
}
