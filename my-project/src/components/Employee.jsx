import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../images/ProfileIcon.png"
const Employee = ({name,email,birthday,salary,employeeId,enableDelete}) => {

    const [Name, setName] = useState(name);
    const [Email, setEmail] = useState(email);
    const [Date, setDate] = useState(birthday);
    const [Salary, setSalary] = useState(salary);
    const [EmployeeId, setEmployeeId] = useState(employeeId);
    const [DeleteEnebaled, setDeleteEnebaled] = useState(enableDelete);
    const navigate=useNavigate();

    const hanndleDelete=(event)=>{
        event.preventDefault();
    }
    const hanndleUpdate=(event)=>
    {
        event.preventDefault();
        const employee={fullName:Name,email:Email,birthday:Date,salary:Salary}
        fetch(`http://localhost:8000/employees/${EmployeeId}`,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(employee)
        }).then(()=>{
            console.log("Updated employee!");
        })
        .then(()=>{
            navigate(0);
        })

    }

    return ( 
    <div className=" w-52 h-auto border-2 rounded-xl p-2 m-2 border-black">
    <img className="w-16 h-16 mx-auto " src={ProfileIcon} alt="ProfileIcon" />
    <label>Full Name:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setName(event.target.value)} value={Name}/>
        
        <label>Email:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setEmail(event.target.value)} value={Email} />
        
        <label>Birthday:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setDate(event.target.value)} value={Date}/> 
        <label>Salary:</label>
        <input className="bg-white"  type="text"
        onChange={(event)=>setSalary(event.target.value)} value={Salary}/>
        <input type="text" disabled value={"ID: "+employeeId} />
    <div className="justify-center">
    <button className=" bg-green-500 text-white rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleUpdate}>Update Employee</button>
    {
        DeleteEnebaled&&
        <button className="bg-red-500 text-white rounded-xl w-full mt-4 mb-4 justify-center"
         onClick={hanndleDelete}>Delete Employee</button>
        
    }
    </div>
    </div> 
    );
}
 
export default Employee;