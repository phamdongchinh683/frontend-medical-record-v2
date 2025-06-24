import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const user = await prisma.user.create({
    data: {
      wallet_user: data.wallet_user,
      create_at: new Date(),
      update_at: new Date(),
    },
  });
  return NextResponse.json(user);
}
