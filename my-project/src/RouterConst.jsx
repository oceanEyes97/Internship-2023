import { createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import EmployeeList from "./components/EmployeeList";
import TaskList from "./components/TaskList";
import AddEmployee from "./components/AddEmployee";
import AddTask from "./components/AddTask";

const router=createBrowserRouter([
   {
    path:"/employees",
    element:<EmployeeList/>,
   },
   {
    path:"/tasks",
    element:<TaskList/>,
   },
   {
      path:"/addEmployee",
      element:<AddEmployee/>

   },
   {
      path:"/addTask",
      element:<AddTask/>

   },
   {
    path:"/",
    element:<App/>,
   },


])
export default router;