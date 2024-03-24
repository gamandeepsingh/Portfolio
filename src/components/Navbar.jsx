import { GoHome } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar w-screen max-w-[560px]  fixed bottom-[5%] left-[50%] translate-x-[-50%] overflow-visible">
      <div className="flex justify-evenly items-center h-[80px] overflow-visible">
        <div className="tooltip-container overflow-visible">
        <span className="tooltip">Home</span>
          <a href="/">
            <GoHome
              fontSize={35}
              className="text-white hover:text-pink-500 transition-text duration-100 ease-in "
            />
          </a>
        </div>
        <div className="tooltip-container overflow-visible">
        <span className="tooltip">About</span>
          <a href="/about">
            <BsExclamationCircle
              fontSize={35}
              className="text-white hover:text-pink-500 transition-text duration-100 ease-in "
            />
          </a>
        </div>
        <div className="tooltip-container overflow-visible">
        <span className="tooltip">Projects</span>
          <a href="/projects">
            <FaProjectDiagram
              fontSize={35}
              className="text-white hover:text-pink-500 transition-text duration-100 ease-in "
            />
          </a>
        </div>
        <div className="tooltip-container overflow-visible">
        <span className="tooltip">Contact</span>
          <a href="/contact">
            <IoCallOutline
              fontSize={35}
              className="text-white hover:text-pink-500 transition-text duration-100 ease-in "
            />
          </a>
        </div>

        {/* <a href="/about">
          <BsExclamationCircle
            fontSize={32}
            className="text-white hover:text-pink-500 transition-text duration-100 ease-in"
          />
        </a>
        <a href="/projects">
          <FaProjectDiagram
            fontSize={32}
            className="text-white hover:text-pink-500 transition-text duration-100 ease-in"
          />
        </a>
        <a href="/contact">
          <IoCallOutline
            fontSize={35}
            className="text-white hover:text-pink-500 transition-text duration-100 ease-in"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
