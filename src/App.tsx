//import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Main } from "./pages/main";
import { TheGodfather } from "./pages/TheGodfather";
import { CommentSection } from "./pages/commentSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/TheGodfather" element={<TheGodfather />} />
        <Route path="/commentSection" element={<CommentSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
