import Link from "next/link";
import Wrapper from "./wrapper";

export default function Navbar() {
  return (
    <div className="h-[60px] top-0">
      <Wrapper>
        <Link href={"/"} className="flex items-center gap-2 ">
          <img
            src="https://img.icons8.com/?size=100&id=oTpJLaIvlhgO&format=png&color=000000"
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
