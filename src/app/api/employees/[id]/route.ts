import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

// Get one employee
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    // Get one employee
    const employee = await prisma.employee.findUnique({
      where: { id: id },
    });
    return new Response(JSON.stringify(employee), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};

// Update employee
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const body = await req.json();
    // Update employee
    const employee = await prisma.employee.update({
      where: { id: id },
      data: body,
    });
    return new Response(JSON.stringify(employee), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}

// Delete Employee
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    // Delete employee
    const employee = await prisma.employee.delete({
      where: { id: id },
    });
    return new Response(JSON.stringify(employee), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
