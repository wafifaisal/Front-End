"use client";
import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import ButtonSignIn from "./buttonSignin";
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  };
  useEffect(() => {
    getSession();
  }, []);
  return (
    <div className="h-[60px] top-0">
      <Wrapper>
        <Link href={"/"} className="flex items-center gap-2 ">
          <Image
            src="https://img.icons8.com/?size=100&id=oTpJLaIvlhgO&format=png&color=000000"
            width={50}
            height={50}
            alt="Logo Blogger"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            <div className="text-black">
              Fresh <span className="text-orange-500">Blog</span>
            </div>
          </span>
        </Link>
        {user ? (
          <div>
            <Avatar
              picture={user.user_metadata.picture}
              full_name={user.user_metadata.full_name}
              email={user.user_metadata.email}
            />
          </div>
        ) : (
          <ButtonSignIn />
        )}
      </Wrapper>
    </div>
  );
}
