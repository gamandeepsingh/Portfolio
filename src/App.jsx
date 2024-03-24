import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import GLOBE from "vanta/src/vanta.globe";
import "./App.css";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));


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
    <div className="w-screen h-[100svh] overflow-hidden relative">
      <div className="bg w-screen h-[100svh] relative" id="vanta">
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
