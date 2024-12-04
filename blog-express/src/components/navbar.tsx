"use client";
import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import { Avatar } from "./avatar";

export default function Navbar() {
  return (
    <Wrapper>
      <div className="flex justify-between items-center h-full w-full">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="https://img.icons8.com/?size=100&id=oTpJLaIvlhgO&format=png&color=000000"
            width={50}
            height={50}
            alt="Logo Blogger"
            className="h-8 w-8"
          />
          <span className=" text-2xl font-semibold whitespace-nowrap text-black">
            Fresh <span className="text-orange-500">Blog</span>
          </span>
        </Link>
        <Avatar />
      </div>
    </Wrapper>
  );
}
