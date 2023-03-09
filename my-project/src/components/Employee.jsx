import { useState } from "react";
import ProfileIcon from "../images/ProfileIcon.png"
const Employee = () => {

    const [Name, setName] = useState("DummyPerson");
    const [Email, setEmail] = useState("dummy@gmail.com");
    const [Date, setDate] = useState("DD/MM/YY");
    const [Salary, setSalary] = useState("500");

    return ( 
    <div className=" w-52 h-auto border-2 rounded-xl p-2 m-2 border-black">
    <img className="w-16 h-16 mx-auto " src={ProfileIcon} alt="ProfileIcon" />
    <p>Full Name: {Name}</p>
    <p>Email: {Email}</p>
    <p>Date Of Birth: {Date}</p>
    <p>Salary: {Salary}</p>

    </div> 
    );
}
 
export default Employee;