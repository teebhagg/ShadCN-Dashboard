import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

// Get one task
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    try {
      const id = params.id;
      // Get one task
      const task = await prisma.task.findUnique({
        where: { id: id },
      });
      return new Response(JSON.stringify(task), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 404 });
    }
  };
  
  // Update task
  export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    try {
      const id = params.id;
      const data = await req.json();
      // Update task
      const task = await prisma.task.update({
        where: { id: id },
        data,
      });
      return new Response(JSON.stringify(task), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 404 });
    }
  }
  
  // Delete task
  export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    try {
      const id = params.id;
      // Delete task
      const task = await prisma.task.delete({
        where: { id: id },
      });
      return new Response(JSON.stringify(task), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 404 });
    }
  }
  