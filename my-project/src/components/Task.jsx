import TaskIcon from "../images/TaskIcon.png"
const Task = () => {
    return ( 
        <div className=" w-52 h-52 border-2 rounded-xl p-2 m-2 border-black">
        <img className="w-16 h-16 mx-auto " src={TaskIcon} alt="TaskIcon" />
        <p>Title:</p>
        <p>Description:</p>
        <p>Assignee:</p>
        <p>Due Date:</p>
    
        </div> 
    );
}
 
export default Task;