"use client";

import AboutAnimation from "@/components/AboutAnimation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const greetings = [
    "Hello !",
    "Hola !",
    "Bonjour !",
    "Hallo !",
    "Ciao !",
    "Olá !",
    "Namaste !",
    "Salaam !",
    "Zdravstvuyte !",
    "こんにちは !",
    "你好 !",
    "안녕하세요 !",
    "Merhaba !",
    "Ahoj !",
    "Szia !",
    "Shalom !",
    "Hei !",
    "Salve !",
    "Hola !",
    "Hallo !",
  ];

  const [currentGreeting, setCurrentGreeting] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(greetings[index]);
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index, greetings]);

  return (
    <div className="flex justify-center items-center h-screen overflow-y-scroll">
      <div className="grid grid-cols-3 gap-4 text-center h-[90%] w-[90%]">
        {/* Left greeting and name section */}
        <div className="bg-white row-span-2 rounded-md flex flex-col items-start justify-start p-6 relative group parallax-item">
          <h1 className="text-4xl font-bold text-black mb-4 underline">
            {currentGreeting}
          </h1>
          <div className="flex items-center">
            <Image
              src="/file.svg"
              width={40}
              height={40}
              alt="Picture of Wafi Faisal Falah"
              className="rounded-full"
            />
            <div className="ml-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Wafi Faisal Falah
              </h2>
              <p className="text-sm text-gray-600">
                Junior Front End Developer
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <p className="text-black text-5xl font-semibold slide-text">
              "I'M BEHIND YOUR EVERYDAY DIGITAL EXPERIENCES"
            </p>
          </div>
        </div>

        {/* Center navigation links with parallax hover effect */}
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center text-lg font-medium parallax-hover"
          href="/about"
        >
          <div className="">
            <AboutAnimation />
          </div>
        </Link>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center text-lg font-medium parallax-hover"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center text-lg font-medium parallax-hover"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center text-lg font-medium parallax-hover"
          href="/skills"
        >
          Skills
        </Link>
      </div>

      <style jsx>{`
        .parallax-hover {
          transition: transform 0.4s ease, opacity 0.5s ease;
          transform-style: preserve-3d;
        }
        .parallax-hover:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg) scale(1.05);
        }

        .slide-text {
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .group:hover .slide-text {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
