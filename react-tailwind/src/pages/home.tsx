import person from '../assets/download (1).png';
import insta from '../assets/insta.png';
import discord from '../assets/icons8-discord-logo-50.png';
import github from '../assets/icons8-github-50.png';


function HomePage() {
  const str: string = "Hello!";
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/', '_blank');
  };
  const handleGithubClick = () => {
    window.open('https://github.com/wafifaisal', '_blank');
  };
  const handleDiscordClick = () => {
    window.open('https://discord.com/', '_blank');
  };

  return (
    <div className="w-[100%] h-[88vh] flex flex-row-reverse text-start content-center">
      <div className="content-center justify-center w-[50%] mx-[50px]">
        <h1 className="text-[#FD8B51] text-[100px] bg-[yellow] rounded-[10px] h-[150px] w-[700px] pl-[20px]">{str}</h1>
        <p className="text-[50px] mt-[-5px] content-start text-[black]">
          I'm Wafi Faisal Falah, <br /> a Front-End Developer.
        </p>
        
        <div className="flex gap-4 mt-4 ml-[20px]">
          <button onClick={handleInstagramClick} className="p-[5px] flex items-center font-bold text-[15px] text-white bg-pink-600 rounded-[10px] hover:bg-pink-700 transition-colors">
            <img className="w-[30px] h-[30px] mr-[5px]" alt="insta" src={insta} /> Instagram
          </button>
          
          <button onClick={handleDiscordClick} className="p-[5px] flex items-center font-bold text-[15px] text-white bg-blue-700 rounded-[10px] hover:bg-blue-800 transition-colors">
            <img className="w-[30px] h-[30px] mr-[5px]" alt="discord" src={discord} /> Discord
          </button>

          <button onClick={handleGithubClick} className="p-[5px] flex items-center font-bold text-[15px] text-white bg-[#AB886D] rounded-[10px] hover:bg-[#493628] transition-colors">
            <img className="w-[30px] h-[30px] mr-[5px]" alt="discord" src={github} /> GitHub
          </button>

        </div>
      </div>

      <div className="flex items-end content-end justify-center w-[50%] mx-[50px]">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-[50px] border-[2px] border-black bg-white"></div>
          <div className="absolute top-[25px] right-[15px] transform -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-purple-400"></div>
          <div className="absolute top-[25px] right-[50px] transform -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-yellow-400"></div>
          <img className="h-[600px] bg-white border-[2px] border-[black] p-[20px] pb-0 object-cover" alt="person" src={person} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
