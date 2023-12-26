

const TaskManage = () => {
    return (
        <div className="mt-10 min-h-screen">
            <h1 className="text-2xl font-semibold py-3 border-b-2 ">All Task</h1>
            <div className="grid mt-6 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="border mt-6 rounded-lg min-h-screen">
                    <h1 className="text-xl font-medium border-b-2 text-center py-4">To Do Task</h1>
                    <div className="flex justify-center py-20">
                        <div className="card w-96  bg-black text-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border mt-6 rounded-lg min-h-screen">
                    <h1 className="text-xl font-medium border-b-2 text-center py-4">Task Is On Going</h1>
                    <div className="flex justify-center py-20">
                        <div className="card w-96  bg-black text-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border mt-6 rounded-lg min-h-screen">
                    <h1 className="text-xl font-medium border-b-2 text-center py-4">Completed Task</h1>
                    <div className="flex justify-center py-20">
                        <div className="card w-96 bg-black text-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TaskManage;