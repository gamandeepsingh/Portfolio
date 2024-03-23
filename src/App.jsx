import { useEffect } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import GLOBE from "vanta/src/vanta.globe";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="bg w-screen h-screen relative" id="vanta">
        <div className="nav-container w-full h-full">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
