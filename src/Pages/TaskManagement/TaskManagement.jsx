import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SingleData from "../SingleData/SingleData";

const TaskManagement = () => {
    const {user}=useContext(AuthContext)
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${user?.email}`)
        .then(res=> res.json())
        .then(data=>{
           setData(data)
        })
    },[user.email])
    console.log(data)
  return (
    <div>
      <div className="text-center text-3xl font-semibold text-black">
        Todo List
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-5">
        {
            data?.map (singleData=> <SingleData key={singleData._id} singleData={singleData}></SingleData>)
        }
      </div>
      <div className="flex gap-2">
        <div className="border-2 border-[#02a388] h-[300px] w-full">
            <h2 className="font-bold text-xl text-center p-2 text-black">ongoing</h2>
        </div>
        <div className="border-2 border-[#02a388] h-[300px] w-full">
            <h2 className="font-bold text-xl text-center p-2 text-black">Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
