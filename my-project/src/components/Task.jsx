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
    }
    const hanndleUpdate=(event)=>{
        event.preventDefault();
        
        const task={title:Title,description:Description,assignee:Assignee
            ,assigneeId:AssigneeId,dueDate:Date ,compleated:Compleated}
            console.log(task);
        fetch(`http://localhost:8000/tasks/${TaskId}`,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then(()=>{
            console.log("Updated task!");
        })
        .then(()=>{
            navigte(0);
        })

    }
    return ( 
        <div className=" w-[300px] h-auto border-2 rounded-xl p-2 m-2 border-black">
        <img className="w-16 h-16 mb-2 mt-2 mx-auto " src={TaskIcon} alt="TaskIcon" />
        <label>Title:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setTitle(event.target.value)} value={Title}/>
        
        <label>Description:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setDescription(event.target.value)} value={Description} />
        
        <label>Assignee:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setAssignee(event.target.value)} value={Assignee}/> 
        <label>Deadline:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setDate(event.target.value)} value={Date}/>
        <label>Compleated: </label>
        <input className="bg-white" type="text"
        onChange={(event)=>setCompleated(event.target.value)} value={Compleated}/>
        
        <div className="justify-center">
        <button className=" bg-green-500 text-xl text-white rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleUpdate}>Update Task</button>
        <button className="bg-red-500 text-xl text-white rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleDelete}>Delete Task</button>
        
        </div>
        </div> 
    );
}
 
export default Task;