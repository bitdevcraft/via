"use client";

import * as React from "react";
import { Menu, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useTheme } from "next-themes";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Process",
    link: "#process",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-600">
        <div className="flex flex-col gap-[8px] p-3">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.link}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal></DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
