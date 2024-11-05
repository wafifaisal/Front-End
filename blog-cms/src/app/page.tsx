import Hero from "@/components/hero";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";

export default async function Home() {
  const data = await getBlogs();
  return (
    <Wrapper>
      <Hero length={data.length} />
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {data.map((item) => {
          return (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-xs group">
              <div className="relative w-full h-64">
                <img
                  src={item.fields.thumbnail.fields.file.url}
                  alt={item.fields.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                {/* Title Container */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white transition-all duration-300 ease-in-out">
                  {/* Title and Date Container */}
                  <div className="h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-1/2">
                    <h2 className="text-xl font-bold transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0">
                      {item.fields.title}
                    </h2>
                    <div className="text-[10px] text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      Posted at:{" "}
                      {new Date(item.fields.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="flex gap-4">
                  <img
                    src={item.fields.author.fields.avatar.fields.file.url}
                    alt="avatar"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col text-gray-700 font-semibold text-start">
                    {item.fields.author.fields.name}
                    <div className="text-gray-500 text-sm mb-5">
                      {item.fields.author.fields.email}
                    </div>
                  </div>
                </div>
                <a
                  href={`/blog/${item.fields.slug}`}
                  className="text-gray-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
