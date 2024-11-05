import Image from "next/image";
import Wrapper from "./wrapper";

export default function Hero({ length }: { length: number }) {
  return (
    <div className="bg-orange-600 w-full h-auto flex justify-evenly rounded-md">
      <div className="text-5xl font-bold text-black items-start flex flex-col justify-center">
        {length} Blog Ideas and
        <span className="">Topics to Write About</span>
      </div>
      <Image
        src="/hero.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-64 h-64 p-4 mx-10"
      />
    </div>
  );
}
