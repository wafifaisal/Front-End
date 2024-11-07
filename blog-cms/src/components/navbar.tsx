import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[60px] top-0">
      <Wrapper>
        <Link href={"/"} className="flex items-center gap-2 ">
          <Image
            src="https://img.icons8.com/?size=100&id=oTpJLaIvlhgO&format=png&color=000000"
            width={50}
            height={50}
            alt="Logo Blogger"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            <div className="text-black">
              Fresh <span className="text-orange-500">Blog</span>
            </div>
          </span>
        </Link>
      </Wrapper>
    </div>
  );
}
