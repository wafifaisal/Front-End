import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function RecommendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <>
      {/* Sidebar for larger screens (xl and up) */}
      <aside className="w-72 max-w-xs flex-col fixed top-20 right-0 bg-white shadow-lg p-4 rounded-lg overflow-y-auto h-[calc(100vh-80px)] z-0 hidden xl:block">
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          Recommended Articles
        </h2>
        <div className="space-y-4">
          {blogs.map((item) => (
            <Link
              key={item.fields.slug}
              href={`/blog/${item.fields.slug}`}
              className="flex gap-3 items-start pb-4 hover:bg-gray-100 rounded-md transition duration-200"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-20 h-20 relative">
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  fill
                  className="object-cover rounded-md border-b"
                  sizes="(max-width: 768px) 50vw, 100px"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <p className="text-sm font-bold line-clamp-2 text-gray-800">
                  {item.fields.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* For smaller screens (sm, md, and lg), move the recommendation to the bottom */}
      <div className="block xl:hidden mt-8 py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            Recommended Articles
          </h2>
          <div className="space-y-4">
            {blogs.map((item) => (
              <Link
                key={item.fields.slug}
                href={`/blog/${item.fields.slug}`}
                className="flex gap-3 items-start pb-4 hover:bg-gray-100 rounded-md transition duration-200"
              >
                {/* Image Section */}
                <div className="flex-shrink-0 w-20 h-20 relative">
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt={item.fields.title}
                    fill
                    className="object-cover rounded-md border-b"
                    sizes="(max-width: 768px) 50vw, 100px"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                  <p className="text-sm font-bold line-clamp-2 text-gray-800">
                    {item.fields.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
