"use client";
// import { signInWithGoogle } from "@/libs/auth";
import { FcGoogle } from "react-icons/fc";

export default function ButtonSignIn() {
  return (
    <button
      // onClick={signInWithGoogle}
      className="border-2 bg-white shadow-lg flex font-bold px-5 py-3 rounded-full "
    >
      <span className="mr-1 text-2xl">
        <FcGoogle />
      </span>
      Sign-in
    </button>
  );
}
