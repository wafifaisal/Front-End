import person from '../assets/download (1).png'


function HomePage(){
    const str: string = "Hello!"
    return(
        <div className=" w-[100%] h-[89.5vh] flex flex-row-reverse text-start content-center bg-[white]">
            <div className='content-center justify-center w-[50%] mx-[50px]'>
            <h1 className=" text-[#FD8B51] text-[100px] bg-[yellow] rounded-[10px] h-[150px] w-[700px] pl-[20px]">{str}</h1>
            <p className="text-[50px] mt-[-5px] content-start text-[black]">I'm Wafi Faisal Falah, <br/> a Front-End Developer.</p>
            </div>
            <div className="flex items-end content-end justify-center w-[50%] mx-[50px]">
            <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-[50px] border-[2px] border-black bg-white"></div>
            <div className="absolute top-[25px] right-[15px] transform -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-purple-400"></div>
            <div className="absolute top-[25px] right-[50px] transform -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-yellow-400"></div>
            <img className="h-[600px] bg-white border-[2px] border-[black] p-[20px] pb-0  " alt="person" src={person} />
            </div>
            </div>
        </div>
    )
}
export default HomePage