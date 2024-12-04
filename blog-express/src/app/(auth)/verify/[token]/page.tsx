"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/auth/verify/${params.token}`,
        {
          method: "PATCH",
        }
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      router.push("/login");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  //   useEffect(()=>{
  //     onVerify()
  //   },[]) // jika ga pake tombol langsung ke login page

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative mb-8">
        <img
          src="https://img.icons8.com/?size=100&id=oTpJLaIvlhgO&format=png&color=000000"
          alt="Animated Logo"
          className="h-24 w-24 animate-bounce opacity-80"
        />
      </div>

      <button
        onClick={onVerify}
        className="relative inline-flex h-12 w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="relative inline-flex h-full w-[90%] mx-5 items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Verify
        </span>
      </button>
    </div>
  );
}
