import Link from "next/link";
import { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import CopyButton from "./copy";

interface IShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: IShare[] = [
  {
    Icon: IoLogoFacebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500 hover:text-blue-700",
  },
  {
    Icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
    style: "text-blue-400 hover:text-blue-700",
  },
  {
    Icon: IoLogoTwitter,
    link: "https://twitter.com/intent/tweet?url=",
    style: "text-blue-400 hover:text-blue-700",
  },
  {
    Icon: FaWhatsapp,
    link: "https://wa.me/?text=",
    style: "text-green-500 hover:text-green-700",
  },
];

export default function ShareButton({ slug }: { slug: string }) {
  const domain = "https://wafi-blog.vercel.app/blog/";
  const shareUrl = `${domain}${slug}`;

  return (
    <div className="flex flex-col items-start gap-2 z-10">
      <h3 className="text-lg font-bold text-gray-800">Share This Article</h3>
      <div className="flex text-[24px] gap-4">
        <CopyButton link={shareUrl} />
        {share.map((item, idx) => (
          <Link
            key={idx}
            href={`${item.link}${shareUrl}`}
            target="_blank"
            aria-label={`Share on ${item.Icon.name}`}
          >
            <item.Icon className={`${item.style}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}
