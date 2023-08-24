"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  // Next Pathname
  const pathName = usePathname();

  // Link Array
  const links = [
    {
      href: "/dashboard/overview",
      label: "Overview",
    },
    {
      href: "/dashboard/tasks",
      label: "Tasks",
    },
    {
      href: "/dashboard/employees",
      label: "Employees",
    },
    {
      href: "/dashboard/teams",
      label: "Teams",
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}>
      {links.map((link) => {
        const isLinkActive = link.href === pathName;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              isLinkActive ? "border-b-2 border-black" : ""
            }  hover:text-primary`}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
