import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoLogInOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="sticky z-10 top-0">
      <nav className="flex flex-col md:flex-row md:items-center justify-between py-2 px-10 bg-black">
        <div className="nav-left flex items-center justify-between w-full md:w-fit">
          <Link to={"/"}>
            <h2 className="logo text-3xl font-bold text-[#02a388]">Task Management</h2>
          </Link>
          <div className="menu-btn md:hidden flex items-center justify-between duration-1000 ">
            {menu ? (
              <p
                onClick={handleMenu}
                className="text-teal-500 text-4xl duration-1000 "
              >
                <RxCross2></RxCross2>
              </p>
            ) : (
              <p
                onClick={handleMenu}
                className="text-teal-500 text-4xl duration-1000 "
              >
                <IoMenuOutline></IoMenuOutline>
              </p>
            )}
          </div>
        </div>
        <div className="nav-center">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center absolute md:static  ${
              menu ? "top-[3.4rem]" : "-top-48"
            }  rounded-md duration-500 py-4 px-3 z-10 `}
          >
            <li>
              <NavLink
                to={"/"}
                className=" px-5 py-1 text-xl font-semibold hover:text-[#02a388] focus:text-[#02a388] duration-500 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className=" px-5 py-1 text-xl font-semibold hover:text-[#02a388] focus:text-[#02a388]  duration-500"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className=" px-5 py-1 text-xl font-semibold hover:text-[#02a388] focus:text-[#02a388]  duration-500"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className=" px-5 py-1 text-xl font-semibold hover:text-[#02a388] focus:text-[#02a388]  duration-500"
              >
                my
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right hidden md:block ">
          <button>
            <Link
              to={"/login"}
              className="py-2 px-4 text-gray-100 bg-[#02a388]  rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
            >
              <IoLogInOutline  className="text-3xl font-extrabold"/>
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
