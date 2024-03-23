import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../style/home.css"
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Gamandeep Singh</i>", "MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-[50vw] max-md:w-[100vw] h-full text-white flex flex-col items-start justify-center">
      <div className="flex flex-col items-start gap-8 ml-[20%] ">
        <p className="text-4xl max-md:text-3xl font-light">Hello Geeky!</p>
        <div className="flex flex-col gap-1">
          <span className="text-lg max-md:text-sm font-bold">I&apos;m </span>
          <span
            ref={el}
            className="text-6xl max-md:text-5xl max-sm:text-4xl -ml-2 pointer-events-none font-extrabold min-h-[100px] cursor-none"
          />
        </div>
        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a4806244-5347-456a-8e3a-e971334e9d19">
        <button className="btn-53 px-[3rem] py-[1.2rem] max-md:px-[2prem] max-md:py-[0.8rem] max-sm:text-sm max-sm:px-[1rem] max-sm:py-[0.8rem]">
          <div className="original font-extrabold">RESUME</div>
          <div className="letters">
            <span>R</span>
            <span>E</span>
            <span>S</span>
            <span>U</span>
            <span>M</span>
            <span>E</span>
          </div>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
