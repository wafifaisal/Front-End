import Navbar from "./components/navbar"
import About from "./pages/about"
import Contact from "./pages/contact"
import HomePage from "./pages/home"
import "./style.css"
import {Routes, Route} from 'react-router-dom'

function App() {
  const nama_orang: string = "User"
  return (
   <div>
    <Navbar greet={nama_orang}/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </div>
  )
}

export default App;
