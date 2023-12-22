const SingleData = ({ singleData }) => {
  const { title, description, deadline, priority } = singleData;
  return  <div  className=" border-2 border-[#02a388] p-3">
  <h1>
    <span className="text-xl text-black font-semibold">Title: </span>
  <span className="text-lg text-black font-semibold">  {title}</span>
  </h1>
  <h3>
    <span className="text-xl text-black font-semibold">
      Description: 
    </span>
   <span className="text-black ml-1">
     {description}
   </span>
  </h3>
  <div className="flex justify-between items-center py-5">
    <h3>
      <span className="text-xl text-black font-semibold">
        Deadline:
      </span>
     <span className="ml-1 text-black"> {deadline}</span>
    
    </h3>
    <h3>
      <span className="text-xl text-black font-semibold">
        priority:
      </span>
      <span className="ml-1 text-black"> {priority}</span>
    </h3>
  </div>
</div>
};

export default SingleData;
