import { useState } from "react";
import ProfileIcon from "../images/ProfileIcon.png"
const Employee = ({name,email,birthday,salary,employeeId,enableDelete}) => {

    const [Name, setName] = useState(name);
    const [Email, setEmail] = useState(email);
    const [Date, setDate] = useState(birthday);
    const [Salary, setSalary] = useState(salary);
    const [EmployeeId, setEmployeeId] = useState(employeeId);
    const [DeleteEnebaled, setDeleteEnebaled] = useState(enableDelete);

    const hanndleDelete=(event)=>{
        event.preventDefault();
    }

    return ( 
    <div className=" w-52 h-auto border-2 rounded-xl p-2 m-2 border-black">
    <img className="w-16 h-16 mx-auto " src={ProfileIcon} alt="ProfileIcon" />
    <div>
    <label>Full Name: {Name}</label>
    </div>
    <div>
    <label>Email: {Email}</label>
    </div>
    <div>
    <label>Date Of Birth: {Date}</label>
    </div>
    <div>
    <label>Salary: {Salary}</label>
    </div>
    {
        DeleteEnebaled&&<div className="justify-center">
        <button className="bg-red-400 rounded-xl w-full mt-8 mb-4 justify-center"
         onClick={hanndleDelete}>Delete Employee</button>
        </div>
    }
    </div> 
    );
}
 
export default Employee;