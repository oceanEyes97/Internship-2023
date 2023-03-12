import { useEffect,useState } from "react";
import Task from "./Task"
import NavigationBar from "./NavigationBar";
const TaskList = () => {
    //this component list all tasks
    const [Tasks, setTasks] = useState();
    const [FetchStatus, setFetchStatus] = useState(false);
    //fetching the data from JSON server
    useEffect(()=>{
        fetch('http://localhost:8000/tasks')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setTasks(data);// setting the response into state
            setFetchStatus(true);
        });
    },[])
    return ( 
        
        <div>
            <NavigationBar/>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-row items-center flex-wrap">
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