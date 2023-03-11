import { useState,useEffect } from "react";
import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const TopFiveEmployees = () => {
    const [Employees, setEmployees] = useState(null);
    const [Tasks, setTasks] = useState();
    const [ShowEmployees, setShowEmployees] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/tasks')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setTasks(data);
            console.log(data);
        });
        
        fetch('http://localhost:8000/employees')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setEmployees(data);
            console.log(data);
        });
        
    },[])

    const hanndleClick=(event)=>{
        event.preventDefault();
        setShowEmployees(true);


    }
    return ( 
        <div>
            <NavigationBar/>
            
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-row items-center content-around">
            {
            ShowEmployees&& Employees.map((employee,index)=>(
                <Employee name={employee.fullName} email={employee.email} 
                birthday={employee.birthday} salary={employee.salary} 
                numberOfCompleatedTasks={employee.numberOfCompleatedTasks}
                key={index} employeeId={employee.id} enableDelete={false}
                enableUpdate={false}/> 
            ))
           }
            </div>
            <div className="container py-4 px-4 mx-0 min-w-full flex flex-col items-center">
           <button className=" bg-blue-500 text-white text-xl rounded-xl w-[200px] h-[50px] mt-8 mb-4 hover:bg-blue-400"
         onClick={hanndleClick}>Show Top Employees</button>
           </div>
        </div>
     );
}
 
export default TopFiveEmployees;