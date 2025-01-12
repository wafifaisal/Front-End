import person from '../assets/foto.jpeg'
import logop from "../assets/icons8-python-50.png"
import logor from "../assets/icons8-javascript-30.png"
import logoc from "../assets/icons8-css-logo-50.png"
import logoh from "../assets/html new.png"
import logom from "../assets/icons8-mysql-logo-50.png"
import logot from "../assets/icons8-typescript-50 (1).png"
function About() {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/wafi-faisal-falah-695b5021b/', '_blank'); 
    }
    return (
        <div className="w-[100%] h-[88vh] relative bg-white">
            <div className="grid grid-cols-2 grid-rows-2 h-full">
                {/* Top Left */}
                <div className="flex flex-col items-center justify-center hover:bg-[#F2E5BF]">
                    <div className="text-4xl font-extrabold mb-4 w-[100%] p-[30px]">Skill and<br/>Experience
                    <div className='font-thin text-xl translate-y-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repellendus deleniti dolore eveniet repellat fugit impedit labore quaerat ullam aspernatur.</div>
                    </div>
                </div>

                {/* Top Right */}
                <div className="flex flex-col items-center justify-center hover:bg-[#F2E5BF]">
                    <div className="text-2xl font-bold mb-4 mr-[400px] ">Experience</div>
                    <div className="grid grid-cols-1 w-full max-w-lg ">
                        
                    <div className="h-20 flex content-start items-center text-center border-[2px] border-black border-r-0 border-l-0">January, 2023 -<br/>September, 2024
                            <div className='ml-[80px] text-[20px] text-start font-bold '>Laboratory Coordinator
                                    <div className='flex-col text-[10px] text-start text-gray-500'>Parahyangan Catholic University, Bandung</div>
                            </div>
                            </div>

                        <div className="h-20 flex content-start items-center text-center">August -<br/>October, 2021
                            <div className='ml-[100px] text-[20px] text-start font-bold '>Internship
                                    <div className='flex-col text-[10px] text-start text-gray-500'>PT. Pindad (Persero), Bandung</div>
                            </div>
                        </div>
                        
                        <div className="h-20 flex content-start items-center text-center border-[2px] border-black border-r-0 border-l-0">January, 2023 -<br/>September, 2024
                        <div className='ml-[80px] text-[20px] text-start font-bold '>Contract Employee
                                    <div className='flex-col text-[10px] text-start text-gray-500'>PT.Indonesia Daya Bakti, Bandung</div>
                            </div>
                            </div>

                    </div>
                </div>

                {/* Bottom Left */}
                <div className="flex flex-col items-start justify-center hover:bg-[#F2E5BF] pl-[30px]">
                    <div className="text-2xl font-bold mb-4">Programming Language</div>

                    {/* python */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                        <div className="h-16 border-[2px] border-[black] flex items-center hover:border-r-[4px] hover:border-b-[4px] hover:border-black"><img className="h-[40px] w-[40px] ml-[20px] rounded-full bg-purple-400 content-start p-[3px]" alt="logop" src={logop}></img>
                        <p className="ml-[10px]">Python</p>
                        </div>
                        
                        
                        <div className="h-16 border-[2px] border-[black] flex items-center hover:border-r-[4px] hover:border-b-[4px] hover:border-black"><img className="h-[40px] w-[40px] ml-[20px] rounded-full bg-purple-400 content-start p-[5px]" alt="logor" src={logor}></img>
                        <p className="ml-[10px]">JavaScript</p>
                        </div>
                        
                        <div className="h-16 border-[2px] border-[black] flex items-center hover:border-r-[4px] hover:border-b-[4px] hover:border-black"><img className="h-[40px] w-[40px] ml-[20px] rounded-full bg-purple-400 content-start p-[3px]" alt="logoc" src={logoc}></img>
                        <p className="ml-[10px]">CSS</p>
                        </div>

                        <div className="h-16 border-[2px] border-[black] flex items-center hover:border-r-[4px] hover:border-b-[4px] hover:border-black"><img className="h-[40px] w-[40px] ml-[20px] p-[4px] rounded-full bg-purple-400 content-start" alt="logor" src={logoh}></img>
                        <p className="ml-[10px]">HTML</p>
                        </div>

                        <div className="h-16 border-[2px] border-[black] flex items-center hover:border-r-[4px] hover:border-b-[4px] hover:border-black"><img className="h-[40px] w-[40px] ml-[20px] rounded-full bg-purple-400 content-start p-[3px]" alt="logor" src={logom}></img>
                        <p className="ml-[10px]">MySQL</p>
                        </div>

                        <div className="h-16 border-[2px] border-[black] flex items-center hover:border-r-[4px] hover:border-b-[4px] hover:border-black"><img className="h-[40px] w-[40px] ml-[20px] rounded-full bg-purple-400 content-start p-[3px]" alt="logot" src={logot}></img>
                        <p className="ml-[10px]">TypeScript</p>
                        </div>
                        
                    </div>
                
                </div>

                {/* Bottom Right */}
                <div className="flex flex-col items-center justify-center hover:bg-[#F2E5BF]">
                    <img className="h-40 w-40 rounded-full border-[1px]  " alt="person" src={person} />

                    <button 
                        onClick={handleLinkedInClick} 
                        className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-700 transition-colors"
                    >
                        View My Linkedin
                    </button>

                </div>
                

            </div>
        </div>
    );
}

export default About;
