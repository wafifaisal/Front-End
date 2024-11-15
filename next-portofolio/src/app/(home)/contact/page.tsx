import Image from "next/image";

function Contact() {
  return (
    <div className="flex w-full h-[88vh] bg-[#F2E5BF] flex-col md:flex-row">
      {/* Form Section */}
      <div className="md:w-1/2 w-full h-full flex flex-col items-end justify-center md:pr-10 p-4 md:p-0">
        <div className="content-start font-bold text-4xl md:mr-[160px] mb-4">
          Let's Discuss Project
        </div>
        <div className="w-full md:w-[500px] bg-white p-8 rounded-lg shadow-lg border border-[black]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="mb-4 text-gray-500">I would love to hear from you.</p>
          <form
            action="mailto:wafifaisal19@gmail.com"
            method="post"
            encType="text/plain"
          >
            {/* Full Name and Email Fields */}
            <div className="mb-4 flex flex-wrap md:flex-nowrap justify-between">
              <div className="w-full md:w-[48%] mb-4 md:mb-0">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Subject Field */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="md:w-1/2 w-full h-full flex flex-col items-start justify-center p-4 md:pl-10">
        <div className="grid grid-cols-1 w-full max-w-lg gap-6">
          {/* Phone Section */}
          <div className="flex items-center text-center border-t-0 border-l-0 border-r-0 border-b border-black pb-4">
            <Image
              src="/new telp.png"
              alt="/new telp.png"
              width={50}
              height={50}
              className="p-2 rounded-full bg-purple-400"
            />
            <div className="ml-6 text-left">
              <div className="text-sm text-gray-500">Phone</div>
              <div className="text-lg font-bold">+62-813-248-283-88</div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center text-center">
            <Image
              src="/new mail.png"
              alt="/new mail.png"
              width={50}
              height={50}
              className="p-2 rounded-full bg-purple-400"
            />
            <div className="ml-6 text-left">
              <div className="text-sm text-gray-500">Mail</div>
              <div className="text-lg font-bold">wafifaisal19@gmail.com</div>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-center text-center border-t border-l-0 border-r-0 border-b-0 border-black pt-4">
            <Image
              src="/location.png"
              alt="/location.png"
              width={50}
              height={50}
              className="p-2 rounded-full bg-purple-400"
            />
            <div className="ml-6 text-left">
              <div className="text-sm text-gray-500">My Location</div>
              <div className="text-lg font-bold">Based in Bandung</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
