import Hero from "@/components/hero";
import { Meteors } from "@/components/ui/meteors";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  return (
    <Wrapper>
      <Hero length={data.length} />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {data.map((item, idx) => {
          return (
            <div
              key={item.slug}
              data-cy="blog-item"
              className=" bg-gradient-to-r from-blue-950 to-black transform rounded-lg shadow-lg overflow-hidden  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-xs group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={`${item.thumbnail}`}
                  alt="Thumbnail"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white transition-all duration-300 ease-in-out">
                  <div className="h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-1/2">
                    <h2 className="text-xl font-bold transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0">
                      {item.title}
                    </h2>
                  </div>
                  <Meteors number={10} className="-z-50" />
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="flex gap-4">
                  <Image
                    src={`${item.user.avatar}`}
                    alt="Author Avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-full"
                  />

                  <div className="flex flex-col text-gray-700 font-semibold text-start">
                    {item.user.username}
                    <div className="text-gray-500 text-sm mb-5">
                      {item.user.email}
                    </div>
                  </div>
                </div>
                <Link
                  key={idx}
                  href={`/blog/${item.slug}`}
                  className="relative z-10 glow-btn text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
