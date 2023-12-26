import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/AxiosPublic";


const CompleteTask = () => {
    const axiosPublic = useAxiosPublic()
    const [task, setTask] = useState([])
    console.log(task)

    useEffect(() => {
        axiosPublic.get('/task')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setTask(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [axiosPublic])

    return (
        <div className="mt-4">
            <h1 className="text-2xl font-semibold py-3 border-b-2 ">Completed Task</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    task?.map(taskData => <div key={taskData._id}>
                        <div className="card w-96 h-72 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{taskData.title}</h2>
                                <p>{taskData.description}</p>
                                <p>{taskData.deadlines}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">{taskData.Priorities}</button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default CompleteTask;