import Link from "next/link";
import LogoBadge from "./LogoBadge";

export default function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 max-w-[1144px] px-6 mx-auto flex justify-between items-center py-6 bg-background z-500">
        <div className="flex lg:flex-1 font-[--font-unna] text-3xl">
          <LogoBadge size={50} />
        </div>
        <div className="gap-x-12 hidden sm:flex">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
