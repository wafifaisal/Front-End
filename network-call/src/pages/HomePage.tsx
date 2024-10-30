import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(
      `Are you sure to delete ${user.username} account?`
    );
    if (confirmSubmit) {
    }
    try {
      await axios.delete(`/users/${user.id}`);
      setReload(!reload);
      alert(`Account ${user.username} has been deleted!`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

  return (
    <div className="flex justify-center">
      <table className="table-auto mt-10">
        <thead className="p-4 border-[1px] border-[white] border-solid">
          <tr className="gap-5">
            <th
              className="p-2 text-center border bg-teal-800  border-white text-white"
              scope="col"
            >
              No.
            </th>
            <th
              className="p-2 text-center border bg-teal-800  border-white text-white"
              scope="col"
            >
              Username
            </th>
            <th
              className="p-2 text-center border bg-teal-800 border-white text-white"
              scope="col"
            >
              Email
            </th>
            <th className="p-2 text-center border bg-teal-800 border-white text-white">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr key={item.id} className="hover:bg-teal-800">
                <td className="p-2 text-center border bg-teal-500  border-white text-white">
                  {idx + 1}
                </td>
                <td
                  onClick={() => navigate(`/${item.id}`)}
                  className="p-2 text-center border bg-teal-500  border-white text-white hover:bg-teal-800 active:animate-ping hover:cursor-pointer"
                >
                  {item.username}
                </td>
                <td className="p-2 text-center border bg-teal-500  border-white text-white ">
                  {item.email}
                </td>
                <td className="p-2 text-center border text-red-500 bg-teal-950 text-xl hover:text-red-600">
                  <MdDeleteForever
                    onClick={() => handleDelete(item)}
                    className="mx-3 text-center text-2xl transition-transform hover:animate-pulse"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default HomePage;
