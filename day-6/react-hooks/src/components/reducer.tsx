import { useReducer } from "react";

const actionType = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

interface countAction {
    type: string;
    payload: number
}

interface countState {
    count: number
}

function reducer(state: countState, action: countAction){
    switch(action.type){
        case actionType.INCREMENT:
            return {count: state.count + action.payload}
        case actionType.DECREMENT:
            return {count: state.count - action.payload}
            default:
                return state
    }
}

function ReducerComp (){
    const [state,dispatch] = useReducer(reducer,{ count:0 })

    const increment =() => {
        dispatch ({type: 'increment',payload:1})
    }

    const decrement =() => {
        dispatch ({type: 'decrement',payload:1})
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h1>Count: {state.count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default ReducerComp