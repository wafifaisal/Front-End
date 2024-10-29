import { createContext, useState } from "react";
import CallbackComp from "./components/callback";
// import EffectComp from './components/effect'
// import MemoComp from './components/memo'
// import RefComp from './components/ref'
// import StateComp from './components/state'
// import ContextComp from './components/context'
// import ReducerComp from './components/reducer'

export const UserContext = createContext<string>("");

function App() {
  const [user, setUser] = useState<string>("ASD");
  return (
    //  <MemoComp/>
    // <EffectComp/>
    // <RefComp/>
    // <StateComp/>
    <div>
      {/* <UserContext.Provider value={user}>
    <ContextComp/>
    </UserContext.Provider> */}
      {/* <ReducerComp/> */}
      {/* <MemoComp/>
    <EffectComp/>
    <RefComp/>
    <StateComp/> */}
      <CallbackComp />
    </div>
  );
}

export default App;
