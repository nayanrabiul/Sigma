import { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt={"hoobank Logo"} className=" w-[124px] h=[32px]" />
      <ul className="list-none hidden sm:flex justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  cursor-pointer text-[16px] text-white ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a hre={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu or close logo"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  p-6 bg-black-gradient fixed top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  cursor-pointer text-[16px] text-white ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-6"
                } `}
              >
                <a hre={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
