import { toast } from "react-toastify";

const AddTask = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const description = form.description.value;
    const add = { title, date, priority, description };
    console.log(add);

    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Todo List added");
      });
  };
  return (
    <div className="">
      <div className="">
        <div className="hero-content flex-col">
          <div className="w-full mx-auto shadow-2xl rounded-lg bg-black">
            <div className="card-body">
              <form onSubmit={handleForm}>
                <div className="flex justify-center gap-5">
                  <div className="form-control  w-full">
                    <label className="label">
                      <span className="label-text text-white text-lg">
                        Task Tittle
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="task title"
                      name="title"
                      className="input text-white bg-slate-800 input-bordered"
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-white text-lg">
                        Task Deadline
                      </span>
                    </label>
                    <input
                      type="date"
                      placeholder=""
                      name="date"
                      className="input text-white bg-slate-800 input-bordered"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white text-lg">
                        Task Priority
                      </span>
                    </label>
                    <select
                      id=""
                      name="priority"
                      className=" input text-white bg-slate-800 input-bordered"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div className="form-control  w-full">
                    <label className="label">
                      <span className="label-text text-white text-lg">
                        Description
                      </span>
                    </label>
                    <textarea
                      className="  text-white bg-slate-800 p-2 input-bordered"
                      name="description"
                      id=""
                      cols="5"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Add New Task"
                  className="btn btn-block text-white bg-[#02a388] mt-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
