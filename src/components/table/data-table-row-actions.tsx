"use client";

import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Employee } from '@prisma/client'

import { labels } from "@/utilities/data/data";
import { taskSchema } from "@/utilities/data/schema";
import { usePathname } from "next/navigation";
import { EditEmployee } from "../employee/edit_employee";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  data: any
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  
  // Get pathName to show different action based on url
  const path = usePathname().split("/");
  const pathName = path[path.length - 1]
  let task;
  if (pathName === "tasks") task = taskSchema.parse(row.original);

  
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {pathName === "employees" &&<DropdownMenuItem>
            <EditEmployee />
          </DropdownMenuItem>}
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        {pathName === "tasks" && <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={task?.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
