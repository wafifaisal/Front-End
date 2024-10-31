import { Route, Routes } from "react-router-dom";
import BerandaPage from "./pages/berandaPage";
import HomePage from "./pages/HomePage";
import "./tailwind.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beranda" element={<BerandaPage />} />
      </Routes>
    </div>
  );
}

export default App;
