import { useEffect, useState } from "react"

function EffectComp(){
    const [count,setCount] = useState <number> (1)

    const [number,setNumber] = useState <number> (10)


    const inCount = () => {
        getData()
        if (count == 10){
            alert ("data limit")
        } else{
            setCount(count+1)
        }
    }
    
useEffect(() =>{
    getData()
    // document.title = `you Clicked ${count} times`
    // console.log(Date.now())
}, [count])

    const getData = async()=>{
        try{
            const res= await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            const user = await res.json()
            console.log(user)         
        } catch (error){
            console.log(error)

        }
    }


    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick= {inCount}>+ count</button>
            <h2>number: {number}</h2>
            <button onClick={() => setNumber(number+1)}>+ number</button>
        </div>
    )
}

export default EffectComp