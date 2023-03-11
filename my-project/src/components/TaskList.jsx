import { useEffect,useState } from "react";
import Task from "./Task"
import NavigationBar from "./NavigationBar";
const TaskList = () => {
    //this component list all tasks
    const [Tasks, setTasks] = useState();
    const [FetchStatus, setFetchStatus] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/tasks')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setTasks(data);
            setFetchStatus(true);
        });
    },[])
    return ( 
        
        <div>
            <NavigationBar/>
            <div className="flex place-content-center m-2">
            {
                FetchStatus&& Tasks.map((task,index)=>(
                        <Task title={task.title} description={task.description} 
                     assignee={task.assignee}   assigneeId={task.assigneeId} 
                    compleated={task.compleated} dueDate={task.dueDate} taskId={task.id} 
                    key={index}
                    />
                ))
            }
            </div>
        </div>
        
     );
}
 
export default TaskList;