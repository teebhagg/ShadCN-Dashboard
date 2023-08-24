import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

// Get one Team
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    try {
      const id = params.id;
      // Get one employee
      const employee = await prisma.team.findUnique({
        where: { id: parseInt(id) },
      });
      return new Response(JSON.stringify(employee), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 404 });
    }
  };

  // Update one Team
export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    try {
      const id = params.id;
    const data = await req.json();
      // Get one employee
      const employee = await prisma.team.update({
        where: { id: parseInt(id) },
        data
      });
      return new Response(JSON.stringify(employee), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 404 });
    }
  };

  // Update one Team
export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    try {
      const id = params.id;
    const data = await req.json();
      // Get one employee
      const employee = await prisma.team.delete({
        where: { id: parseInt(id) },
      });
      return new Response(JSON.stringify(employee), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 404 });
    }
  };