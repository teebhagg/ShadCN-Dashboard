import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const tasks = await prisma.task.findMany();
    return new NextResponse(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 404 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const newTask = await prisma.task.create({
      data,
    });
    return new NextResponse(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
