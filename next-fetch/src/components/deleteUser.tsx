"use client";
import action from "@/app/action";
import { MdDeleteOutline } from "react-icons/md";

export default function DeleteUser({ id }: { id: number }) {
  const onDelete = async () => {
    await fetch(`http://localhost:8000/api/user/${id}`, {
      method: "DELETE",
    });
    action("users");
  };
  return (
    <td className="p-2 border text-center">
      <MdDeleteOutline
        className="mx-auto text-red-500 hover:text-red-700 text-2xl cursor-pointer"
        onClick={onDelete}
      />
    </td>
  );
}
