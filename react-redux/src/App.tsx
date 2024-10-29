/////////////////////////////////////////// redux version
import { useDispatch } from "react-redux";
import DisplayCounter from "./components/display";
import { decrement, increment } from "./store/counterSlice";
import DisplayCounter2 from "./components/display2";
////////////////////////////////////////////////////////////////
import { useCounter } from "./context/counterContext";
import CountDown from "./components/countDown";

function App() {
  const dispatch = useDispatch();
  const { count, increment: inc, decrement: dec } = useCounter();
  return (
    <div>
      {/* #################### redux version ########################### */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <DisplayCounter />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <DisplayCounter2 />
      {/* ############################################################# */}
      <button onClick={inc}>Increment</button>
      <h1>{count}</h1>
      <button onClick={dec}>Decrement</button>
      <CountDown />
    </div>
  );
}

export default App;
