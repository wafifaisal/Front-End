"use client";
import { IoLink } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useCopyToClipboard } from "usehooks-ts";
import { useState } from "react";

export default function CopyButton({ link }: { link: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <div
      className="text-gray-500 cursor-pointer hover:text-black"
      onClick={() => {
        copy(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? <FaCheck className="text-green-400" /> : <IoLink />}
      {copied && (
        <span className="absolute left-0 -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-black text-white rounded shadow-lg">
          Link copied!
        </span>
      )}
    </div>
  );
}
