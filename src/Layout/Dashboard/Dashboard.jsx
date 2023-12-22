import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="w-64 mx-auto min-h-screen bg-[#02a388] text-black p-3">
        <ul className="menu space-y-4 text-lg text-white font-semibold">
          <div className="w-24 ">
            <img src={user?.photoURL}  className="rounded-full ml-12"/>
            <h3 className="py-4">{user?.email}</h3>
          </div>
          <li className="bg-white text-black rounded">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="bg-white text-black rounded">
            <NavLink to="/dashboard/management">
              Management Task
            </NavLink>
          </li>
          <li className="bg-white text-black rounded">
            <NavLink to="/dashboard/createTask">
              Create Task
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8 bg-slate-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
