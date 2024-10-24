import person from '../assets/foto.jpeg'




function About() {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/wafi-faisal-falah-695b5021b/', '_blank'); 
    }
    return (
        <div className="w-full h-screen relative bg-white">
            <div className="grid grid-cols-2 grid-rows-2 h-full">
                {/* Top Left */}
                <div className="flex items-center justify-center border border-gray-300">
                    <div className="h-40 w-40 bg-red-300 flex items-center justify-center">Top Left</div>
                </div>

                {/* Top Right */}
                <div className="flex flex-col items-center justify-center border border-gray-300 p-4">
                    <div className="text-2xl font-bold mb-2">Experience</div>
                    <div className="grid grid-cols-1 gap-2 w-full max-w-lg">
                        <div className="h-16 bg-red-300 flex items-center justify-center">Experience 1</div>
                        <div className="h-16 bg-green-300 flex items-center justify-center">Experience 2</div>
                        <div className="h-16 bg-blue-300 flex items-center justify-center">Experience 3</div>
                    </div>
                </div>

                {/* Bottom Left */}
                <div className="flex flex-col items-center justify-center border border-gray-300 p-4">
                    <div className="text-2xl font-bold mb-2">Programming Language</div>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                        <div className="h-16 bg-red-300 flex items-center justify-center">Skill 1</div>
                        <div className="h-16 bg-green-300 flex items-center justify-center">Skill 2</div>
                        <div className="h-16 bg-blue-300 flex items-center justify-center">Skill 3</div>
                        <div className="h-16 bg-yellow-300 flex items-center justify-center">Skill 4</div>
                        <div className="h-16 bg-purple-300 flex items-center justify-center">Skill 5</div>
                    </div>
                </div>

                {/* Bottom Right */}
                <div className="flex flex-col items-center justify-center border border-gray-300">
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
