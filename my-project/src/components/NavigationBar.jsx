import { Link } from "react-router-dom";

const NavigationBar = () => {
    return ( 
       <div className="w-auto text-center  h-12 border border-black rounded-md m-2 bg-blue-500 place">
         <div className="flex m-2 text-xl text-white font-medium">
           
           <Link to={"/"} className="flex-1 rounded-xl hover:bg-blue-400">Home</Link>
           <Link to={"/employees"} className="flex-1 rounded-xl hover:bg-blue-400">Employee's</Link>
           <Link to={"/addEmployee"} className="flex-1 rounded-xl hover:bg-blue-400">Add Employee </Link>
           <Link to={"/tasks"} className="flex-1 rounded-xl hover:bg-blue-400">Tasks</Link>
           <Link to={"/addTask"} className="flex-1 rounded-xl hover:bg-blue-400">Add Task</Link>
       </div>
       </div>
     );
}
 
export default NavigationBar;