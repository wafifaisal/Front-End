"use client"; // Ensure this is at the top

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem() {
  const pathname = usePathname(); // Use usePathname instead of useRouter

  const linkClasses = (path: string) =>
    pathname === path
      ? "font-bold cursor-pointer translate-y-[-2px] bg-yellow-500 rounded-lg px-2 py-1"
      : "hover:font-bold hover:cursor-pointer hover:underline hover:translate-y-[-2px]";

  return (
    <div className="flex box-border mx-[30px] text-black font-bold text-[15px] border-none bg-none">
      <Link href="/" className={linkClasses("/")}>
        Home
      </Link>
      <Link href="/about" className={linkClasses("/about")}>
        About
      </Link>
      <Link href="/contact" className={linkClasses("/contact")}>
        Contact
      </Link>
    </div>
  );
}

export default NavItem;
