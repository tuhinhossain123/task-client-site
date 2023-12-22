import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoLogInOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrNotes } from "react-icons/gr";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
    toast("sing up successfully");
  };
  return (
    <div className="sticky z-10 top-0">
      <nav className="flex flex-col md:flex-row md:items-center justify-between py-2 px-10 bg-black">
        <div className="nav-left flex items-center justify-between w-full md:w-fit">
          <Link to={"/"}>
            <h2 className="logo  font-bold  flex items-center gap-3">
            <GrNotes className="text-4xl text-[#02a388]"/>
              <span className="text-xl md:text-2xl">Task Management</span>
            </h2>
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
                About
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  to={"/dashboard"}
                  className=" px-5 py-1 text-xl font-semibold hover:text-[#02a388] focus:text-[#02a388]  duration-500"
                >
                  Dashboard
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="nav-right hidden md:block ">
          {user ? (
            <>
              <button onClick={handleLogout}>
                <Link
                  // to={"/login"}
                  className="py-2 px-4 text-gray-100 bg-[#02a388]  rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
                >
                  <IoMdLogOut className="text-3xl font-extrabold" />
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link
                  to={"/login"}
                  className="py-2 px-4 text-gray-100 bg-[#02a388]  rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
                >
                  <IoLogInOutline className="text-3xl font-extrabold" />
                </Link>
              </button>
              <ToastContainer />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
