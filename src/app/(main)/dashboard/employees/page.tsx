import { promises as fs } from "fs";
import { Metadata } from "next";
import path from "path";
import { z } from "zod";

import { columns } from "@/components/employee/columns";
import { UserNav } from "@/components/shad_custom/user-nav";
import { DataTable } from "@/components/table/data-table";
import { taskSchema } from "@/utilities/data/schema";
import { Employee } from "@prisma/client";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default async function EmployeePage() {
  const employees = await getEmployees();

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Employees</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your employees!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      <DataTable data={employees} columns={columns} />
    </div>
  );
}

const getEmployees = async (): Promise<Employee[]> => {
  const res = await fetch("http://localhost:3000/api/employees");
  const data: Employee[] = await res.json();
  console.log(data)
  return data;
};
