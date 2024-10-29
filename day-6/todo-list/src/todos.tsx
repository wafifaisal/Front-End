import { ITodo } from "./types/todo";

function Todos({todos}: {todos: ITodo[]}){

    return(
        <div>
            {
            todos.map((item,idx) => {
                return(
                    <div key={idx} className="flex min-w-[400px] justify-between items-center">
                        <input type="checkbox" className="" />
                        <div className="font-bold text-[20px]">{item.desc}</div>
                        <button className="flex border-[2px] border-red-400 rounded-[5px] w-[40px] h-[40px] my-2 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
<path fill="red" d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
</svg></button>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Todos