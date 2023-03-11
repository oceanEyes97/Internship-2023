import NavigationBar from "./NavigationBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddTask = () => {

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Assignee, setAssignee] = useState("");
    const [AssigneeId, setAssigneId] = useState("");
    const [Date, setDate] = useState("");
    const [Compleated, setCompleated] = useState(false);
    const navigate=useNavigate();


    const hanndleSubmit=(event)=>{
        event.preventDefault();
        
        const task={title:Title,description:Description,assignee:Assignee
            ,assigneeId:AssigneeId,dueDate:Date ,compleated:Compleated}

        fetch('http://localhost:8000/tasks',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then(()=>{
            console.log("New employee added!");
            navigate("/tasks");
        })
    }
    return ( 
        <div>
        <NavigationBar/>
        <div className="mx-auto border border-slate-800 rounded-xl w-[400px] h-[550px] m-6 p-2">
        <form className=" grid m-4"onSubmit={hanndleSubmit} >
                <h2 className="text-2xl text-center ">Add Task</h2>
                <label className="mb-2">Title:</label>
                <input className="mt-2 h-8 p-2 border rounded-lg border-slate-800" type="text"
                onChange={(event)=>setTitle(event.target.value)} />
                <label className="mt-2">Description:</label>
                <input className="mt-2 h-8 p-2 border rounded-lg border-slate-800"type="text"
                onChange={(event)=>setDescription(event.target.value)} />
                <label className="mt-2">Assignee:</label>
                <input className="mt-2 h-8 p-2 border rounded-lg border-slate-800" type="text" 
                onChange={(event)=>setAssignee(event.target.value)}/>
                <label className="mt-2">Assignee ID:</label>
                <input className="mt-2 h-8 p-2 border rounded-lg border-slate-800" type="number" 
                onChange={(event)=>setAssigneId(event.target.value)}/>
                <label className="mt-2" >Due Date:</label>
                <input className="mt-2 h-8 p-2 border rounded-lg border-slate-800"type="text" 
                onChange={(event)=>setDate(event.target.value)}/>
                <button className=" text-white rounded-xl bg-blue-600 mt-12 mb-4 h-8" type="submit">Add Task</button>
            </form>
        </div>

    </div>
     );
}
 
export default AddTask;