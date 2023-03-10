import { useState } from "react";
import NavigationBar from "./NavigationBar";

const AddEmployee = () => {

    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [salary, setSalary] = useState("");

    const hanndleSubmit=(event)=>{
        event.preventDefault();
        const employee={fullName,email,birthday,salary};

        fetch('http://localhost:8000/employees',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(employee)
        }).then(()=>{
            console.log("New employee added!");
        })
    }
    return ( 
    <div>
        <NavigationBar/>
        <div className="mx-auto border border-slate-800 rounded-lg w-[400px] h-[450px] m-6 p-2">
        <form className=" grid m-4" onSubmit={hanndleSubmit}>
                <h2 className="text-2xl text-center ">Add Employee</h2>
                <label className="mb-2" htmlFor="Full Name">Full Name:</label>
                <input value={fullName} className="mt-2 h-8 p-2 border rounded-lg border-slate-800" type="text" 
                onChange={(event)=>setName(event.target.value)}/>
                <label className="mt-2" htmlFor="Email">Email:</label>
                <input value={email} className="mt-2 h-8 p-2 border rounded-lg border-slate-800"type="text"
                onChange={(event)=>setEmail(event.target.value)} />
                <label className="mt-2" htmlFor="Date of Birth">Date of Birth:</label>
                <input value={birthday} className="mt-2 h-8 p-2 border rounded-lg border-slate-800" type="text" 
                onChange={(event)=>setBirthday(event.target.value)}/>
                <label className="mt-2" htmlFor="Salary">Salary:</label>
                <input value={salary} className="mt-2 h-8 p-2 border rounded-lg border-slate-800"type="text" 
                onChange={(event)=>setSalary(event.target.value)}/>
                <button className=" text-white text-lg rounded-xl bg-blue-600 mt-12 mb-4 h-8" type="submit">Add Employee</button>
            </form>
        </div>

    </div> );
}
 
export default AddEmployee;