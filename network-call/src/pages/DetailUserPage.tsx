import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import axios from "../helpers/axios";

function DetailUserPage() {
  const [user, setUser] = useState<IUser | null>(null);
  const { userId } = useParams();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <div className="text-white">
    //   <h1>Username : {user?.username}</h1>
    // </div>
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr to-teal-700 from-indigo-900 p-10">
      <div className="w-max">
        <div className="flex justify-center items-center text-center w-[300px] h-[300px] border-[2px] border-white rounded-full text-3xl ">
          <img src="" alt="" />
        </div>
        <h1 className="ml-7 my-5 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-8 text-5xl text-white font-bold">
          Hello {user?.username}
        </h1>
      </div>
    </div>
  );
}
export default DetailUserPage;
