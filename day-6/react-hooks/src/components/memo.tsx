import { useMemo, useState } from "react"

export default function MemoComp() {
    const [number,setNumber] = useState<number> (0)
    const [count,setCount] = useState<number> (0)

    const incrementNumber = () => setNumber((number) => number + 1)
    const incrementCount = () => setCount((count) => count + 1)

    const isNumberEven = useMemo(() => {
        let i = 0
        while (i<200000000){
            i++ ;
        }
        return number % 2 === 0
    }, [number])

    return(
        <div>
            <button onClick={incrementNumber}> number : {number} </button>
            <h1> {isNumberEven ? "Even" : "Odd"} </h1>
            <button onClick={incrementCount}>count : {count}</button>

        </div>


    )
}
 