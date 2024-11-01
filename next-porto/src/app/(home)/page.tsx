"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const greetings = [
    "Hello !", // English
    "Hola !", // Spanish
    "Bonjour !", // French
    "Hallo !", // German
    "Ciao !", // Italian
    "Olá !", // Portuguese
    "Namaste !", // Hindi
    "Salaam !", // Arabic
    "Zdravstvuyte !", // Russian
    "こんにちは !", // Japanese (こんにちは)
    "你好 !", // Chinese (你好)
    "안녕하세요 !", // Korean (안녕하세요)
    "Merhaba !", // Turkish
    "Ahoj !", // Czech
    "Szia !", // Hungarian
    "Shalom !", // Hebrew
    "Hei !", // Norwegian
    "Salve !", // Latin
    "Hola !", // Catalan
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
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4 text-center h-[90%] w-[90%]">
        <div className="bg-white row-span-2 rounded-md flex items-start justify-center">
          <h1 className="text-4xl font-bold text-black mt-8 border-b-2 border-black ">
            {currentGreeting}
          </h1>
          <div>
            <h2 className="flex flex-col">Wafi Faisal Falah</h2>
          </div>
        </div>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center"
          href={"/portofolio"}
        >
          Portofolio
        </Link>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center"
          href={"/contact"}
        >
          Contact
        </Link>
        <Link
          className="bg-yellow-500 rounded-md flex items-center justify-center"
          href={"/skills"}
        >
          Skills
        </Link>
      </div>
    </div>
  );
}
