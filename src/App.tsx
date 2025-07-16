//import reactLogo from './assets/react.svg'
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { TheGodfather } from "./pages/TheGodfather";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TheGodfather" element={<TheGodfather />} />
      </Routes>
    </Router>
  );
}

export default App;
