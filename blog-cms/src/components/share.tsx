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
    link: "https//www/facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500 hover:text-blue-700",
  },

  {
    Icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
    style: "text-blue-400 hover:text-blue-700",
  },

  {
    Icon: IoLogoTwitter,
    link: "https://www.twitter.com/intent/tweet?url=",
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
  return (
    <div>
      <p className="my-4 text-start font-bold text-orange-500 hidden lg:hidden xl:block md:hidden px-5 ">
        BAGIKAN
      </p>
      <div>
        <div className="flex text-[24px] gap-4 px-5">
          <CopyButton link={`${domain}${slug}`} />
          {share.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={`${item.link}${domain}${slug}`}
                target="_blank"
              >
                <item.Icon className={`${item.style}`} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
