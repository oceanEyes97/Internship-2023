import TaskIcon from "../images/TaskIcon.png"
import { useState } from "react";
const Task = () => {
    const [Title, setTitle] = useState("Job");
    const [Description, setDescription] = useState("This is a description");
    const [Assignee, setAssignee] = useState("Assignee 1");
    const [Date, setDate] = useState("DD/MM/YY");
    return ( 
        <div className=" w-52 h-auto border-2 rounded-xl p-2 m-2 border-black">
        <img className="w-16 h-16 mx-auto " src={TaskIcon} alt="TaskIcon" />
        <p>Title: {Title}</p>
        <p>Description: {Description}</p>
        <p>Assignee: {Assignee}</p>
        <p>Due Date: {Date}</p>
    
        </div> 
    );
}
 
export default Task;