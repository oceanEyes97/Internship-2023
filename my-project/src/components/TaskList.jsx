import Task from "./Task"
import NavigationBar from "./NavigationBar";
const TaskList = () => {
    return ( 
        
        <div>
            <NavigationBar/>
            <div className="flex place-content-center m-2">
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            </div>
        </div>
        
     );
}
 
export default TaskList;