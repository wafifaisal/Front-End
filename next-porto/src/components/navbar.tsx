import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[60px] bg-teal-400 gap-5 text-teal-500">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/about/profile"}>Profile</Link>
      <Link href={"/user"}>User</Link>
    </div>
  );
}
