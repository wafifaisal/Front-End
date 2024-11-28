import Image from "next/image";

interface Iprops {
  picture: string;
  full_name: string;
  email: string;
}

export default function Avatar({ picture, full_name, email }: Iprops) {
  // const onLogout = () => {
  //   supabase.auth.signOut();
  // };
  return (
    <div className="p-4 text-center cursor-pointer">
      <div className="flex gap-4">
        <Image
          src={picture}
          alt="Author Avatar"
          width={40}
          height={40}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col text-gray-700 font-semibold text-start">
          {full_name}
          <div className="text-gray-500 text-sm mb-5">{email}</div>
        </div>
      </div>
    </div>
  );
}
