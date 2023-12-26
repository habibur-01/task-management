
import { NavLink, Outlet } from "react-router-dom";
import DaisyNav from "../../sharedComponent/Navbar/DaisyNav";


const TaskManagement = () => {
    
    // const handleAddTask = (e) ={
    //     e.preventDefault()

    // }
    return (
        <div className="mb-20 min-h-screen">
            <div>
                <DaisyNav></DaisyNav>
            </div>
            <div className="flex gap-4 pt-20">
                <ul className="menu bg-base-200 w-56 min-h-screen rounded-box gap-4">
                    <li>
                        <NavLink to={"/taskmangement/taskmanage"}><span className="inline-flex gap-2" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Task Manager
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/taskmangement/todotask"} ><span className="inline-flex gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            To Do Task
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/taskmangement/continuetask"}><span className="inline-flex gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Continue Task
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/taskmangement/completetask'}><span className="inline-flex gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Complete Task
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/taskmangement/addtask'}><span className="inline-flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Add Task
                        </span>
                        </NavLink>
                    </li>
                    <li className="border-t-2 border-indigo-500 ">
                        <NavLink to={"/"}><span className="inline-flex gap-2" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Home
                        </span>
                        </NavLink>
                    </li>
                   
                   
                </ul>
                
                <div className="pt-6 flex-grow">
                    <h1 className="text-2xl text-center border-b-4 border-indigo-500 w-80 pb-2 mx-auto">Task Management</h1>
                    <div className="mx-4">
                    
                    {/* <Route index element={<TaskManagement/>}></Route> */}
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
            div
        </div>
    );
};

export default TaskManagement;