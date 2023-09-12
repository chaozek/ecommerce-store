"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface IMainNavProps {
  data: Category[];
}

export function MainNav({ data }: IMainNavProps) {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-color",
              link.active ? "text-black" : "text-neutral-500"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
