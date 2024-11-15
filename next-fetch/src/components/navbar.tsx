import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[60px] flex justify-center items-center gap-5 bg-teal-500 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/user"}>User</Link>
      <Link href={"/user/register"}>Register</Link>
    </div>
  );
}
