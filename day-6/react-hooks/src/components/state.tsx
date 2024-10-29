import { useState } from "react"

function StateComp (){
    const[count, setCount] = useState<number>(0) // Const Cara 1
    const [name, setName] = useState <string>("")

    const decrement = () =>{  // Const Cara 2
        setCount(count-1)
    }

    console.log(name)

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>  {/* Cara 1 */}
            <h1> {count} </h1>
            <button onClick={decrement}>-</button> {/* Cara 2 */}
            <h1>{name}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default StateComp