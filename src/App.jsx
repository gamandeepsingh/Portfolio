import { lazy, useEffect, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GLOBE from "vanta/src/vanta.globe";
import "./App.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));


function App() {
  const { pathname } = useLocation()
  // console.log(pathname);
  useEffect(() => {
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0.5,
    });
  }, []);

  return (
    <div className="w-screen min-h-[100svh] h-full overflow-hidden relative bg-[#23153C]">
      <div className="bg w-screen min-h-[100svh] h-full relative" id="vanta">
        {
          <div className="nav-container w-full h-full flex flex-col items-center">
            {
              pathname === "/" || pathname === "/about" || pathname === "/projects" || pathname === "/contact" ? <Navbar path={pathname} /> : null
            }
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </Suspense>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
