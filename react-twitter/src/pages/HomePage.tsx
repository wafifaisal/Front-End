import { useNavigate } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { RegisterModal } from "./RegisterPage";
import { LoginModal } from "./LoginPage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center mt-[200px]">
      <RiTwitterXLine className="flex-1 w-[300px] h-[300px] text-white ml-[100px]" />

      <div className="flex flex-col w-[50%]">
        {/* Typing animation with controlled width */}
        <div
          className="ml-[70px] overflow-hidden"
          style={{ width: "fit-content" }}
        >
          <h1 className="text-white text-[70px] font-extrabold animate-typing border-r-4 border-white">
            Happening Now
          </h1>
        </div>

        <h1 className="text-white text-[30px] ml-[70px]">Join Today.</h1>

        <div className="flex flex-col items-center w-full max-w-md p-4 justify-center">
          <RegisterModal />

          {/* Border with "or" text in the center */}
          <div className="relative flex items-center w-full max-w-[300px] translate-y-[15px]">
            <div className="w-full border-b-[1px] border-white"></div>
            <span className="absolute left-1/2 -translate-x-1/2 bg-black px-2 text-white text-sm">
              or
            </span>
          </div>
        </div>

        <h2 className="text-white font-bold mt-4 ml-[70px]">
          Already have an account?
        </h2>

        <div className="flex w-full max-w-md p-4 justify-center">
          <LoginModal />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
