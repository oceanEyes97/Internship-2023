import { createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import EmployeeList from "./components/EmployeeList";
import TaskList from "./components/TaskList";

const router=createBrowserRouter([
   {
    path:"/employees",
    element:<EmployeeList/>,
   },
   {
    path:"/Tasks",
    element:<TaskList/>,
   },
   {
    path:"/",
    element:<App/>,
   },


])
export default router;