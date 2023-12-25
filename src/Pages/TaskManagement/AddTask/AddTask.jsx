
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/AxiosPublic";
import { useState } from "react";




const AddTask = () => {
    const axiosPublic = useAxiosPublic();
    const [addTask, setAddTask] = useState()
    console.log(addTask)

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        setAddTask(data.data)

        axiosPublic.post('/task', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="flex justify-center items-center h-[600px]">
            <div className="w-3/4">
                <form className="card-body w-3/6 mx-auto" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title")} placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <input type="taxt" {...register("description")} placeholder="description" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadlines</span>
                        </label>
                        <input type="date" {...register("deadlines")} placeholder="deadlines" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priorities</span>
                        </label>
                        <select defaultValue="default" {...register('Priorities', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="salad">Low</option>
                            <option value="pizza">moderate</option>
                            <option value="soup">High</option>

                        </select>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;