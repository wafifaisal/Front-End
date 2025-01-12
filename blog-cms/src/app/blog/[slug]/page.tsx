import RecomendationBLog from "@/components/recommend";
import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { getBlogRecom, getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();
  return blogs.map((item) => ({ slug: item.fields.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
  const blogNe: IBlog[] = await getBlogRecom(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="list-decimal m-4 font-bold">{children}</ol>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="text-2xl sm:text-3xl my-4">{children}</h2>
      ),
    },
  };

  return (
    <Wrapper>
      <div className="flex max-w-5xl mx-auto mt-8 px-4 sm:px-8 relative ">
        {/* Fixed Sidebar for Desktop */}
        <div className="hidden md:hidden lg:hidden xl:block flex-col w-64 fixed top-20 right-10 gap-6">
          <RecomendationBLog blogs={blogNe} />
          <div className="mt-[400px] ml-5 relative z-50">
            <ShareButton slug={blog.fields.slug} />
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex-1 pr-0 xl:pr-80 text-black">
          <Link
            href="/"
            aria-label="Back to Home"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-5 -translate-y-5 sm:mb-0"
          >
            <FaArrowLeft size={20} />
            <span>Back</span>
          </Link>

          <div className="text-sm text-orange-500 font-semibold uppercase mb-2 sm:mb-4">
            {blog.fields.category}
          </div>

          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {blog.fields.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <p>{blog.fields.author.fields.name}</p>
              <span>|</span>
              <p>{new Date(blog.fields.date).toLocaleDateString()}</p>
            </div>

            {blog.fields.thumbnail && (
              <div className="h-[200px] sm:h-[400px] w-full mt-4 relative">
                <Image
                  src={`https:${blog.fields.thumbnail.fields.file.url}`}
                  alt={blog.fields.title}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {documentToReactComponents(blog.fields.content, options)}

          {/* Mobile View for Recommendation and Share Button */}
          <div className="block xl:hidden mt-8">
            <RecomendationBLog blogs={blogNe} />
            <div className="mt-6">
              <ShareButton slug={blog.fields.slug} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
