import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import TaskManagement from "../Pages/TaskManagement/TaskManagement";
import AddTask from "../Pages/TaskManagement/AddTask/AddTask";
import CompleteTask from "../Pages/TaskManagement/CompleteTask/CompleteTask";
import ToDoTask from "../Pages/TaskManagement/ToDoTask/ToDoTask";
import ContinueTask from "../Pages/TaskManagement/ContinueTask/ContinueTask";
import TaskMange from "../Pages/TaskManagement/TaskManage/TaskMange";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      
    ]
  },
  {
    path: "/taskmangement",
    element: <TaskManagement />,
    children: [
      {
        path: "/taskmangement/addtask",
        element: <AddTask />
      },
      {
        path: "/taskmangement/completetask",
        element: <CompleteTask/>
      },
      {
        path: "/taskmangement/todotask",
        element: <ToDoTask/>
      },
      {
        path: "/taskmangement/continuetask",
        element: <ContinueTask/>
      },
      {
        path: "/taskmangement/taskmanage",
        element: <TaskMange/>
      },
    ]
  },

]);
export default router;
