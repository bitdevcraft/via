"use client";

import Link from "next/link";
import LogoBadge from "./LogoBadge";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setIsHidden(true); // Hide Navbar on Scroll Down
      } else {
        setIsHidden(false); // Show Navbar on Scroll Up
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 max-w-[1144px] px-6 mx-auto flex justify-between items-center py-6 bg-background z-500 duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex lg:flex-1 font-[--font-unna] text-3xl">
          <Link href={"/"}>
            <LogoBadge size={50} />
          </Link>
        </div>
        <div className="gap-x-12 hidden sm:flex items-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>

          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Process
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
