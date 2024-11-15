"use client";
import Image from "next/image";

function HomePage() {
  const str: string = "Hello!";
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/wafifaisal", "_blank");
  };
  const handleDiscordClick = () => {
    window.open("https://discord.com/", "_blank");
  };

  return (
    <div className="w-full h-[88vh] flex flex-row-reverse text-start items-center">
      <div className="flex flex-col justify-center w-1/2 mx-12">
        <h1 className="text-[#FD8B51] text-[100px] bg-yellow-300 rounded-lg h-[150px] w-[700px] pl-5">
          {str}
        </h1>
        <p className="text-5xl mt-[-5px] text-black">
          I'm Wafi Faisal Falah, <br /> a Front-End Developer.
        </p>

        <div className="flex gap-4 mt-4 ml-5">
          <button
            onClick={handleInstagramClick}
            className="p-2 flex items-center font-bold text-sm text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
          >
            <Image
              className="mr-1"
              src="/insta.png"
              alt="/insta.png"
              width={30}
              height={30}
            />{" "}
            Instagram
          </button>

          <button
            onClick={handleDiscordClick}
            className="p-2 flex items-center font-bold text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Image
              className="mr-1"
              src="/icons8-discord-logo-50.png"
              alt="/icons8-discord-logo-50.png"
              width={30}
              height={30}
            />{" "}
            Discord
          </button>

          <button
            onClick={handleGithubClick}
            className="p-2 flex items-center font-bold text-sm text-white bg-[#AB886D] rounded-lg hover:bg-[#493628] transition-colors"
          >
            <Image
              className="mr-1"
              src="/icons8-github-50.png"
              alt="/icons8-github-50.png"
              width={30}
              height={30}
            />{" "}
            GitHub
          </button>
        </div>
      </div>

      <div className="flex items-end justify-center w-1/2 mx-12">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-12 border-2 border-black bg-white"></div>
          <div className="absolute top-6 right-4 transform -translate-y-1/2 w-5 h-5 rounded-full bg-purple-400"></div>
          <div className="absolute top-6 right-12 transform -translate-y-1/2 w-5 h-5 rounded-full bg-yellow-400"></div>
          <Image
            className="bg-white border-2 border-black p-5 pb-0 object-cover"
            src="/download (1).png"
            alt="/download (1).png"
            width={400}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
