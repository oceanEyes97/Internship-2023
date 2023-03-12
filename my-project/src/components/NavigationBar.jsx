import { Link } from "react-router-dom";

const NavigationBar = () => {
    return ( 
       <div className="container min-w-full flex flex-row items-center flex-wrap 
       rounded-lg m-2 p-4 bg-blue-500 text-white text-center">
           <Link to={"/"} className="flex-1 rounded-xl hover:bg-blue-400">Top Employees</Link>
           <Link to={"/employees"} className="flex-1 rounded-xl hover:bg-blue-400">Employee's</Link>
           <Link to={"/addEmployee"} className="flex-1 rounded-xl hover:bg-blue-400">Add Employee </Link>
           <Link to={"/tasks"} className="flex-1 rounded-xl hover:bg-blue-400">Tasks</Link>
           <Link to={"/addTask"} className="flex-1 rounded-xl hover:bg-blue-400">Add Task</Link>
       </div>
     );
}
 
export default NavigationBar;