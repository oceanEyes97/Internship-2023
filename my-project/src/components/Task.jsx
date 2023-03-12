import TaskIcon from "../images/TaskIcon.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Task = ({title,description,assignee,assigneeId,compleated,dueDate,taskId}) => {
    const [Title, setTitle] = useState(title);
    const [Description, setDescription] = useState(description);
    const [Assignee, setAssignee] = useState(assignee);
    const [AssigneeId, setAssigneId] = useState(assigneeId);
    const [Date, setDate] = useState(dueDate);
    const [Compleated, setCompleated] = useState(compleated);
    const [TaskId, setTaskId] = useState(taskId);
    const navigte=useNavigate();
    
    const hanndleDelete=(event)=>{
        event.preventDefault();
        fetch(`http://localhost:8000/tasks/${TaskId}`,{
            method:'DELETE'  
        }).then(()=>{
            navigte(0);//using useNavigate to refresh the page after delete
        })
    }
    //Note:To update the task click on the input field to eddit your new value
    //when you edited all the values you wanted for that task,click on Update Task to fire the function to update the task
    const hanndleUpdate=(event)=>{
        event.preventDefault();
        
        const task={title:Title,description:Description,assignee:Assignee
            ,assigneeId:AssigneeId,dueDate:Date ,compleated:Compleated}
            //putting all the state into one to turn it into JSON and update it on the server
        
            
        fetch(`http://localhost:8000/tasks/${TaskId}`,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then(()=>{
            navigte(0);//using useNavigate to refresh the page after update
        })

    }
    return ( 
        <div className=" w-52 h-auto border-2 rounded-xl p-2 m-2 border-black">
        <img className="w-16 h-16 mb-2 mt-2 mx-auto " src={TaskIcon} alt="TaskIcon" />
        <label>Title:</label>
        <input className="bg-white rounded-lg hover:bg-slate-200"  type="text"
        onChange={(event)=>setTitle(event.target.value)} value={Title}/>
        
        <label>Description:</label>
        <input className="bg-white rounded-lg hover:bg-slate-200"  type="text"
        onChange={(event)=>setDescription(event.target.value)} value={Description} />
        
        <label>Assignee:</label>
        <input className="bg-white rounded-lg hover:bg-slate-200"  type="text"
        onChange={(event)=>setAssignee(event.target.value)} value={Assignee}/> 
        <label>AssigneeId:</label>
        <input className="bg-white rounded-lg hover:bg-slate-200"  type="text"
        onChange={(event)=>setAssigneId(event.target.value)} value={AssigneeId}/> 
        <label>Deadline:</label>
        <input className="bg-white rounded-lg hover:bg-slate-200"  type="date"
        onChange={(event)=>setDate(event.target.value)} value={Date}/>
        <label>Compleated: </label>
        <input className="bg-white rounded-lg hover:bg-slate-200" type="text"
        onChange={(event)=>setCompleated(event.target.value)} value={Compleated}/>
        
        <div className="justify-center">
        <button className=" bg-green-500 hover:bg-green-400 text-xl text-white rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleUpdate}>Update Task</button>
        <button className="bg-red-500 hover:bg-red-400 text-xl text-white rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleDelete}>Delete Task</button>
        
        </div>
        </div> 
    );
}
 
export default Task;