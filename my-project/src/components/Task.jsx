import TaskIcon from "../images/TaskIcon.png"
import { useState } from "react";
const Task = ({title,descrption,assignee,assigneeId,dueDate}) => {
    const [Title, setTitle] = useState(title);
    const [Description, setDescription] = useState(descrption);
    const [Assignee, setAssignee] = useState(assignee);
    const [AssigneId, setAssigne] = useState(assigneeId);
    const [Date, setDate] = useState(dueDate);
    
    const hanndleDelete=(event)=>{
        event.preventDefault();
    }
    return ( 
        <div className=" w-[300px] h-auto border-2 rounded-xl p-2 m-2 border-black">
        <img className="w-16 h-16 mx-auto " src={TaskIcon} alt="TaskIcon" />
        <div>
        <label>Title: <br />{Title} </label>
        </div>
        <div>
        <label>Description:{Description} </label>
        </div>
        <div>
        <label>Assignee: {Assignee}</label>
        </div>
        <div>
        <label>Due Date: {Date}</label>
        </div>
        <div className="justify-center">
        <button className="bg-red-400 rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleDelete}>Delete Task</button>
        </div>
        </div> 
    );
}
 
export default Task;