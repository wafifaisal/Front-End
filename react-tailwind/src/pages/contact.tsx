import logo_telp from "../assets/new telp.png"
import logo_loc from "../assets/location.png"
import logo_email from "../assets/new mail.png"

function Contact() {
    return (
        <div className="flex w-[100%] h-[88vh] bg-[#F2E5BF]">
            <div className="w-1/2 h-full flex flex-col items-end justify-center pr-10">
                <div className="content-start font-bold text-4xl mr-[160px] translate-y-[-20px]">Let's Discuss Project</div>
                <div className="w-[500px] h-auto bg-white p-8 rounded-lg shadow-lg border border-[black]">
                    <h2 className="text-2xl font-bold text-start text-gray-800 mb-6">Get in Touch</h2>
                    <p className='translate-y-[-20px] text-gray-500'>I would love to hear from you.</p>
                    <form action="mailto:wafifaisal19@gmail.com" method="post" encType="text/plain">
                        <div className="mb-4 flex justify-between">
                            <div className="w-[48%]">
                            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input type="text" id="fullName" name="fullName" required
               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div className="w-[48%]">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Your Email</label>
                                <input type="email" id="email" name="email" required
                                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                            <input type="text" id="subject" name="subject" required
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Message</label>
                            <textarea id="message" name="message" required
                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start justify-center pl-10">
                <div className="grid grid-cols-1 w-full max-w-lg">
                    <div className="h-20 flex content-start items-center text-center border-[2px] border-black border-r-0 border-l-0 border-t-0">
                        <img className="p-[7px] ml-[40px] h-[50px] w-[50px] rounded-full bg-purple-400 content-start" alt="logo_telp" src={logo_telp}></img>
                        <div className="ml-[80px] text-[20px] text-start font-bold"> <div className="flex-col text-[15px] text-start text-gray-500">Phone</div>+62-813-248-283-88</div>

                    </div>
                    <div className="h-20 flex content-start items-center text-center">
                    <img className="p-[7px] ml-[40px] h-[50px] w-[50px] rounded-full bg-purple-400 content-start" alt="logo_email" src={logo_email}></img>
                    <div className="ml-[80px] text-[20px] text-start font-bold"> <div className="flex-col text-[15px] text-start text-gray-500">Mail</div>wafifaisal19@gmail.com</div>
                    </div>
                    <div className="h-20 flex content-start items-center text-center border-[2px] border-black border-r-0 border-l-0 border-b-0">
                    <img className="p-[7px] ml-[40px] h-[50px] w-[50px] rounded-full bg-purple-400 content-start" alt="logo_email" src={logo_loc}></img>
                    
                       <div className="ml-[80px] text-[20px] text-start font-bold"> <div className="flex-col text-[15px] text-start text-gray-500">My Location</div>Location Unknown </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
