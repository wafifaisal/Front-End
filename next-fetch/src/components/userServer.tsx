import { IUser } from "@/types/user";

async function getData(): Promise<IUser[]> {
  const res = await fetch("http://localhost:2000/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function UserPage() {
  const data = await getData();
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
          {data.map((item, idx) => {
            return (
              <tr key={item.id} className="hover:bg-teal-800">
                <td className="p-2 text-center border bg-teal-500  border-white text-white">
                  {idx + 1}
                </td>
                <td className="p-2 text-center border bg-teal-500  border-white text-white hover:bg-teal-800 active:animate-ping hover:cursor-pointer">
                  {item.username}
                </td>
                <td className="p-2 text-center border bg-teal-500  border-white text-white ">
                  {item.email}
                </td>
                <td className="p-2 text-center border text-red-500 bg-teal-950 text-xl hover:text-red-600"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
