import { useRef, useState, useEffect } from "react";
import { ITodo } from "./types/todo";
import Todos from "./components/todos";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: false },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        return alert("Input tidak boleh kosong");
      }

      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((t) => [...t, newTodo]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newArr = todo.filter((item) => item.id !== id);
    setTodo(newArr);
  };

  const handleDone = (id: number) => {
    const newArr = todo.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone };
      }
      return { ...item };
    });
    setTodo(newArr);
  };
  useEffect(() => {
    localStorage.setItem("name", "andi");
  }, []);

  return (
    <div className="flex flex-col items-center p-10 bg-[#A5A2A2] h-[100vh]">
      <h1 className="text-[60px] font-bold text-[#DD2020] border-[5px] w-[350px] text-center rounded-[50px] border-[#DD2020] translate-y-[-20px]">
        To<span className="text-[#DD2020]">"Do"</span>List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone} />
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input
          ref={inputRef}
          className="w-full border-2 border-gray-700 rounded-md p-2 bg-[#859F3D] text-black"
          type="text"
          placeholder="Add Task here"
        />
        <button
          className="bg-[black] p-2 rounded-md text-[#F5F5F7]"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <p className="font-medium text-2xl mt-5">
        Done: {todo.filter((item) => item.isDone == true).length}
      </p>
    </div>
  );
}

export default App;
