function Contact() {
    return (
        <div className="flex w-full h-[89.5vh] bg-[#F2E5BF]">
            <div className="w-1/2 h-full flex flex-col items-end justify-center pr-10 ">
                <div className="content-start font-bold text-4xl mr-[160px] translate-y-[-20px]">Let's Discuss Project</div>
                <div className="w-[500px] h-[500px] bg-white "></div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start justify-center pl-10">
            <div className="grid grid-cols-1 w-full max-w-lg">
                        <div className="h-20 bg-red-300 flex items-center justify-center">Experience 1</div>
                        <div className="h-20 bg-green-300 flex items-center justify-center">Experience 2</div>
                        <div className="h-20 bg-blue-300 flex items-center justify-center">Experience 3</div>
                    </div>
            </div>
        </div>
    );
}

export default Contact;