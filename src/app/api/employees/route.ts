import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

// Get all employees
export const GET = async (req: NextRequest) => {
  try {
    // Get all employees
    const employees = await prisma.employee.findMany();
    return new Response(JSON.stringify(employees), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};

// Add new employee
export const POST = async (req: NextRequest) => {
  try {
    // Request body
    const body = await req.json();
    // Add new employee
    const employee = await prisma.employee.create({
      data: body
    });
    return new Response(JSON.stringify(employee), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
