import NavigationBar from "./NavigationBar";

const AddTask = () => {
    return ( 
        <div>
        <NavigationBar/>
        <div className="mx-auto border border-slate-800 rounded-lg w-[400px] h-[450px] m-6 p-2">
        <form className=" grid m-4" >
                <h2 className="text-2xl text-center ">Add Task</h2>
                <label className="mb-2" htmlFor="Title">Title:</label>
                <input className="mt-2 h-8 border rounded-lg border-slate-800" type="text" />
                <label className="mt-2" htmlFor="Description">Description:</label>
                <input className="mt-2 h-8 border rounded-lg border-slate-800"type="text" />
                <label className="mt-2" htmlFor="Assignee">Assignee:</label>
                <input className="mt-2 h-8 border rounded-lg border-slate-800" type="text" />
                <label className="mt-2" htmlFor="Salary">Due Date:</label>
                <input className="mt-2 h-8 border rounded-lg border-slate-800"type="text" />
                <button className=" text-white rounded-xl bg-blue-600 mt-12 mb-4 h-8" type="submit">Task</button>
            </form>
        </div>

    </div>
     );
}
 
export default AddTask;