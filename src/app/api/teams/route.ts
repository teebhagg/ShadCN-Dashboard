import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

// Add new Team
export const POST = async(req: NextRequest) => {
    try {
        const data = await req.json()

        const newTeam = await prisma.team.create({
            data
        });
        return new NextResponse(JSON.stringify(newTeam), {status: 201})
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {status: 500})
    }
}

// Get all teams
export const GET = async(req: NextRequest) => {
    try {
        const teams = await prisma.team.findMany();
        return new NextResponse(JSON.stringify(teams), {status: 200})
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {status: 404})        
    }
}